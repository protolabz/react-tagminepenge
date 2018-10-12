export function getImage(configuration){
	let image = null;
	if(configuration && configuration.media){
		image = configuration.media.url;
	}
	return image;
}
