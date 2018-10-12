import React from 'react';
import styles from "./style.scss";

var view = function () {
	return (
		<div className="faqs">
			<div className="row">
				<div className="col-md-6">
					<div className="list">
						<div className="item">
							<p className="question">What is a product listing?</p>
							<p className="answer">A product listing means your product will show up on our homepage
								which shows new products in chronological order (newest to oldest), as well as being
								listing in all applicable gift guides.</p>
						</div>
						<div className="item">
							<p className="question">If my pitch performs below average do I get a refund?</p>
							<p className="answer">No.</p>
						</div>
						<div className="item">
							<p className="question">What is the average? How is it calculated?</p>
							<p className="answer">The average represents a weighted score based on the engagement
								metrics of uniqe clicks and wishlist saves for every single product currently listed on
								the site. Every 30 days we re-calculate the average to ensure accuracy within our pitch
								platform.</p>
						</div>
						<div className="item">
							<p className="question">How soon will my product pitch show up on the site?</p>
							<p className="answer">We typically approve product pitches within 24 hours.</p>
						</div>
						<div className="item">
							<p className="question">Are sexual/offensive/controversial products allowed?</p>
							<p className="answer">It depends. Any product that will reflect poorly on ThisIsWhyImBroke
								will not be approved and your money will be immediately refunded 100%.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="list">
						<div className="item">
							<p className="question">What will my product look like on the site?</p>
							<p className="answer">It will look identical to our regular content. Here’s an example</p>
						</div>
						<div className="item">
							<p className="question">Can I track my product’s performance?</p>
							<p className="answer">Yes, you will be able to see performance in your product pitch
								dashboard.</p>
						</div>
						<div className="item">
							<p className="question">Why not just let me pay a higher price for a guaranteed product
								listing?</p>
							<p className="answer">To maintain our site’s integrity as an authority on new and
								interesting products we have to ensure only high quality content is displayed to our
								users.</p>
						</div>
						<div className="item">
							<p className="question">I still have questions, who do I contact?</p>
							<p className="answer">You can reach us at ads@thisiswhyimbroke.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
