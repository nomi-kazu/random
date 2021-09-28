<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" eager>
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" color="black" rounded outlined v-on="on" >詳細</v-btn>
      </template>
      <v-card>
        <v-toolbar color="white" flat>
          <v-spacer></v-spacer>
          <v-btn class="mt-4" icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <h2 class="font-weight-thin mb-4">
            {{ shop.name }}
          </h2>
        <v-img height="400" :src="shop.photo.pc.l"></v-img>
        <v-card-text>
            <v-row align="center" class="my-4">
                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                <div class="grey--text ml-4">4.5 (500)</div>
            </v-row>

            <div class="my-4 subtitle-1">
                {{ shop.catch }}
            </div>

            <span class="grey--text">予算: </span>
            <br>
            <span> {{ shop.budget.average }}</span><br />
            <span> {{ shop.budget_memo }}</span><br />

            <span class="grey--text">収容人数: </span>
            <br>
            <span> {{ shop.budget.capacity }}</span><br />

            <span class="grey--text">禁煙: </span>
            <br>
            <span> {{ shop.non_smoking }}</span><br />

            <span class="grey--text">アクセス: </span>
            <br>
            <span>{{ shop.mobile_access }}</span><br />

            <span class="grey--text">住所: </span>
            <br>
            <span>{{ shop.address }}</span><br />

            <span class="grey--text">開店時間: </span>
            <br>
            <span>{{ shop.open }}</span>
        </v-card-text>
        <div :id="shop.id" style="height: 400px; width: 100%;"></div>

      </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: ['shop'],
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    mounted: function() {
      this.initMap()
    },
    methods: {
      // Google map APIで住所を取得（geoLocation後に作動）
      initMap() {
        var marker;
        var center = {
          lat: this.shop.lat, // 緯度
          lng: this.shop.lng // 経度
        };
        var map = new google.maps.Map(document.getElementById(this.shop.id), {
          center: {lat: this.shop.lat, lng: this.shop.lng},
          zoom: 17
        });
        marker = new google.maps.Marker({ // マーカーの追加
          position: center, // マーカーを立てる位置を指定
          map: map // マーカーを立てる地図を指定
        });
      },
    }
  }