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
    el: '#tools',
    data: {
      selected: 6,
      running: false,
      btns: [
        6, 4, 3, 2, 1
      ],
      level: 5,
    },
    mounted () {
      window.onClick = this.onClick;
    },
    methods: {
      onClick: function (num, level) {
        console.log(num, level)
        this.selected = num;
        this.level = level;
        window.level = level;
      },
    }
  });
})();
