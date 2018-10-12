var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Filter Model
 * ==================
 */

var Filter = new keystone.List('Filter',{
	defaultSort: 'name'
});

Filter.add({
	name: { type: String, required: true },
	link: { type: String, required: false},
	menuOrder : { type: Number, required: false,label : "Menu Order",default : 100}
});


Filter.register();
