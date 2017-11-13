chrome.webRequest.onBeforeRequest.addListener(
  function () {
    return {
      cancel: true
    };
  },
  {
    // http://www.president.gov.ua/documents/1332017-21850
    urls: [
      '*://imgsmail.ru/*',
      '*://*.imgsmail.ru/*',
      '*://mail.ru/*',
      '*://*.mail.ru/*',
      '*://list.ru/*',
      '*://*.list.ru/*',
      '*://bk.ru/*',
      '*://*.bk.ru/*',
      '*://inbox.ru/*',
      '*://*.inbox.ru/*',
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
      '*://auto.ru/*',
      '*://kinopoisk.ru/*',
      '*://kaspersky.ru/*',
      '*://*.kaspersky.ru/*',
      '*://kaspersky.ua/*',
      '*://*.kaspersky.ua/*',
      '*://drweb.ru/*',
      '*://*.drweb.ru/*',
    ]
  },
  ['blocking']
);
