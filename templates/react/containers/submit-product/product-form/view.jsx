import React from 'react';
import styles from './style.scss';


var view = function () {
	
	const {handleChange, submit} = this;
	const {loading, message} = this.state;
	return (
		<div className="step step-two">
			<div className="container">
				<img src="/images/step2.png" alt="step"/>
				<form onSubmit={submit.bind(this)} className="form">
					<div className="row">
						<div className="col-md-7">
							<div>
								{
									message ? (
										<div className={"alert alert-" + message.type}>
											{message.text}
										</div>

									) : null
								}
								<div className="form-group">
									<label>Product Title <span className="length">(max 40 characters)</span></label>
									<input readOnly={loading}
										   type="text"
										   onChange={handleChange.bind(this)}
										   value={this.state.productTitle}
										   name="productTitle"
										   className="form-control"
										   required
									/>
								</div>
								<div className="form-group">
									<label>Product Description <span
										className="length">(max 250 characters)</span></label>
									<textarea readOnly={loading}
											  className="form-control"
											  onChange={handleChange.bind(this)}
											  value={this.state.productDescription}
											  name="productDescription"
											  required
									/>
								</div>
								<div className="form-group">
									<label>Link</label>
									<input readOnly={loading}
										   type="text"
										   onChange={handleChange.bind(this)}
										   value={this.state.link}
										   name="link"
										   className="form-control"
										   required
									/>
								</div>
								<div className="form-group">
									<label>Price</label>
									<input readOnly={loading}
										   type="number"
										   onChange={handleChange.bind(this)}
										   value={this.state.price}
										   name="price"
										   className="form-control"
										   required
									/>
								</div>
								<div className="form-group">
									<label>Image Upload</label>
								</div>
							</div>
						</div>
						<div className="col-md-5 right-column">
							<div className="tips">
								<img src="/images/star.png"/>
								<h3>Tips for success</h3>
								<p>Use the most engaging and instantly explanatory images, titles, and product
									descriptions to help increase your product's engagement during your audition with
									our readers.
								</p>
							</div>
							<div className="preview">
								<h3>Your Product View</h3>
								<div className="card">
									<div className="card-header">
										<a href="/product" className="product-title">Twinkling Star Skirt</a>
									</div>
									<div className="card-body">
										<div className="product-image">
											<a href="/product"><span className="image"></span></a>
											<button className="btn btn-red save-btn">Save</button>
										</div>
										<div className="product-text">
											<p className="text">Brighten up any room you walk into by slipping into this
												eye-catching twinkling stars skirt. The skirt features a lovely blue hue
												and
												is accented with over 250 tiny LEDs powered by a battery pack that
												discreetly tucks away inside the waist.</p>
										</div>
									</div>
									<div className="card-footer">
										<div className="product-range">
											<p className="cost">$59.99</p>
											<span className="saves">
									<a className="icon"><i className="glyphicon glyphicon-heart-empty"></i> </a>
									<span className="count">0</span>
									<span> Gemte</span>
								</span>
										</div>
										<div className="product-action">
											<button className="btn btn-yellow">Tjek det ud</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button disabled={loading} type="submit" className="btn btn-yellow submit-btn">Save and
						Continue >
					</button>
				</form>
			</div>
		</div>
	);
};
export default view;
