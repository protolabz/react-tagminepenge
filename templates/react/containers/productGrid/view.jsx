import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Card from '../card/index';
import ReactPaginate from 'react-paginate';
import Loader from 'react-loader';

var view = function () {
	var MinHeigh = {
		'minHeight': '35px !important'
	}
	const {data, hasMore, user, onSaveToWishList, count,product_list} = this.props;
	let ProductData;
	// console.log(this.state.newData);
	if(data.length==0){
		ProductData=product_list;
	}else{
		ProductData=data;
	}
	var size = this.state.arrSize;
	 ProductData =  ProductData.slice(0, size);
	var sectionSize = this.state.sectionSizeLim;

	const pages = (count % this.pageSize!=0)?(Math.floor(count / this.pageSize) + 1):Math.floor(count / this.pageSize);
	return ProductData?(
		<div className="container" id="product-grid">
			<div className="row">
				{/*{table}*/}
				{(ProductData || []).map((product) => {
					return (
						<div key={product._id} className="col-xm-12 col-sm-6 col-md-4" style={MinHeigh}>
							<Card onSaveToWishList={onSaveToWishList} user={user} data={product} meta={this.props.meta} changeprop={this.props.changeprop}/>
						</div>
					)
				})}
			</div>
			<div style={{textAlign:"center"}}>
				{this.state.isLoading?<img style={{width:"150px"}} src="https://www.tagminepenge.dk/images/loading.gif" alt="loading"/>:null}
			</div>

			
			<div className="empty-msg">
				{
					ProductData.length == 0 ? (
						<Loader loaded={this.state.loading}>
							<h3>Loading ...</h3>
						</Loader>
					) : null
				}
			</div>
			{/*<div className="pagination-box">*/}
				{/*{*/}
					{/*pages > 1 ? (*/}
						{/*<ReactPaginate previousLabel={"Forrige"}*/}
									   {/*nextLabel={"Næste"}*/}
									   {/*breakLabel={<a href="">...</a>}*/}
									   {/*breakClassName={"break-me"}*/}
									   {/*pageCount={pages}*/}
									   {/*marginPagesDisplayed={2}*/}
									   {/*pageRangeDisplayed={5}*/}
									   {/*onPageChange={(page) => {*/}
										   {/*this.getProducts(page.selected + 1)*/}
									   {/*}}*/}
									   {/*containerClassName={"pagination"}*/}
									   {/*subContainerClassName={"pages pagination"}*/}
									   {/*activeClassName={"active"}/>*/}
					{/*) : null*/}
				{/*}*/}
			{/*</div>*/}
		</div>
	):null;
};
export default view;
 
 
