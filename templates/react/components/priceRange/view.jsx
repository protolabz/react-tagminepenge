import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {sortLinks} = this.props;
	return (
		<div className="sorting">
			<div className="price-range-slider">
				<input ref={(ref) => {
					this.inputRef = ref
				}} className="slider-input" data-slider-id='ex1Slider' type="text" data-slider-min="0"
					   data-slider-max="20" data-slider-step="1" data-slider-value="14" />
			</div>
			{
				!sortLinks?(null):(
					<div className="navigation">
						{/*<select onSelect={(value) => this.handleOnChange(value)}>*/}
							{/*<option value="-publishedDate">Nyeste</option>*/}
							{/*<option value="saves">Populær</option>*/}
							{/*<option value="price">Pris</option>*/}
						{/*</select>*/}
						<div className="dropdown filters">
							<select onChange={e=>this.onSortChange(e.target.value)} value  ={this.state.sort} className="selectpicker">
								<option value="-price">Højeste til Laveste</option>
								<option value="price">Laveste til Højeste</option>
								<option value="-publishedDate">Nyeste</option>
								<option value="saves">Mest Populær</option>
							</select>
						</div>
						{/*<ul>*/}
							{/*<li onClick = {()=>{this.onSortChange("-publishedDate")}} className={this.state.sort=='-publishedDate'?"active":null}><a>Nyeste</a></li>*/}
							{/*<li onClick = {()=>{this.onSortChange("saves")}} className={this.state.sort=='saves'?"active":null}><a>Populær</a></li>*/}
							{/*<li onClick = {()=>{this.onSortChange("price")}} className={this.state.sort=='price'?"active":null}><a>Pris</a></li>*/}
						{/*</ul>*/}
					</div>
				)
			}
			
			{
				sortLinks?(null):(
					<div className="navigation">
					<div className="dropdown filters">
						<select onChange={e=>this.onSortChange(e.target.value)} value  ={this.state.sort} className="selectpicker">
							<option value="-price">Højeste til Laveste</option>
							<option value="price">Laveste til Højeste</option>
							<option value="-publishedDate">Nyeste</option>
							<option value="saves">Mest Populær</option>
						</select>
					</div>
					</div>
				)
			}
		</div>
	);
};
export default view;
 
 
