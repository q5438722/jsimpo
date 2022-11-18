
(function() {
var alertCont;
function trackOldBrowserEvent(event) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/badbrowser_stat.php?act=track&event=' + event);
  xhr.send();
}
function exposeGlobals() {
  window.hideOldBrowser = function() {
    alertCont.remove();
    var date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    var expiresDate = date.toGMTString();
    var domain = window.locDomain;
    document.cookie = 'remixoldbshown=1; expires=' + expiresDate + '; path=/' + (domain ? '; domain=.' + domain : '') + ';secure';
    trackOldBrowserEvent('hideAlert');
  }
}
function checkOldBrowser() {
  if(!document.body) {
    setTimeout(checkOldBrowser, 100);
    return;
  }
  try {
    if ((false || !('noModule' in HTMLScriptElement.prototype)) && !false) {
      exposeGlobals();
      var alert = '<div class="OldBrowser__container" style="width:960px;">  For speed and stability when using VK, install <a href="/badbrowser.php?source=old_browser_alert" target="_blank">one of these browsers</a>.  <span class="OldBrowser__close" aria-label="Close"  role="button" onclick="hideOldBrowser();"></span></div>';
      alertCont = document.createElement('div');
      alertCont.className = 'OldBrowser';
      alertCont.id = 'old_browser_wrap';
      alertCont.innerHTML = alert;
      document.body.appendChild(alertCont);
      trackOldBrowserEvent('showAlert');
    }
  } catch(e) {}
}
setTimeout(checkOldBrowser, 0);
})();
var vk = {
  ads_rotate_interval: 120000,
  al: parseInt('3') || 4,
  id: 0,
  sex: 0,
  intnat: '1' ? true : false,
  host: 'vk.com',
  __domain: 'vk.com',
  loginDomain: 'https://login.vk.com/',
  logoutUrl: 'https://login.vk.com/?act=logout&hash=bef49f71684705a8f2&_origin=https%3A%2F%2Fvk.com&lrt=47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU',
  lang: 3,
  statsMeta: {"platform":"web2","st":false,"time":1668774207,"hash":"jBFdy92Y8t81LSniZgZmzIzYktgrK6bxxTPdYMizYBo","reloadVersion":0},
  loaderNavSection: '',
  rtl: parseInt('') || 0,
  version: 11373185,
  stDomains: 0,
  stDomain: 'https://st6-20.vk.com',
  navDomain: "",
  navPostfix: "",
  wsTransport: 'https://stats.vk-portal.net',
  stExcludedMasks: ["loader_nav","lang","sw\/"],
  zero: false,
  contlen: 33713,
  loginscheme: 'https',
  ip_h: 'bef49f71684705a8f2',
  navPrefix: '/',
  dt: parseInt('0') || 0,
  fs: parseInt('13') || 13,
  ts: 1668774207,
  tz: 10800,
  vcost: 7,
  time: [2022, 11, 18, 15, 23, 27],
  sampleUser: -1, spentLastSendTS: new Date().getTime(),
  a11y: 0,
  statusExportHash: '',
  audioAdsConfig: {"_":"_"},
  longViewTestGroup: "every_view",
  cma: 1,
  lpConfig: {
    enabled: 0,
    key: '',
    ts: 0,
    url: '',
    lpstat: 0,
    sseUrl: 'https://papi.vk.com/pushsse/ruim'
  },

  pr_tpl: "<div class=\"pr %cls%\" id=\"%id%\"><div class=\"pr_bt\"><\/div><div class=\"pr_bt\"><\/div><div class=\"pr_bt\"><\/div><\/div>",
  push_hash: '2ed8bf3e6502f5b367',

  audioInlinePlayerTpl: "<div class=\"audio_inline_player _audio_inline_player no_select\">\n  <div class=\"audio_inline_player_right\">\n    <div class=\"audio_inline_player_volume\"><\/div>\n  <\/div>\n  <div class=\"audio_inline_player_left\">\n    <div class=\"audio_inline_player_progress\"><\/div>\n  <\/div>\n<\/div>",

  pe: {"send_user_info_stats":1,"vk_apps_svg_qr":1,"upload.send_upload_stat":1,"push_notifier":1,"web_stats_transport_debugger":1,"notify_new_events_box":1,"mini_apps_web_add_to_favorites":1,"mini_apps_m_web_new_stub_page":1,"cookie_class_samesite":1,"cookie_secure_default_true":1,"story_reactions_sending_feature_web":1,"widgets_xdm_same_origin":1,"stickers_money_transfer_suggestions":1,"web2_story_box_enabled":1,"navigation_timespent":1,"market_item_recommendations_view_log":1,"market_item_others_view_log":1,"web_stats_transport_story_view":1,"registration_item_stat":1,"mvk_lazy_static_reload":1,"mute_mvk_err_peaks":1,"notifications_view_new":1,"ads_market_autopromotion_bookmarks_stats":1,"print_stickers_updated":1,"mini_apps_web_call_api_form_data":1,"groups_category_gender_choose":1,"web_new_photo_editor":1,"web_new_photo_editor_crop":1,"web_photo_editor_hide_entrypoint":1,"web_stats_try_send":1,"expand_web_vitals_grade":1,"page_loading_stat":1,"profile_questions_enabled":1,"update_private_snippets_by_queue":1,"stickers_catalog_reload_after_buy":1,"web_stats_send_on_events_limit":1,"batchify_web_stats":1,"sentry_js_sanitize_frames":1,"sentry_js_server_errors_integration":1,"sentry_js_handled_errors_integration":1,"sentry_js_known_issues_mvk_integration":1,"sentry_js_known_issues_web_integration":1,"sentry_js_web_timeouts_forwarding":1,"sentry_js_web_verbose":1,"sentry_js_inline_scripts":1,"sentry_js_reference_errors":1,"stickers_web_new_ui":1,"ads_new_reports_web_tgb":1,"ads_autopromotion_web_geo":1,"recognize_mock_turn_off":1,"photo_recognition_web":1,"aliexpress_app_links_with_partner_links":1,"ads_new_reports_web_histories":1,"ads_new_reports_mvk_histories":1,"audio_unauth_preview":1,"audio_unauth_preview_box":1,"ads_easy_promote_goods_new_create_api":1,"unauthorized_media_layer_box":1,"messenger_web_themes_easter_egg":1,"mail_history_unread_counter_observer":1,"messenger_empty_pinned_support":1,"force_act_in_get_params":1,"market_suggest_search_queries":1,"mini_apps_action_menu_mvk":1,"direct_games_safari_view_controller":1,"direct_games_install_screen_safari_view_controller":1,"apps_app_share_vk_bridge_event_disable_double_test_and_link":1,"mail_longpoll_unread_counter":1,"faq_clean_up_extra_spaces":1,"loginvk_api_use_anonymous_token":1,"mail_fastchat_reforged":1,"inline_attaches_icons":1,"mvk_quick_search_canceled_requests":1,"mail_new_conversation_stickers_hint":1,"test_folder_masks":1,"simplified_start_conversation":1,"microlandings_marketing_blocks":1,"js_errors_no_write_uncaught_errors":1,"fav_dialog_with_yourself":1,"mvk_watch_css_selectors":1,"mail_business_notify":1,"im_message_editable_sync":1,"mail_dialog_list_menu":1,"mail_new_ui_banner":1,"messages_new_empty_dialog_screen":1,"me_fc_pinned_message":1,"me_new_ads_module_detect":1,"im_clocks_fix":1,"similar_groups_after_unsubscribe":1,"market_albums_autopromotion_modal":1,"market_related_items":1,"empty_tab_history_check":1,"mvk_redirect_to_app_without_target_url":1,"mvk_vkui_search":1,"one_item_post_promotion_entrypoints":1,"ecomm_web_classifieds_profile":1,"redesign_web_market_catalog_feature":1,"waf_ajax_request_enabled":1,"cookie_lite_js_save_stat":1,"longread_tts_web_player":1,"mvk_waf_ajax_request_enabled":1,"groups_settings_tooltip":1,"classified_item_card_similar_products":1,"nospam_new_histogram":1,"messenger_make_away_link_useful":1,"search_mvk_menu_link":1,"market_add_to_bookmarks_analytics_new":1,"article_multilists":1,"apps_skip_lazy_static_reload_mvk":1,"article_text_drag":1,"analytics_web_item_creation":1,"market_view_item_analytics_new":1,"stickers_keywords_idb_cache":1,"market_transition_to_item_analytics_new":1,"market_item_card_cta_v2":1,"market_send_message_to_owner_analytics_new":1,"adsedit_legal_modal_enable_dealer_fields":1,"mvk_profile_redesign_old_posting":1,"ajax_request_parse_html_error":1,"profile_redesign_onboarding":1,"search_force_update_search_friends_on_filter_change":1,"search_disable_countries_mvk":1,"vkc_app_detection_enabled":1,"mvk_lite_log_connection_listener_error":1,"profile_hide_country_field":1,"onboarding_skip_country":1},
  ex: [],
  acl: [],
  countryISO: 'JP',
  apiConfigDomains: {
    domain: 'vk.com',
    apiDomain: 'api.vk.com',
    loginDomain: 'login.vk.com',
    connectDomain: 'id.vk.com',
  },

  isCallsDevEnv: '' ? true : false,
};;vk.rv="112691";

window.locDomain = vk.host.match(/[a-zA-Z]+\.[a-zA-Z]+\.?$/)[0];
var _ua = navigator.userAgent.toLowerCase();
if (/opera/i.test(_ua) || !/msie 6/i.test(_ua) || document.domain != locDomain) document.domain = locDomain;
var ___htest = (location.toString().match(/#(.*)/) || {})[1] || '', ___to;
___htest = ___htest.split('#').pop();
if (vk.al != 1 && ___htest.length && ___htest.substr(0, 1) == vk.navPrefix) {
  if (vk.al != 3 || vk.navPrefix != '!') {
    ___to = ___htest.replace(/^(\/|!)/, '');
    if (___to.match(/^([^\?]*\.php|login|mobile|away)([^a-z0-9\.]|$)/)) ___to = '';
    location.replace(location.protocol + '//' + location.host + '/' + ___to);
  }
}

var StaticFiles = {
  'dist/web/common_web.js' : {v: '299'},
  'al/common.80745ffc2b4aa5eeef24.css':{v:''},'common.css':{v:1},'al/base.4d336a216a9f1d8bfb22.css':{v:''},'base.css':{v:1},'al/vkui.9f3039430ee5eb415a71.css':{v:''},'vkui.css':{v:1},'al/fonts_utf.2546d253c69649b0561c.css':{v:''},'fonts_utf.css':{v:1},'al/fonts_cnt_mac.dcb0bfe5d9ea66eb7b85.css':{v:''},'fonts_cnt_mac.css':{v:1}
  ,'dist/polyfills.9d6916e19429a42923a3.js':{v:'2feba6508fe573be8f43'},'dist/react.aa0593255e5f9d5c3793.js':{v:'f3b31b6ba5c144b93f84'},'dist/palette.f1270791f24c0bc3675d.js':{v:'4b5663067bcb3ff94b92'},'dist/audioplayer.ca17adc129a573525e3c.js':{v:'299b8bfd68a6916509c56f3'},'dist/lottie.d6073f0bcab9a2f10c8d.js':{v:'b54ee29f2af608772767'},'dist/common.b843d7932ffd3c2e7c46.js':{v:'29936b15c30f9d498951497'},'dist/web/common_web.62ff59fb02cf7ff3ee92.js':{v:''},'lang3_0.js': {v: 27812903},'al/index.d999b72ad415a4756cef.css':{v:''},'index.css':{v:1},'dist/web/index.dd1d3134d99638f20842.js':{v:'17173e5cac2b047fea87b7868d96362d'},'dist/web/index.js':{v:1},'al/login.d1afdb1e4119ad531a09.css':{v:''},'login.css':{v:1},'dist/web/language.31b6cb895116080be803.js':{v:'737e447060d79ded9b15e55348433f0f'},'dist/web/language.js':{v:1},'dist/web/join.39fc357bd9077a6f1346.js':{v:'8af18ede21e88fe955004911a24f5194'},'dist/web/join.js':{v:1},'al/join.dfeb3ba6912c84525604.css':{v:''},'join.css':{v:1},'ui_controls.js':{v:191},'ui_controls.ed84b2ff3104986539e5.css':{v:''},'ui_controls.css':{v:1},'al/ui_gallery_core.37c5fe701b478e7ae53d.css':{v:''},'ui_gallery_core.css':{v:1},'dist/web/ui_components.ecb49dfd044b3156eb73.js':{v:'0269edfe0f732aab118b60c082a73c54'},'dist/web/ui_components.js':{v:1},'dist/357d86c29236f9e0b370e05bc45991c9.0033a93c39da77b18dda.js':{v:'db5cd0cbbe935b4bef25'},'dist/web/raven_logger.fa37060890dbe86e5046.js':{v:'17db6edad07af9659b649f733e586275'},'dist/web/raven_logger.js':{v:1},'dist/bbd3772e7186114b708bce2cac0c3676.5e1866bc9507fa57d19b.js':{v:'dd0b7b8bf9b89c38ed9f'},'dist/web/sentry.e318702d1190d9a0710c.js':{v:'a448456ea376c4e7b64860ca90741a06'},'dist/web/sentry.js':{v:1},'dist/web/performance_observers.8ac0e80669573c6d2dfe.js':{v:'9f50ac979760a82fc3e0ed15dc8fef16'},'dist/web/performance_observers.js':{v:1},'dist/web/css_types.4c93a5f9acb501179b06.js':{v:'f3b896e8e88bfa07f177'},'dist/web/css_types.js':{v:1},'dist/web/unauthorized.e2e75559fa64b1df7183.js':{v:'8918e21dbcf6fad60c5b726fa97dfb61'},'dist/web/unauthorized.js':{v:1},'dist/web/jobs_devtools_notification.42e1e2fe457bd091ee22.js':{v:'084dec0adf2f678e6bd7b621234acf14'},'dist/web/jobs_devtools_notification.js':{v:1},'dist/web/page_layout.b6aad03514b919dccb0a.js':{v:'40cb20cd4e7cadc32dc63b1c197c88b3'},'dist/web/page_layout.js':{v:1},'dist/web/ui_common.05917e931aa7b9ed3d90.js':{v:'1bca31efecf3c52ed6bc26c9cab1995d'},'ui_common.js':{v:1},'al/ui_common.c0faeed934ef6c709718.css':{v:''},'ui_common.css':{v:1},'dist/web/likes.1f16d025aaa078b24d1f.js':{v:'9a40c0e0c8ed50194fe6b62e4a9cb666'},'dist/web/likes.js':{v:1},'dist/web/grip.9a34757186a54ae353e3.js':{v:'8290b7b74d35b4c11dc6dc1c871c4826'},'dist/web/grip.js':{v:1}
}
var abp;
