var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Sub Category Model
 * ==================
 */

var SubCategory = new keystone.List('SubCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

SubCategory.add({
	name: { type: String, required: true },
	iconClass : { type: String, required: false,label : "Icon",default : "",
		note : "This represents the icon. To add a icon just copy the class from this link -> https://www.w3schools.com/bootstrap/bootstrap_ref_comp_glyphs.asp or http://fontawesome.io/icons/"
	},
	category: { type: Types.Relationship, ref: 'Category'},
	menuOrder : { type: Number, required: false,label : "Menu Order",default : 100},
});

//SubCategory.register();
