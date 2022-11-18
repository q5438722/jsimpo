
  try {
    window.NicoGoogleTagManagerDataLayer = [];

    var data = {
    };

        data.user = (function() {
      var user = {};

                  user.login_status = 'not_login';
      
      return user;
    })();

        data.content = (function() {
      var content = {};

            
      return content;
    })()

    window.NicoGoogleTagManagerDataLayer.push(data);
  } catch(e) {
  }
