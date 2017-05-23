chrome.tabs.getSelected(null,function(tab) {
  var tablink = tab.url;
  var input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = tablink;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
  var res = 'window.location.href = "mailto:?subject=';
  var final = res+tablink+'";'
  chrome.tabs.executeScript({code: final});
});
