document.addEventListener('submit', () => {
  const inputs = document.getElementsByTagName('input');
  const passwordValues = [];

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type.toLowerCase() === 'password') {
      passwordValues.push(inputs[i].value);
    }
  }

  if (passwordValues.length) {
    for (let i = 0; i < passwordValues.length; i++) {
      if (binarySearch(passwords, passwordValues[i])) {
        chrome.runtime.sendMessage({
          showNotification: true
        });

        break;
      }
    }
  }
});
