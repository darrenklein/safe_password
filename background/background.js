chrome.runtime.onMessage.addListener((showNotification) => {
  if (showNotification) {
    const notifcationOptions = {
      type: 'basic',
      iconUrl: 'images/icon.png',
      title: 'Safe Password',
      contextMessage: 'Change that password!',
      message: 'It is commonly used.',
      requireInteraction: true,
    };

    chrome.notifications.create(notifcationOptions);
  }
});
