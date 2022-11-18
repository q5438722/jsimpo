
        // Have this project control when the `pageload` event is sent to _satellite
        window.dexter = window.dexter || {};
        window.dexter.Analytics = window.dexter.Analytics || {};
        window.dexter.Analytics.controlPageLoad = true;
        window.dexter.utils = window.dexter.utils || {};
        try {
            window.dexter.countryMapOverride = window.dexter.countryMapOverride || { AR:"ar", PE:"pe",CO:"co",PH:"ph_en",ID:"id_en",MY:"my_en",VN:"vn_en"};
        } catch (error) {}
    