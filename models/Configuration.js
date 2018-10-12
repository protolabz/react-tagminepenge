var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Configuration Model
 * ==================
 */

var Configuration = new keystone.List('Configuration', {
	autokey: { from: 'name', path: 'key', unique: true },
	
});

Configuration.add({
	name: { type: String, required: true },
	metaTitle: { type: String, required: false },
	metaDescription: { type: Types.Textarea, required: false },
	value: { type: String, required: false},
	media: { type: Types.CloudinaryImage, required: false },
	description : { type: Types.Html, required: false,wysiwyg: true},
	link:{type:String, default: "Input Value for Image2 of Om-os page"},
	adSense:{type: Types.Html, default: "Paste your Google AdSense script here."},
	showAdSense:{type: Boolean, default: false}
});


Configuration.register();
