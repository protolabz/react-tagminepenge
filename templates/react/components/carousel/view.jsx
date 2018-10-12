import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {data} = this.props;
	var alts = this.state.alts;
	alts = alts.split('/');
	alts = alts[2];
	const { productLink } = this.props;
	
	return (
	
		<div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="false"
		
		>
			
			<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
				<span className="glyphicon glyphicon-chevron-left"></span>
			</a>
			<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
				<span className="glyphicon glyphicon-chevron-right"></span>
			</a>
			<div className="carousel-inner cImages">
				{
					(data || []).map((image,index)=>{
						return (
							<div onClick={this.handleClick} className={"item "+(index==0?"active":"")} key={index}>
								<a href={productLink} target="_blank">
								<img src={image} className="img-responsive" alt={alts}/>
								{/*<div className="carousel-caption">*/}
									{/*<p> 1.jpg </p>*/}
								{/*</div>*/}
								</a>
							</div>
						)
					})
				}
				
			</div>
			<ul className="carousel-indicators">
				{
					(data || []).map((image,index)=>{
						return (
							<li  key={index} data-target="#carousel-example-generic" data-slide-to={index} className={index==0?"active":""}>
								<img src={image} alt={alts}/>
							</li>
						)
					})
				}

				
			</ul>
		</div>
	);
};
export default view;
 
 
