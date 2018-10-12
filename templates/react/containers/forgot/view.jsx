import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {handleChange,submit,state} = this;
	const {loading,message} = this.state;
	return (
		<div id="forgot-modal" className="modal fade join" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h2 className="modal-title">Glemt dit Kodeord </h2>
					</div>
					<div className="modal-body">
						<form onSubmit={submit.bind(this)}>
							{
								message?(
									<div className={"alert alert-"+message.type}>
										{message.text}
									</div>

								):null
							}
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email</label>
								<input readOnly={loading} onChange = {handleChange.bind(this)} name="email" value = {this.state.email} type="email" className="form-control" id="exampleInputEmail1"
									   aria-describedby="emailHelp" placeholder="" required/>
							</div>
							<div className="actions">
								{/*<div className="secondary-action">*/}
									{/*<a data-dismiss="modal" data-toggle="modal" data-target="#login-modal">Login</a>*/}
								{/*</div>*/}
								<button disabled={loading} type="submit"  className="btn btn-yellow submit-btn">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
