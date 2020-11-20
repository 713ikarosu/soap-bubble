const vm = new Vue({
  el: '#belongings',
  data: {
    itemList: [
      {name:"お金", checked: false},
      {name:"スマホ", checked: false},
      {name:"傘", checked: false},
      {name:"免許書", checked: false},
      {name:"充電ケーブル系", checked: false},
      {name:"化粧品", checked: false},
      {name:"ヘアアイロン", checked: false},
      {name:"風呂グッズ", checked: false},
      {name:"おもしろいなにか", checked: false},
    ],
    add: ""
  },
  mounted() {
    if (localStorage.getItem('item')) {
      try {
          this.itemList = JSON.parse(localStorage.getItem('item'));
      } catch(e) {
          localStorage.removeItem('item');
      }
    }
  },
  methods: {
    addItem() {
      if(this.add) {
        this.itemList.push({
          name: this.add,
          checked: false
        });
        this.add = "";
      }
      this.saveItem();
    },
    saveItem() {
      const parsed = JSON.stringify(this.itemList);
      localStorage.setItem('item', parsed);
    }
  },
  template: `
    <ul>
      <li v-for="item in itemList">
       <label>
          <input type="checkbox" v-model="item.checked" @change="saveItem">
          {{ item.name }}
        </label>
      </li>
      <input type="text" v-model="add" @keyup.enter="addItem" placeholder="項目を追加">
    </ul>
  `,
});


const vm_day1 = new Vue({
  el: '#day1',
  data: {
    taskList: {
      "11:30": "羽田空港集合",
      "〜12:30": "チェックイン",
      "〜14:25": "飛行機移動",
      "〜14:55": "到着手続き",
      "〜15:45": "えびそば一幻(気が向いたらコーンパン)",
      "〜16:00": "レンタカー受け取り",
      "〜17:30": "ホテルへ移動",
      "〜17:45": "ホテルチェックイン",
      "〜18:45": "歩いて大通公園、テレビ塔、時計台観光",
      "〜19:30": "すすきの駅周辺で各自夜ご飯＆お酒調達",
      "〜21:00": "ホテルで夜ご飯",
      "〜22:00": "お風呂",
      "〜22:30": "次の日のスケジュール確認MTG",
    },
  },
  methods: {},
  template: `
    <ul>
      <li v-for="(item, key) in taskList">
       <label class="time">
          {{ key }}
        </label>
        <label class="list-item">
          {{ item }}
        </label>
      </li>
    </ul>
  `,
});

const vm_day2 = new Vue({
  el: '#day2',
  data: {
    taskList: {
      "9:45": "二条市場で朝ごはん",
      "〜10:30": "移動",
      "〜12:00": "モエレ沼公園散策&シャボン玉",
      "〜12:30": "移動",
      "〜13:30": "札幌ビール園でお昼ごはん",
      "〜14:30": "札幌ビール園散策",
      "〜15:00": "移動",
      "〜17:00": "札幌オリンピックミュージアムで遊ぶ",
      "〜18:00": "夜ご飯決定MTG & 移動",
      "〜19:30": "夜ごはん",
      "〜21:00": "お風呂",
      "〜21:30": "次の日のスケジュール確認MRG",
    },
  },
  methods: {},
  template: `
  <ul>
  <li v-for="(item, key) in taskList">
   <label class="time">
      {{ key }}
    </label>
    <label class="list-item">
      {{ item }}
    </label>
  </li>
</ul>
  `,
});

const vm_day3 = new Vue({
  el: '#day3',
  data: {
    taskList: {
      "10:00": "ホテルチェックアウト",
      "〜14:00": "小樽観光",
      "〜19:00": "新千歳周辺観光",
      "〜19:40": "出発手続き",
      "〜21:40": "飛行機",
      "〜21:40":"解散",
    },
  },
  methods: {},
  template: `
  <ul>
  <li v-for="(item, key) in taskList">
   <label class="time">
      {{ key }}
    </label>
    <label class="list-item">
      {{ item }}
    </label>
  </li>
</ul>
  `,
});

const vm_link = new Vue({
  el: '#link-area',
  data: {
    links: [
      {
        name: "くまちゃん温泉",
        link: "https://tabelog.com/hokkaido/A0101/A010103/1064401/",
      },{
        name: "こみちの湯 ほのか",
        link: "https://www.yudokoro-honoka.jp/komichi/",
      },{
        name: "すすきの天然温泉 湯香郷",
        link: "https://www.toukakyo.jp/price.php",
      },{
        name: "羽田第2ターミナル",
        link: "https://www.airdo.jp/departure/airport/haneda/",
      },{
        name: "skyticketページ",
        link: "https://skyticket.jp/user/search.php?mode=application_detail&cm_application_id=12727742",
      },{
        name: "定山渓温泉(しゅんさん)",
        link: "https://jozankei.jp/index-sm",
      },{
        name: "えびそば一幻",
        link: "https://tabelog.com/hokkaido/A0107/A010701/1034338/",
      },{
        name: "伊勢鮨(小樽)",
        link: "https://tabelog.com/hokkaido/A0106/A010601/1045303/",
      },{
        name: "だるま本店(札幌)(寿司)",
        link: "https://tabelog.com/hokkaido/A0101/A010103/1000007/",
      },{
        name: "麺屋 雪風 すすきの本店",
        link: "https://ramendb.supleks.jp/s/29360.html",
      },{
        name: "小樽クルーズ",
        link: "https://hokuo-marine.com/about.html#price",
      },{
        name: "二条市場ガイド",
        link: "https://haveagood.holiday/articles/857",
      },{
        name: "NAVITIME",
        link: "https://www.navitime.co.jp/",
      },

    ]
  },
  template: `
    <ul class="link-area">
      <li v-for="item in links">
        <a :href="item.link">{{item.name}}</a>
      </li>
    </ul>
  `,
});
