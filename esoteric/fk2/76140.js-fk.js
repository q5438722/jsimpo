import { Meteor } from 'meteor/meteor';

import { settings } from '../../settings';

Meteor.startup(function() {
	settings.add('GoogleVision_Enable', ![], {
		type: 'boolean',
		group: 'FileUpload',
		section: 'Google Vision',
		public: !![],
		enableQuery: { _id: 'FileUpload_Storage_Type', value: 'GoogleCloudStorage' },
	});
	settings.add('GoogleVision_ServiceAccount', '', {
		type: 'string',
		group: 'FileUpload',
		section: 'Google Vision',
		multiline: !![],
		enableQuery: { _id: 'GoogleVision_Enable', value: !![] },
		secret: !![],
	});
	settings.add('GoogleVision_Max_Monthly_Calls', +[], {
		type: 'int',
		group: 'FileUpload',
		section: 'Google Vision',
		enableQuery: { _id: 'GoogleVision_Enable', value: !![] },
	});
	settings.add('GoogleVision_Current_Month', +[], {
		type: 'int',
		group: 'FileUpload',
		section: 'Google Vision',
		hidden: !![],
	});
	settings.add('GoogleVision_Current_Month_Calls', +[], {
		type: 'int',
		group: 'FileUpload',
		section: 'Google Vision',
		blocked: !![],
	});
	settings.add('GoogleVision_Type_Document', ![], {
		type: 'boolean',
		group: 'FileUpload',
		section: 'Google Vision',
		enableQuery: { _id: 'GoogleVision_Enable', value: !![] },
	});
	settings.add('GoogleVision_Type_Faces', ![], {
		type: 'boolean',
		group: 'FileUpload',
		section: 'Google Vision',
		enableQuery: { _id: 'GoogleVision_Enable', value: !![] },
	});
	settings.add('GoogleVision_Type_Landmarks', ![], {
		type: 'boolean',
		group: 'FileUpload',
		section: 'Google Vision',
		enableQuery: { _id: 'GoogleVision_Enable', value: !![] },
	});
	settings.add('GoogleVision_Type_Labels', ![], {
		type: 'boolean',
		group: 'FileUpload',
		section: 'Google Vision',
		enableQuery: { _id: 'GoogleVision_Enable', value: !![] },
	});
	settings.add('GoogleVision_Type_Logos', ![], {
		type: 'boolean',
		group: 'FileUpload',
		section: 'Google Vision',
		enableQuery: { _id: 'GoogleVision_Enable', value: !![] },
	});
	settings.add('GoogleVision_Type_Properties', ![], {
		type: 'boolean',
		group: 'FileUpload',
		section: 'Google Vision',
		enableQuery: { _id: 'GoogleVision_Enable', value: !![] },
	});
	settings.add('GoogleVision_Type_SafeSearch', ![], {
		type: 'boolean',
		group: 'FileUpload',
		section: 'Google Vision',
		enableQuery: { _id: 'GoogleVision_Enable', value: !![] },
	});
	settings.add('GoogleVision_Block_Adult_Images', ![], {
		type: 'boolean',
		group: 'FileUpload',
		section: 'Google Vision',
		enableQuery: [{ _id: 'GoogleVision_Enable', value: !![] }, { _id: 'GoogleVision_Type_SafeSearch', value: !![] }],
	});
	settings.add('GoogleVision_Type_Similar', ![], {
		type: 'boolean',
		group: 'FileUpload',
		section: 'Google Vision',
		enableQuery: { _id: 'GoogleVision_Enable', value: !![] },
	});
});
