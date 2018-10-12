import React from 'react';
import styles from "./style.scss";
import Testimonials from '../testimonials';
import FAQs from '../faqs';
var view = function () {
	return (
		<div className="product-pitch">
			<div className="content">
				<div className="item get-started">
					<img src="/images/cash.jpg" alt="graphic"/>
					<p className="title">Pitch Your Product</p>
					<p className="description">We'll show it to our users for a short period - if your product's engagement with our readers is
						at least equal to or above the average of all products listed, it will earn a permanent spot on
						our site</p>
					<a className="btn btn-yellow" href="/product-form">Get Started</a>
				</div>
				<div className="item working">
					<p className="title">How it works</p>
					<div className="row container">
						<div className="col-md-4">
							<div className="sub-item">
								<p className="label">Create Your Pitch</p>
								<img src="/images/screen.png" alt="graphic"/>
								<p className="description">After creating your listing, your product will be shown to
									20,000 of our verified unique users</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="sub-item">
								<p className="label">Our Readers Engage</p>
								<img src="/images/network.png" alt="graphic"/>
								<p className="description">Unique clicks and wishlist saves are measured and compared
									against the average engagement performance of all products currently listed</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="sub-item">
								<p className="label">Performance Is Tracked</p>
								<img src="/images/gauge.png" alt="graphic"/>
								<p className="description">If your pitch performs at least equal
									to or above the average, it will be permanently listed, included in gift guides,
									newsletters, and social media
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="item preview">
					<img src="/images/preview.png" alt="graphic"/>
					<p className="description">Your product pitch will look identical to other posts on our site,
						ensuring a consistent experience for our users to engage with
					</p>
				</div>
				<div className="item stats">
					<p className="title">The This Is Why I'm Broke Audience</p>
					<div className="row">
						<div className="col-md-1">
						</div>
						<div className="col-md-2">
							<div>
								<p className="value">2 million</p>
								<p className="text">monthly visitors</p>
							</div>
						</div>
						<div className="col-md-2">
							<div>
								<p className="value">427k</p>
								<p className="text">email subscribers</p>
							</div>
						</div>
						<div className="col-md-2">
							<div>
								<p className="value">391K</p>
								<p className="text">social media followers</p>
							</div>
						</div>
						<div className="col-md-2">
							<div>
								<p className="value">18 - 34</p>
								<p className="text">average user age</p>
							</div>
						</div>
						<div className="col-md-2">
							<div>
								<p className="value">73% : 27%</p>
								<p className="text">male : female ratio</p>
							</div>
						</div>
						<div className="col-md-1">
						</div>
					</div>
				</div>
				<div className="item testimonials">
					<p className="title">Success Stories</p>
					<Testimonials/>
					<button className="btn btn-yellow">Get Started</button>
				</div>
				<div className="item faqs container">
					<p className="title">Frequently Asked Questions</p>
					<FAQs/>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
