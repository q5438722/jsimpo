






 (function(window, navigator, uri) {






     import(uri).then((fp) => {






         try {






             const {init} = fp.fingerPrint();






             init();






         } catch (e) {}






     }).catch(() => {});






 })(window, navigator, 'https://ad.mail.ru/static/sync-loader.js');






 