const spinElement = document.createElement('div');
spinElement.setAttribute('style', 'color:white;font-size:15px;position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background: rgba(225,225,225,0.6);text-align: center;display:flex;justify-content:center;align-items: center;');
spinElement.className = 'loader';
spinElement.innerHTML = "<div class='spinner'></div>";
const startSpinning = element => {
	element = element || '';
	if (typeof element === 'string') {
		const elements = document.querySelectorAll(element);
		elements.forEach(ele => {
			ele.appendChild(spinElement);
		});
	} else {
		element.appendChild(spinElement);
	}
};

const stopSpinning = element => {
	element = element || '';
	let loader;

	if (typeof element === 'string') {
		const elements = document.querySelectorAll(element);
		elements.forEach(ele => {
			loader = ele.querySelector('.loader');
			if (loader) {
				loader.remove();
			}
		});
	} else {
		loader = element.querySelector('.loader');
		if (loader) {
			loader.remove();
		}
	}
};


window.startSpinning = startSpinning;
window.stopSpinning = stopSpinning;
