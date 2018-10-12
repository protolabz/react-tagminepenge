import React from 'react';
import ProductGrid from '../productGrid/index';
var view = function() {
	const {query,user,product_list} = this.props;
	return product_list?(
		<div className="product-group">
			<div className="container">
				<div className="row">
					<div className="col-md-12 column">
						<div className="category-wise">
							<div className="products">
								<ProductGrid
									user = {user}
									 query = {query}
									product_list={product_list}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	):null;
};
export default view;
 
 
