export function getMaxPrice(products){
	
	return products.length>0?Math.max(...(products || []).map(elt => elt.price)):0;
}

export function getMinPrice(products){
	return  products.length>0?Math.min(...(products || []).map(elt => elt.price)):0;
}
