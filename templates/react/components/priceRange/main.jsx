import React, {Component} from 'react';
import ComponentView from './view';
import Slider from 'bootstrap-slider';
/**
 * @name Sample Component
 * @type Component
 * @author Inderdeep Singh
 */
export default class Main extends Component {
	/**
	 * Constructor
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			sort: "-publishedDate",
			min:'0',
			max:'168400'
		}
		// this.handleOnChange = this.handleOnChange.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			const {min, max, onPriceChange} = this.props;
			this.slider = new Slider('input.slider-input', {
				formatter: function (value) {
					return value + ' kr.';
					
				},
				min,
				max,
				range: true,
				step: 10,
				tooltip: 'always',
				tooltip_split : true,
				ticks : [min,max],
				ticks_labels: [min.toString()+ " kr.", max.toString()+ " kr."],
			});
			this.slider.on("slideStop", (val) => {
				// var min = val[0];
				// var max = val[1]
				// this.setState({
				// 	min:min,
				// 	max:max
				// })
				onPriceChange ? onPriceChange(val, this.state.sort) : null
			})
		},1000)
	}

	componentWillReceiveProps(newProps) {
		if (newProps.max != this.props.max || newProps.min != this.props.min) {
			const {min, max} = newProps;
			if(this.slider){
				let minValue = (min < parseInt(this.slider.getAttribute("min"))) ? min : parseInt(this.slider.getAttribute("min"));
				let maxValue = (max > parseInt(this.slider.getAttribute("max"))) ? max : parseInt(this.slider.getAttribute("max"));
				this.slider.setAttribute("min",minValue)
				this.slider.setAttribute("max",maxValue);
				this.slider.setAttribute("ticks",[minValue,maxValue]);
				this.slider.setAttribute("ticks_labels",[min.toString()+ " kr.", max.toString()+ " kr."]);
				this.setState({
					temp : !this.state.temp
				})
			}	
			
		}
	}
	
	onSortChange(value) {
		const {onPriceChange} = this.props;
		this.setState({sort: value})
		onPriceChange ? onPriceChange(this.slider.getValue(),value) : null
	}

	/**
	 * Render the view
	 * @returns {*}
	 */
	render() {
		return (ComponentView.bind(this))();
	}
}
//Set display name to be used in React Dev Tools
Main.displayName = 'Price-Range';
