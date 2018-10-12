import React from 'react';
import styles from "./style.scss";

const iconstyle ={
	verticalAlign: "-webkit-baseline-middle"
}

var view = function () {
	const {user, categories} = this.props;
	const result = (
		<div className="menuDrop">
			{
				(categories || []).filter(category => category.displayType == 1).map((category) => {
					{
						if(category.key=='gadgets'){
							let gadgets = 'Gadgets';
							return (
									<a key={category._id} href={"/kategori/" + category.key} >
										{gadgets}
									</a>
							)
						}
						else if(category.key=='mad-og-drikke'){
							let Mad = 'Mad & Drikke';
							return (
									<a key={category._id} href={"/kategori/" + category.key} >
										{Mad}
									</a>
							)
						}
						else{
								if(category.key!=='gadgets' && category.key!=='oplevelsesgaver'){
									return(
										<a key={category._id} href={"/kategori/" + category.key} >
											{category.name}
										</a>	
									)
								}
							
						}

					}
				})
			}
		</div>
	)
	const desktopDropDown = (
		(categories || []).filter(category => category.displayType == 2).map((category) => {
			{	
				
				if(category.key!=='gadgets-og-grej' && category.key!=='oplevelser' && category.key!=='gave-til-hende' && category.key!=='gave-til-ham'){
					
					return(
						
						<div key={category._id} id="products-menu" className="desktop-dropdown clearfix" role="menu">
							<a href={"/kategori/" + category.key}>{category.name}</a>
						</div>
						
					
					)
				}
			}
		})
	
	)
	if(this.state.canonical=='') {
		if(this.state.canonical!='') {
			var CC = this.state.canonical;
			var apps =(
				<link rel="canonical" href={CC}/>
			)	
		}
		 
	}
	return (
		<div className="header" ref={ (ref) => {
			this.headerRef = ref
		}}>
			
			<div className="header-top">
				<div className="container-fluid content" >
					<div className="search">
						<div className="col-sm-1">
							<a style= {iconstyle} href="/fortrolighedspolitik"><img src="/images/Fortrolighedspolitik.png"/></a>
						</div>
						<div className="col-sm-10">
							<form className="navbar-form" role="search" onSubmit={this.search.bind(this)}>
								<div className="input-group add-on">
									<input value={this.state.searchTex0t} onChange={(e) => {
										this.setState({searchText: e.target.value})
									}} className="form-control" placeholder="Søg" type="text"/>
									<div className="input-group-btn">
										<button className="btn btn-default" type="submit"><i
											className="glyphicon glyphicon-search"></i></button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="logo">
						<a href="/"><img className="responsiveImage" src="/images/logo.png" alt="logo"/></a>
					</div>
					{
						!user ? (
							<div className="actions">
								<a className="desktopView" data-toggle="modal" data-target="#login-modal">Log ind</a>
								<a className="mobileView leftIcon" data-toggle="modal" data-target="#login-modal">
									<i className="fa fa-sign-in"></i>
								</a>
								{/*<span className="desktopView"> | </span>*/}
								<a className="desktopView rightIcon" data-toggle="modal" data-target="#sign-up-modal">Opret</a>
								<a className="mobileView" data-toggle="modal" data-target="#sign-up-modal">
									<i className="fa fa-user-plus"></i>
								</a>
							</div>
							
						) : (
							<div className="actions">
								<div className="dropdown_box">
									<a className="nav-link dropdown-toggle" data-toggle="dropdown">
										{/*<span className="icon">*/}
											{/*<span className="glyphicon glyphicon-user" aria-hidden="true"></span>*/}
										{/*</span>*/}
										<span className="text desktopView">Min Konto</span>
										<span className="glyphicon glyphicon-user mobileView" aria-hidden="true"></span>
									</a>
									{
										user.isAdmin ? (
											<a target="blank" className="nav-link" href="/keystone">
												{/*<span className="icon glyphicon glyphicon-home"*/}
												{/*aria-hidden="true"></span>*/}
												<span className="mobileView icon glyphicon glyphicon-home"
												aria-hidden="true"></span>
												<span className="text desktopView">Go To Admin</span></a>
											
										) : null
									}
									<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
										<a className="dropdown-item" href="/min-konto">Mine Indstillinger</a>
										<a className="dropdown-item" href="/min-oenskeliste">Min Ønskeliste</a>
										<a className="dropdown-item" href="/keystone/signout">Log ud</a>
									</div>
								</div>
							</div>
						)
					}
				</div>
			</div>
			<div className="header-nav">
				<div className="nav-accent nav-accent-left"></div>
				<div className="nav-accent nav-accent-right"></div>
				<ul>
					<li className="category-others">
						<a href="/" className="nav-link">
							<span className="icon"><span className="fa fa-home" aria-hidden="true"></span></span>
							<span className="text">Nyt</span>
						</a>
					</li>
					{
						(categories || []).filter(category => category.displayType == 1).map((category) => {
							{
								if(category.key=='gave-til-ham'){
									let Ham = 'Gave Til Ham';
									return (
										<li key={category._id} className={"desktop category-"+category.key}>
											<a href={"/kategori/" + category.key} className="nav-link">
										<span className="icon"><span className={category.iconClass}
																	 aria-hidden="true"></span></span>
												<span className="text">{Ham}</span>
											</a>
										</li>
									)
								}
								else if(category.key=='gave-til-hende'){
									let Hende = 'Gave Til Hende';
									return (
										<li key={category._id} className={"desktop category-"+category.key}>
											<a href={"/kategori/" + category.key} className="nav-link">
										<span className="icon"><span className={category.iconClass}
																	 aria-hidden="true"></span></span>
												<span className="text">{Hende}</span>
											</a>
										</li>
									)
								}
								else if(category.key=='gadgets'){
									let gadgets = 'Gadgets';
									return (
										<li key={category._id} className={"desktop category-"+category.key}>
											<a href={"/kategori/" + category.key} className="nav-link">
										<span className="icon"><span className={category.iconClass}
																	 aria-hidden="true"></span></span>
												<span className="text">{gadgets}</span>
											</a>
										</li>
									)
								}
								// else if(category.key=='mad-og-drikke'){
								// 	let Mad = 'Mad & Drikke';
								// 	return (
								// 		<li key={category._id} className={"desktop category-"+category.key}>
								// 			<a href={"/kategori/" + category.key} className="nav-link">
								// 		<span className="icon"><span className={category.iconClass}
								// 									 aria-hidden="true"></span></span>
								// 				<span className="text">{Mad}</span>
								// 			</a>
								// 		</li>
								// 	)
								// }
								else if(category.key=='oplevelsesgaver'){
									let Opl = 'Oplevelsesgaver';
									return (
										<li key={category._id} className={"desktop category-"+category.key}>
											<a href={"/kategori/" + category.key} className="nav-link">
										<span className="icon"><span className={category.iconClass}
																	 aria-hidden="true"></span></span>
												<span className="text">{Opl}</span>
											</a>
										</li>
									)
								}
								
								
							}
						})
					}
					<li className="category-others desktop" onMouseEnter={this.handleMenueHover.bind(this)}
						onMouseLeave={this.handleMenueHover.bind(this)}>
						<a href="#" className="nav-link">
							<span className="icon"><span className="fa fa-bars" aria-hidden="true"></span></span>
							<span className="text">Mere</span>
						</a>
						{
							this.state.isMenuHover ? desktopDropDown  :null
						}
					</li>
				
					<li className="mobile">
						<a href="javascript:void(0)" className="nav-link" onClick={this.Click}>
							<span className="icon"><span className="glyphicon glyphicon-menu-hamburger"
														 aria-hidden="true"></span></span>
							<span className="text">Kategorier</span>
						</a>
						{ this.state.showMenu ? result : null }
					</li>
					{
						(categories || []).filter(category => category.displayType == 1).map((category) => {
							{
								if(category.key=='gadgets'){
									let gadgets = 'Gadgets';
									return (
										<li key={category._id} className={"mobile category-"+category.key} style={{background:"linear-gradient(to bottom, #3B9C9C 0, #008080 100%)"}}>
											<a href={"/kategori/" + category.key} className="nav-link">
										<span className="icon"><span className={category.iconClass}
																	 aria-hidden="true"></span></span>
												<span className="text">{gadgets}</span>
											</a>
										</li>
									)
								}
								else if(category.key=='oplevelsesgaver'){
									let oplevelser = 'Oplevelsesgaver';
									return (
										<li key={category._id} className="mobile" style={{background:"linear-gradient(to bottom, #E8A317 0, #AF7817 100%)"}}>
											<a href={"/kategori/" + category.key} className="nav-link">
										<span className="icon"><span className={category.iconClass}
																	 aria-hidden="true"></span></span>
												<span className="text">{oplevelser}</span>
											</a>
										</li>
									)
								}
								

							}
						})
					}
					
					
					
				</ul>
			</div>
			<a className="kontact" href="/kontakt-os" id="return-to-top">
				<img className="fixedImage" src="https://www.tagminepenge.dk/images/contact.png" alt="Kontact Os"/>
			</a>
		</div>
	);
};
export default view;
