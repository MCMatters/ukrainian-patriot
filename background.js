chrome.webRequest.onBeforeRequest.addListener(
  function () {
    return {
      cancel: true
    };
  },
  {
    urls: [
      '*://imgsmail.ru/*',
      '*://*.imgsmail.ru/*',
      '*://mail.ru/*',
      '*://*.mail.ru/*',
      '*://list.ru/*',
      '*://*.list.ru/*',
      '*://vkontakte.ru/*',
      '*://*.vkontakte.ru/*',
      '*://vk.com/*',
      '*://*.vk.com/*',
      '*://vk.me/*',
      '*://*.vk.me/*',
      '*://userapi.com/*',
      '*://*.userapi.com/*',
      '*://ok.ru/*',
      '*://*.ok.ru/*',
      '*://odnoklassniki.ru/*',
      '*://*.odnoklassniki.ru/*',
      '*://yastatic.net/*',
      '*://yandex.ru/*',
      '*://ya.ru/*',
      '*://*.ya.ru/*',
      '*://*.yandex.ru/*',
      '*://yandex.ua/*',
      '*://*.yandex.ua/*',
      '*://yandex.st/*',
      '*://*.yandex.st/*',
      '*://yandex.net/*',
      '*://*.yandex.net/*',
      '*://rambler.ru/*',
      '*://*.rambler.ru/*',
    ]
  },
  ['blocking']
);
