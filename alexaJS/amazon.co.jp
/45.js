
  P.when('shogunProductDB').register('gw-productdb', function(ShogunPDB) {
    var ht = "6EA15C3DC4355BAFC38AD4C9C673A4961272F399",
        mkId = "A1VC38T7YXB528",
        l = "ja-JP",
        params = {"params":{"l":l,"mkId":mkId,"swn":"productdb-ajax","ht":ht,"sa":"{}"},"method":"get"};
    return ShogunPDB(params, '{"isDesktop":1,"isTablet":0,"isMobile":0}');
  });
