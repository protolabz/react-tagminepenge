export function parseClasses(styles){
	styles = styles || {};
	const args = arguments.slice(1);
	let output = "";
	args.map((val)=>{
		if(styles[val]){
			output += (styles[val] + " ");
		} else {
			output += (val + " ")
		}
	});
	return output;
}	
