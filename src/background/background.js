function isPRListUrl(url) {
  const prListPattern = /https:\/\/.*\/.*\/pulls/;
  if (prListPattern.test(url)) {
    return true;
  }

  return false;
}

function isTargetUrl(url) {
  if (isPRListUrl(url)) {
    return true;
  }

  return false;
}

function updateDetect() {
  chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if (info.status === 'complete' && isTargetUrl(tab.url)) {
      chrome.tabs.executeScript(null, { file: 'src/3rdparty/jquery-3.4.1.min.js' }, () => {
        chrome.tabs.executeScript(null, { file: 'src/content/content.js' }, () => {
        })
      });
    }
  });
}

updateDetect();