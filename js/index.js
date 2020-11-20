const vm = new Vue({
  el: '#belongings',
  data: {
    itemList: [
      "お金",
      "スマホ",
      "傘",
      "マスク",
      "免許書",
      "充電ケーブル系",
      "化粧品",
      "ヘアアイロン",
      "風呂グッズ",
      "おもろいなにか"
    ]
  },
  methods: {},
  template: `
    <ul>
      <li v-for="item in itemList">
       <label>
          <input type="checkbox">
          {{ item }}
        </label>
      </li>
      <input type="text">
    </ul>
  `,
});



const vm_day1 = new Vue({
  el: '#day1',
  data: {
    taskList: [
      "羽田空港集合",
      "チェックイン",
      "飛行機移動",
      "到着手続き",
      "えびそば一幻(気が向いたらコーンパン)",
      "レンタカー受け取り",
      "ホテルへ移動",
      "ホテルチェックイン",
      "歩いて大通公園、テレビ塔、時計台観光",
      "すすきの駅周辺で各自夜ご飯＆お酒調達",
      "ホテルで夜ご飯",
      "お風呂",
      "次の日のスケジュール確認MTG",
    ]
  },
  methods: {},
  template: `
    <ul>
      <li v-for="item in taskList">
       <label>
          {{ item }}
        </label>
      </li>
      <input type="text">
    </ul>
  `,
});

const vm_day2 = new Vue({
  el: '#day2',
  data: {
    taskList: [
      "二条市場で朝ごはん",
      "移動",
      "モエレ沼公園散策&シャボン玉",
      "移動",
      "札幌ビール園でお昼ごはん",
      "札幌ビール園散策",
      "移動",
      "札幌オリンピックミュージアムで遊ぶ",
      "夜ご飯決定MTG & 移動",
      "夜ごはん",
      "お風呂",
      "次の日のスケジュール確認MRG",
    ]
  },
  methods: {},
  template: `
    <ul>
      <li v-for="item in taskList">
       <label>
          {{ item }}
        </label>
      </li>
      <input type="text">
    </ul>
  `,
});

const vm_day3 = new Vue({
  el: '#day3',
  data: {
    taskList: [
      "ホテルチェックアウト",
      "小樽観光",
      "新千歳周辺観光",
      "出発手続き",
      "飛行機",
      "解散",
    ]
  },
  methods: {},
  template: `
    <ul>
      <li v-for="item in taskList">
       <label>
          {{ item }}
        </label>
      </li>
      <input type="text">
    </ul>
  `,
});


