
    window.dexter.checkout = window.dexter.checkout || {};
    window.dexter.checkout.ims = {
        clientId: {
            ucv2: 'unified_checkout_client',
            ucv3: 'unified_checkout_client_v3'
        },
        targetScope: {
            ucv2: 'AdobeID,openid,sao.stock,additional_info.roles,additional_info.vat_id,additional_info.dob,update_profile.countryCode',
            ucv3: 'AdobeID,openid,sao.stock,additional_info.roles,additional_info.vat_id,additional_info.dob,update_profile.countryCode, additional_info.authenticatingAccount'
        },
        timeout: ''
    }
