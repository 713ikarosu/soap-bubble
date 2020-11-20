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
