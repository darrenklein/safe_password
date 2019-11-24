const binarySearch = new BinarySearch(passwords);

document.addEventListener('submit', () => {
  const inputs = document.getElementsByTagName('input');
  const passwordValues = [];

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type.toLowerCase() === 'password') {
      passwordValues.push(inputs[i].value);
    }
  }

  if (passwordValues.length) {
    for (let i = 0; i < passwordValues.length; i += 1) {
      if (binarySearch.run(passwordValues[i])) {
        chrome.runtime.sendMessage(true);

        break;
      }
    }
  }
});
