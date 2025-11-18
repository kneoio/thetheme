(function(){
  function getCookie(name){
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if(parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  var theme = getCookie('theme');
  if(theme === 'dark'){
    var html = document.documentElement;
    if(html.className.indexOf('kneo-dark') === -1){
      html.className += (html.className ? ' ' : '') + 'kneo-dark';
    }
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'resources/css/dark.css';
    document.head.appendChild(link);
  }
})();
