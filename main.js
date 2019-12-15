/**
 * @author : Qin
 * @date : 2019/11/13
 * @license Copyright (c) 2019 那镁克
 */
// 引入electron并创建一个Browserwindow
const { app, BrowserWindow, screen } = require('electron');
const path = require('path');
const url = require('url');

// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let showWindow;

function createWindow () {
  showWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    // fullscreenable: true,
    // fullscreen: true,
    width: screen.getPrimaryDisplay().workAreaSize.width,
    height: screen.getPrimaryDisplay().workAreaSize.height,
    titleBarStyle: 'default',
    backgroundColor: '#000000',
  });

  /*
   * 加载应用-----  electron-quick-start中默认的加载入口
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  */
  // 加载应用----适用于 react 项目
  showWindow.loadURL(url.format({
    pathname: path.join(`${__dirname}/src/index.html`),
    protocol: 'file:',
    slashes: true
  }));

  // 打开开发者工具，默认不打开
  // showWindow.webContents.openDevTools();

  // 关闭window时触发下列事件.
  showWindow.on('closed', function () {
    showWindow = null;
  });
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow);

// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (showWindow === null) {
    createWindow();
  }
});

// 你可以在这个脚本中续写或者使用require引入独立的js文件.

