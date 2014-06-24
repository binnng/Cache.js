+ function(WIN, DOC) {
  var Store = WIN['localStorage'],
    HEAD = DOC.querySelector('head');

  var Cache = {
    init: function() {

      var cssFiles = Cache.getFiles('css'),
        jsFiles = Cache.getFiles('js'),
        content;

      cssFiles.forEach(function(file) {
        content = Cache.getStoredContent(file);

        content ?
          Cache.insertCSS(content) :
          Cache.getRemoteFileContent(file, function(content) {
            Cache.onGetRemoteCSS(file, content);
          });
      });

      jsFiles.forEach(function(file) {
        content = Cache.getStoredContent(file);

        content ?
          Cache.execJS(content) :
          Cache.getRemoteFileContent(file, function(content) {
            Cache.onGetRemoteJS(file, content);
          });
      });

    },

    getFiles: function(type) {
      var files = [],
        elCache,
        queryType = 'link[rel="cache/stylesheet"]',
        dataName = 'data-href';

      if ('js' === type) {
        queryType = 'script[type="cache/javascript"]';
        dataName = 'data-src';
      }

      elCache = DOC.querySelectorAll(queryType);


      for (var i = elCache.length - 1; i >= 0; i--) {
        files.push(elCache[i].getAttribute(dataName));
      }

      return files.reverse();
    },

    getStoredContent: function(file) {
      return Store.getItem(file);
    },

    getRemoteFileContent: function(url, callback) {

      var xmlhttp = new XMLHttpRequest() || WIN['XMLHttpRequest'],
        onload = function() {
          var responseText = xmlhttp.responseText;

          callback(responseText);
        };

      xmlhttp.onload = onload;
      xmlhttp.open('get', url, true);
      xmlhttp.send(null);
    },

    onGetRemoteCSS: function(file, content) {
      Cache.insertCSS(content);
      Store.setItem(file, content);
    },

    onGetRemoteJS: function(file, content) {
      Cache.execJS(content);
      Store.setItem(file, content);
    },

    insertCSS: function(content) {
      var style = DOC.createElement('style');

      style.innerText = content;
      HEAD.appendChild(style);
    },

    execJS: function(content) {
      (new Function(content))();
    }
  };

  Cache.init();

}(this, document);