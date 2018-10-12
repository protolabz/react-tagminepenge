var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Product.add({
	title: { type: String, required: true,max : 40,note : "Maximum 40 characters"},
	metaTitle: { type: String, required: false },
	metaDescription: { type: Types.Textarea, required: false },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage,label : "Title Image"},
	moreImages: { type: Types.CloudinaryImages,label : "More Images"  },
	content: {
		brief: { type: Types.Textarea, max : 250, height: 150,note : "Maximum 250 characters"}//,
		//extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'Category', many: true },
	//subcategories: { type: Types.Relationship, ref: 'SubCategory',filters: { category: ':categories' } },
	link : { type: String, required: false,default : "" },
	price : { type: Number, required: false,default : 0 },
	saves : {type : Number,required : false,default : 0,noedit:true}
	
});

Product.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Product.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Product.register();
