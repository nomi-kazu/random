<template>
  <v-app>
    <v-flex xs="12" sm="12" md="12" cols="12">
      <v-container>
        <StartBtn @get-location-shops="getLocation" />
        <v-row>
          <v-col>
            <v-row>
              <v-card
                v-for="shop in shops"
                :key="shop.id"
                class="mx-auto my-4"
                width="350"
              >
                <img height="250" :src="shop.photo.pc.l" />
                <v-card-title>{{ shop.name | truncate(19, '...') }}</v-card-title>
                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    />
                  </v-row>
                  <div class="grey--text ml-4">4.5 (500)</div>
                  <div class="my-4 subtitle-1">
                    {{ shop.catch| truncate(30, '...') }}
                  </div>
                  <span class="grey--text">・平均予算：</span>
                  <br />
                  <span> {{ shop.budget.average| truncate(15, '...') }}</span>
                  <br />
                  <span class="grey--text">・アクセス：</span>
                  <br />
                  <span>{{ shop.mobile_access| truncate(23, '...') }}</span>
                  <br />
                  <span class="grey--text">・営業時間：</span>
                  <br />
                  <span>{{ shop.open | truncate(30, '...') }}</span>
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-app>
</template>

<script>
import StartBtn from '~/components/StartBtn'

export default {
  components: {
    StartBtn
  },

  data () {
    return {
      loader: null,
      loading: false,
      latitude: 0,
      longitude: 0,
      alert: false,
      shops: [],
      terms: []
    }
  },

  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    },
  },

  filters: {
    truncate: (value, length) => {
      var ommision = "..."
      if (value.length <= length) {
        return value
      }
      return value.substring(0, length) + ommision
    }
  },

  created: function() {
    this.getLocation()
  },

  methods: {
    // 現在地の緯度、経度の取得
    getLocation(terms) {
      if (terms) {
        this.terms = terms
      }
      if (process.client) {
        if (!navigator.geolocation) {
          alert("現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。")
          return
        }
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
        navigator.geolocation.getCurrentPosition(
          this.success,
          this.error,
          options
        )
      }
    },

    success(position) {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      this.getShops()
      if (this.alert === true) {
        this.alert = false
      }
    },

    error(error) {
      switch (error.code) {
          case 1: //PERMISSION_DENIED
              alert("位置情報の利用が許可されていません")
              break
          case 2: //POSITION_UNAVAILABLE
              alert("現在位置が取得できませんでした")
              break
          case 3: //TIMEOUT
              alert("タイムアウトになりました")
              break
          default:
              alert("現在位置が取得できませんでした")
              break
      }
    },

    // ホットペッパーAPIから周辺のデータを取得
    // G004 Japanese
    // G007 Chinese
    // G005 Western
    // G003 Italian
    // G001 Izakaya
    // G002 Bar
    // G017 Korean
    // G014 Sweets
    getShops () {
      var priceCode = null
      var genre = null
      var isTermArray = this.terms.length === 0 ? false :true
      if (isTermArray) {
        var priceCode = this.terms['priceCode']
        var genre = this.terms['genre']
        switch (priceRange) {
            case 1000:
                priceCode = 'B009, B010'
            case 2000:
                priceCode = 'B011, B001'
            case 3000:
                priceCode = 'B002'
            case 4000:
                priceCode = 'B003'
                break;
            default:
                priceCode = ''
        }
      }
      console.log(process.env.HOTPEPPER_API_KEY)
      this.$axios.$get('hotpepper/gourment/v1/', {
        params: {
          key: process.env.HOTTPEPPER_API_KEY,
          lat: this.latitude,
          lng: this.longitude,
          count: 100,
          genre: genre,
          budget: priceCode,
          range: 4,
          format: "json",
        }
      })
      .then(res => {
        this.shops = res.results.shops
        this.shops = this.ChooceAtRandom(this.shops, 6)
        this.length = res.results.shop.length
        if (res.results.shop.length === 0) {
          this.alert = true
        }
      })
    },

    ChooceAtRandom(arrayData, count) {
      // countが設定されていない場合は１にする
      var count = count || 1
      var arrayData = arrayData
      var result = []
      if (!arrayData) {
        return
      }
      for (var i = 0; i < count; i++) {
        var arrayIndex = Math.floor(Math.random() * arrayData.length)
        result[i] = arrayData[arrayIndex]
        // 1回選択された値は削除して再度選ばれないようにする
        arrayData.splice(arrayIndex, 1)
      }
      return result
    }
  }
}
</script>