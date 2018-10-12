
const initialState={
	title:'My Title',
	image:'https://res.cloudinary.com/tagminepenge/image/upload/v1513439651/u18duf7qtfhgsgp7fabg.png',
	description:'this is My description',
	productLink:'https://www.tagminepenge.dk/produkt/5a354154a86dca00046d8139/Candyfloss-Maskine',
}
export default function(state = initialState, action) {

	switch (action.type) {
		case "SET_METATAG" :
        state={
			...state,
			title:action.payload.title,
			image:action.payload.image,
			description:action.payload.description,
			productLink:action.payload.productLink
		}
	}
	return state;
}
