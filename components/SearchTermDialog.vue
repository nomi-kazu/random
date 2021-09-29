<template>
  <!-- 検索時ダイアログエリア -->
  <div>
    <v-card elevation="24" max-width="900px" class="mx-auto">
      <!-- カルーセル部分 -->
      <v-carousel
        v-model="model"
        :continuous="false"
        :hide-delimiters="true"
        :progress="true"
        progress-color="white"
        :show-arrows-on-hover="false"
        height
      >
        <!-- ジャンル選択エリア -->
        <v-carousel-item>
          <v-sheet color="green" height="100%" tile>
            <h1
              v-if="!$vuetify.breakpoint.xs"
              class="font-weight-thin pl-3 pt-4 mb-4"
              style="color:#fff"
            >
              今日の気分はなんでしょうか？
            </h1>
            <h1
              v-if="$vuetify.breakpoint.xs"
              class="font-weight-thin pl-3 pt-4 mb-4"
              style="color:#fff"
            >
              ジャンルを選んでください
            </h1>
            <v-item-group :multiple="true">
              <v-container>
                <v-row>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'green' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchGenre('G004')
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          和食
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          和食
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'green' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchGenre('G007')
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          中華
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          中華
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'green' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchGenre('G005')
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          洋食
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          洋食
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'green' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchGenre('G006')
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          イタリアン
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          イタリアン
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>

                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'green' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchGenre('G001')
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          居酒屋
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          居酒屋
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'green' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchGenre('G002')
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          バー
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          バー
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'green' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchGenre('G017')
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          韓国料理
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          韓国料理
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'green' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchGenre('G014')
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          スイーツ
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          スイーツ
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-row align="center" justify="center">
                    <v-col class="text-center" cols="12">
                      <v-btn
                        color="#fff"
                        dark
                        rounded
                        outlined
                        large
                        class="ma-2"
                        @click="model++"
                      >
                        次へ
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-row>
              </v-container>
            </v-item-group>
          </v-sheet>
        </v-carousel-item>
        <!-- 価格設定選択エリア -->
        <v-carousel-item>
          <v-sheet color="blue" height="100%" tile>
            <h1
              v-if="!$vuetify.breakpoint.xs"
              class="font-weight-thin pl-3 pt-4 mb-4"
              style="color:#fff"
            >
              今日の予算はどのくらいでしょうか？
            </h1>
            <h1
              v-if="$vuetify.breakpoint.xs"
              class="font-weight-thin pl-3 pt-4 mb-4"
              style="color:#fff"
            >
              予算金額を選んでください
            </h1>
            <v-item-group>
              <v-container>
                <v-row>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'primary' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchPriceRange(1000)
                          model++
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          ~¥1,000
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          ~¥1,000
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'primary' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchPriceRange(2000)
                          model++
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          ~¥2,000
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          ~¥2,000
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'primary' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchPriceRange(3000)
                          model++
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          ~¥3,000
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          ~¥3,000
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'primary' : 'white'"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="
                          toggle()
                          fetchPriceRange(4000)
                          model++
                        "
                      >
                        <div
                          v-if="!active"
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          ~¥4,000
                        </div>
                        <div
                          v-if="active"
                          class="display-1 flex-grow-1 text-center"
                        >
                          ~¥4,000
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-row align="center" justify="center">
                    <v-col class="text-center" cols="12">
                      <v-btn
                        color="#fff"
                        dark
                        rounded
                        outlined
                        large
                        class="ma-2"
                        @click="model++"
                      >
                        次へ
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-row>
              </v-container>
            </v-item-group>
          </v-sheet>
        </v-carousel-item>
        <!-- 位置情報選択エリア -->
        <v-carousel-item>
          <v-sheet color="green" height="100%" tile>
            <h1
              v-if="!$vuetify.breakpoint.xs"
              class="font-weight-thin pl-3 pt-4 mb-4"
              style="color:#fff"
            >
              Googleの位置情報サービスを利用しますか？
            </h1>
            <h1
              v-if="$vuetify.breakpoint.xs"
              class="font-weight-thin pl-3 pt-4 mb-4"
              style="color:#fff"
            >
              Googleの位置情報サービスを利用しますか？
            </h1>
            <v-item-group>
              <v-container>
                <v-row align="center" justify="center">
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        color="white"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="getPresentLocationShops"
                      >
                        <div
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          現在地から探す
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" xs="12" md="3" sm="3">
                    <v-item>
                      <v-card
                        color="white"
                        elevation="24"
                        class="d-flex align-center"
                        height="150"
                        @click="model++"
                      >
                        <div
                          class="display-1 black--text font-weight-thin text-center flex-grow-1"
                        >
                          利用して探す
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-sheet>
        </v-carousel-item>
        <!-- 位置情報取得エリア -->
        <v-carousel-item>
          <v-sheet color="green" height="100%" tile>
            <h1
              class="font-weight-thin pl-3 pt-4 mb-4"
              style="color:#fff"
            >
              場所を検索
            </h1>
            <v-item-group>
              <v-container>
                <v-row align="center" justify="center">
                  <v-col cols="12" xs="12">
                    <v-card
                      color="white"
                      elevation="24"
                      class="d-flex align-center"
                    >
                      <SearchFromMap @set-location="setLocation" />
                    </v-card>
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="text-center" cols="12">
                    <v-btn
                      color="#fff"
                      dark
                      rounded
                      outlined
                      large
                      class="ma-2"
                      @click="getLocationShops"
                    >
                      結果を表示！
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
import SearchFromMap from "~/components/SearchFromMap"

export default {
  components: {
    SearchFromMap
  },
  data() {
    return {
      dialog: false,
      model: null,
      genre: [],
      priceRange: 0,
      locale: null
    }
  },
  methods: {
    // 検索したエリアを取得
    setLocation(locale) {
      this.locale = locale
    },
    // エリアを指定して検索
    getLocationShops() {
      this.dialog = false
      var terms = []
      terms["genre"] = this.genre
      terms["priceRange"] = this.priceRange
      terms["locale"] = this.locale
      this.$emit("get-location-shops", terms)
    },
    // 現在地を取得して検索
    getPresentLocationShops() {
      this.dialog = false
      var terms = []
      terms["genre"] = this.genre
      terms["priceRange"] = this.priceRange
      this.$emit("get-location-shops", terms)
    },
    // ジャンルコードを取得
    fetchGenre(val) {
      var index = this.genre.indexOf(val)
      if (index === -1) {
        this.genre.push(val)
      } else {
        this.genre.splice(index, 1)
      }
    },
    // 値段コードの範囲を取得
    fetchPriceRange(price) {
      this.priceRange = price
    }
  }
}
</script>
