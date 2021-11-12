<template>
  <!-- 店舗詳細モーダルボタン -->
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      eager
    >
      <!-- 店舗詳細モーダル -->
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" color="black" rounded outlined v-on="on" style="text-transform: none">
          詳細
        </v-btn>
      </template>
      <v-card>
        <v-toolbar color="#fff" flat>
          <v-spacer />
          <v-btn class="mt-4" icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-row class="mb-4">
            <h2 class="font-weight-thin mt-2 ml-2">
              {{ shop.name }}
            </h2>
          </v-row>
          <v-img height="400" :src="shop.photo" />
          <v-divider />
          <v-card-text>
            <div class="my-4 subtitle-1">
              {{ shop.catch }}
            </div>
            <div v-if="shop.budget && shop.budget_memo">
              <span class="grey--text">平均予算: </span>
              <br />
              <span> {{ shop.budget }}</span><br />
              <span> {{ shop.budget_memo }}</span><br />
            </div>
            <div v-if="shop.capacity">
              <span class="grey--text">収容人数: </span>
              <br />
              <span> {{ shop.capacity }}</span><br />
            </div>
            <div v-if="shop.non_smoking">
              <span class="grey--text">禁煙: </span>
              <br />
              <span> {{ shop.non_smoking }}</span><br />
            </div>
            <div v-if="shop.mobile_access">
              <span class="grey--text">アクセス: </span>
              <br />
              <span>{{ shop.mobile_access }}</span><br />
            </div>
            <div v-if="shop.address">
              <span class="grey--text">アドレス: </span>
              <br />
              <span>{{ shop.address }}</span><br />
            </div>
            <div v-if="shop.open">
              <span class="grey--text">開店時間: </span>
              <br />
              <span>{{ shop.open }}</span>
            </div>
          </v-card-text>
          <div :id="shop.shop_id" style="height: 400px; width: 100%;" />
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  mounted: function() {
    this.initMap()
  },
  methods: {
    // Google map APIで住所を取得（geoLocation後に作動）
    initMap() {
      var center = {
        lat: parseFloat(this.shop.lat), // 緯度
        lng: parseFloat(this.shop.lng) // 経度
      }
      var map = new google.maps.Map(document.getElementById(this.shop.shop_id), {
        center: {
          lat: parseFloat(this.shop.lat),
          lng: parseFloat(this.shop.lng)
        },
        zoom: 17
      })
      var marker = new google.maps.Marker({
        position: center,
        map: map
      })
    }
  }
}
</script>