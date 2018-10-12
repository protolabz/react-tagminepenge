import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {handleChange,submit,state} = this;
	const {config} = this.props;
	const {loading,message} = this.state;
	const titleText = config["contact-us-title"];
	return (
		<div className="container contact-us">
			<div className="form">
				<p className="title">Kontakt os</p>
				{
					(titleText && titleText!='')?(
						<p className="title-text">{titleText.value}</p>
					):null
				}
				<form onSubmit={submit.bind(this)}>
					{
						message?(
							<div className={"alert alert-"+message.type}>
								{message.text}
							</div>

						):null
					}
					<div className="form-group">
						<label>Dit Navn</label>
						<input readOnly={loading} type="text" onChange = {handleChange.bind(this)} value = {this.state.name} name="name"  className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Din Email</label>
						<input readOnly={loading} type="email" onChange = {handleChange.bind(this)} value = {this.state.email} name="email" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Emne</label>
						<input readOnly={loading} type="text" onChange = {handleChange.bind(this)} value = {this.state.subject} name="subject" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Din Besked</label>
						<textarea readOnly={loading} className="form-control" onChange = {handleChange.bind(this)} value = {this.state.contactMessage} name="contactMessage"  required/>
					</div>
					<button disabled={loading} type="submit" className="btn btn-yellow pull-right sendBtn">Send</button>
				</form>
			</div>
		</div>
	);
};
export default view;
 
 
