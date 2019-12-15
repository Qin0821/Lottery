/**
 * @author : Qin
 * @date : 2019/11/17
 * @license Copyright (c) 2019 那镁克
 */

function keyDown (e) {
  var currKey = 0, e = e || event;

  currKey = e.keyCode || e.which || e.charCode;

  var keyName = String.fromCharCode(currKey);

  console.log('按键码: ' + currKey + ' 字符: ' + keyName);
  if (currKey === 49) {
    // 1 -> 一等奖
    onClick(1);
  } else if (currKey === 50) {
    // 2 -> 二等奖
    onClick(2);
  } else if (currKey === 51) {
    // 3 -> 三等奖
    onClick(3);
  } else if (currKey === 52) {
    // 4 -> 四等奖
    onClick(4);
  } else if (currKey === 53) {
    // 5 -> 五等奖
    onClick(5);
  } else if (currKey === 54) {
    // 6 -> 特等奖
    onClick(0);
  } else if (currKey === 189) {
    window.location.href = 'index.html';
  }
}

document.onkeydown = keyDown;
