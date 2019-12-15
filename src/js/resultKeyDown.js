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
  if (currKey === 48) {
    // 0 -> 重置
    reset();
  } else if (currKey === 49) {
    // 1 -> 一等奖
    handleKeyup(5, 1);
  } else if (currKey === 50) {
    // 2 -> 二等奖
    handleKeyup(5, 2);
  } else if (currKey === 51) {
    // 3 -> 三等奖
    handleKeyup(10, 3);
  } else if (currKey === 52) {
    // 4 -> 四等奖
    handleKeyup(25, 4);
  } else if (currKey === 53) {
    // 5 -> 五等奖
    handleKeyup(30, 5);
  } else if (currKey === 54) {
    // 6 -> 特等奖
    handleKeyup(1, 0);
  }
    // else if (currKey > 48 && currKey < 58) {
    //   // 1 - 9 设置抽奖人数
    //   handleKeyup(keyName);
  // }
  else if (currKey === 13) {
    // enter 开始/停止抽奖
    toggle();
  } else if (currKey === 27) {
    // esc 关闭抽奖框
    $('#result').css('display', 'none');
    $('#main').removeClass('mask');
  } else if (currKey === 187) {
    window.location.href = 'result.html';
  } else if (currKey === 189) {
    // window.location.href = 'index.html';
  }
}

document.onkeydown = keyDown;
