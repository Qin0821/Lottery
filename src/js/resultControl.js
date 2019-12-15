/**
 * @author : Qin
 * @date : 2019/11/17
 * @license Copyright (c) 2019 那镁克
 */
(function () {
  var choosed = JSON.parse(localStorage.getItem('choosed')) || {};
  console.log(localStorage);
  console.log(choosed);
  new Vue({
    el: '#main',
    data: {
      results: [],
      result: {
        data: '',
      },
      level: 1,
    },
    mounted () {
      window.onClick = this.onClick;

      let vm = this;
      let locals = window.localStorage;
      console.log(locals);
      let str_results = [];
      // 遍历(排除choosed)
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'choosed') {
          str_results.push(localStorage.getItem(localStorage.key(i)));
        }
      }
      // 分割每个string, 并将</br>换成空格
      let results = [];
      for (let nameList of str_results) {
        let temp = JSON.parse(nameList);
        const data = temp.data.map(item => {return item.replace('<br/>', ' ');});
        const a = {
          level: temp.level,
          data: data,
        };
        if (temp.level === this.level) {
          this.result = a;
        }
        results.push(a);
      }

      // 根据长度进行排序，名单短的放在前面
      results = results.sort((x, y) => {
        return x.level - y.level;
      });
      console.log(results + 'bbb');
      this.results = results;
    },
    methods: {
      onClick: function (level) {
        let r = {
          level: level
        };
        for (let result of this.results) {
          if (result.level === level) {
            r = result;
          }
        }
        this.result = r;
        this.level = level;
        console.log(this.result);
        console.log(this.level);
      },
    }
  });
})();
