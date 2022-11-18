
(function() {
	var rootPath = '/us';

	if (rootPath === '(none)' || rootPath === '/us') {
		rootPath = '';
	}

	var endPoint = rootPath + '/shop/experience-meta';

	if (!window.acTargetCustomSettings) {
		window.acTargetCustomSettings = {
			constants : {
				asTexServiceEndpoint: endPoint
			}
		}
	} else {
		if (!window.acTargetCustomSettings.constants) {
			window.acTargetCustomSettings.constants = {};
		}
		window.acTargetCustomSettings.constants.asTexServiceEndpoint = window.acTargetCustomSettings.constants.asTexServiceEndpoint || endPoint;
	}
})();
