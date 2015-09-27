App.info({
  id:"com.id1jzmape5r04f41wca0l9",
  name: 'bringMe',
  description: 'Earn money when you do grocery shopping; do grocery shopping without driving',
  author: 'ZOESH',
  email: 'info@zoesh.com',
  website: '52.89.149.88',
  version: '0.01'
});

App.icons({
  // iOS
  'iphone': 'resources/icons/icon-60.png', //57
  'iphone_2x': 'resources/icons/icon-60@2x.png',
  'iphone_3x': 'resources/icons/icon-60@3x.png',
});

App.launchScreens({
  // iOS
  'iphone': 'resources/splash/Default~iphone.png',
  'iphone_2x': 'resources/splash/Default@2x~iphone.png',
  'iphone6': 'resources/splash/Default-736h.png',
  'iphone6p_landscape': 'resources/splash/Default-Landscape-736h.png',
  'iphone5': 'resources/splash/Default-667h.png',
});

App.setPreference('StatusBarOverlaysWebView', 'true');
App.setPreference('StatusBarStyle', 'default');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('fullscreen','true');
App.setPreference('android-windowSoftInputMode','adjustresize');
App.setPreference('android-layout_alignParentBottom','true');
App.setPreference('KeyboardDisplayRequiresUserAction','false');
App.accessRule('*');