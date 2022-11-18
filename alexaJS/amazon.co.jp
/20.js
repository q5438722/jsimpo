
  var logo = document.getElementById('nav-bb-logo');
  if (window.devicePixelRatio <= 1) {
    window._navbarSpriteUrl = "https://images-fe.ssl-images-amazon.com/images/G/09/gno/images/general/backup-logo_blue._CB481604121_.png";
    logo.style.backgroundImage = "url(https://images-fe.ssl-images-amazon.com/images/G/09/gno/images/general/backup-logo_blue._CB481604121_.png)";
  } else {
    window._navbarSpriteUrl = "https://images-fe.ssl-images-amazon.com/images/G/09/gno/images/general/backup-logo_blue_2x._CB481604121_.png";
    logo.style.backgroundImage = "url(https://images-fe.ssl-images-amazon.com/images/G/09/gno/images/general/backup-logo_blue_2x._CB481604121_.png)";
    logo.style.backgroundSize = "110px 35px";
  }
