import React from 'react';
import {getError} from '../../utils/request';

var view = function () {
	const {routeInfo, navLinks, user, config, categories, filters,newState,product} = this.props;
	       // console.log(this.props.product);
	let pathname=this.props.url;
	let id = pathname.split("/")[2];
	let productLink="https://www.tagminepenge.dk"+pathname;
	if(id){
		// getProduct(id).then((data)=>{
		// 	console.log(data);
		// });
	}
	function  getProduct(id) {
		
		var promise = new Promise((resolve, reject) => {
			getProduct(id).then(action=>{
				if(getError(action)){
					//window.location.href="/";
					return;
				} else {
					let data= action.payload.data;
					resolve(data);
				}

			})
		});
		return promise;
	}

	let title;
	let image;
	let description;
	let robots="NOODP";
	let snippet="nosnippet";
	if(this.props.product1){
		 title=this.props.product1.title;
		 image=this.props.product1.image.secure_url;
		 description=this.props.product1.content.brief;
	}else{
		 title='My Title';
		 image='https://res.cloudinary.com/tagminepenge/image/upload/v1516602897/bhufrddrh6qji2gq8anz.png';
		 description='My description';
	}

	if(this.state.canonical==='/pris'){
		return (
			<html>
			<head>
				<title>{this.props.title}</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="robots" content="noindex, nofollow" />
				<meta name="googlebot" content="noindex, nofollow"/>
				<meta name="slurp" content="noindex, nofollow"/>
				<meta name="msnbot" content="noindex, nofollow"/>
				<meta name="description" content={this.props.description}/>

				{/* Facebook meta tagdata*/}
				<meta property="og:url" content={productLink} />
				<meta property="og:title" content={this.props.fbTitle}  />
				<meta property="og:type" content="shoping website" />
				<meta property="og:image" content={this.props.fbImage}/>
				<meta property="og:description" content={this.props.fbDescription} />

				{/*Twitter Card data */}
				<meta name="twitter:card" content="summary"/>
				<meta name="twitter:site" content="shoping website"/>
				<meta name="twitter:title" content={this.props.fbTitle}/>
				<meta name="twitter:description" content={this.props.fbDescription}/>
				<meta name="twitter:creator" content="@author_handle"/>

				<meta name="twitter:image" content={this.props.fbImage}/>

				<link rel="canonical" href={"https://www.tagminepenge.dk"+this.state.canonical}/>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>

				<link href="/styles/site.css" rel="stylesheet"/>
				{/*<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet"/>*/}
				{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
				{/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
				{/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
				<style dangerouslySetInnerHTML={{__html: this.props.children}} />
				{this.props.user && this.props.user.canAccessKeystone
				&& <link href="/keystone/styles/content/editor.min.css" rel="stylesheet"/>
				}


			</head>

			<body>


			<div id="body" >

				{
					// - The children block should contain the body of your template's content
					React.cloneElement(this.props.children,{changeprop:this.changeprop})
				}
			</div>

			{
			}
			<script src="/js/jquery/jquery-1.11.3.min.js"></script>

			{
				// - Customise which Bootstrap javascript files are served by including
				// - them specifically here, instead of bootstrap-3.3.5.min.js
			}
			<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114743187-1"></script>


			{this.props.user && this.props.user.canAccessKeystone
			// - The KeystoneJS Content Editor provides support for ks-editable data attributes,
			// - which generate links to edit content for users who can access Keystone
			&& <script src="/keystone/js/content/editor.js"></script>
			}

			<script src="/js/bundle.js"></script>

			{
				// - Add scripts that are globally required by your site here.

				// - Include template-specific javascript files by extending the js block
				this.props.js
			}
			{/*<link rel="stylesheet" type="text/css" href="//cdn.sstatic.net/Sites/stackoverflow/all.css?v=8c7d44a438e6"/>*/}
			</body>
			</html>
		);
	}
	else if(this.state.canonical==='/populaer'){
		return (
			<html>
			<head>
				<title>{this.props.title}</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="robots" content="noindex, nofollow" />
				<meta name="googlebot" content="noindex, nofollow"/>
				<meta name="slurp" content="noindex, nofollow"/>
				<meta name="msnbot" content="noindex, nofollow"/>
				<meta name="description" content={this.props.description}/>

				{/* Facebook meta tagdata*/}
				<meta property="og:url" content={productLink} />
				<meta property="og:title" content={this.props.fbTitle}  />
				<meta property="og:type" content="shoping website" />
				<meta property="og:image" content={this.props.fbImage}/>
				<meta property="og:description" content={this.props.fbDescription} />

				{/*Twitter Card data */}
				<meta name="twitter:card" content="summary"/>
				<meta name="twitter:site" content="shoping website"/>
				<meta name="twitter:title" content={this.props.fbTitle}/>
				<meta name="twitter:description" content={this.props.fbDescription}/>
				<meta name="twitter:creator" content="@author_handle"/>

				<meta name="twitter:image" content={this.props.fbImage}/>

				<link rel="canonical" href={"https://www.tagminepenge.dk"+this.state.canonical}/>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>

				<link href="/styles/site.css" rel="stylesheet"/>
				{/*<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet"/>*/}
				{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
				{/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
				{/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
				<style dangerouslySetInnerHTML={{__html: this.props.children}} />
				{this.props.user && this.props.user.canAccessKeystone
				&& <link href="/keystone/styles/content/editor.min.css" rel="stylesheet"/>
				}


			</head>

			<body>


			<div id="body" >

				{
					// - The children block should contain the body of your template's content
					React.cloneElement(this.props.children,{changeprop:this.changeprop})
				}
			</div>

			{
			}
			<script src="/js/jquery/jquery-1.11.3.min.js"></script>

			{
				// - Customise which Bootstrap javascript files are served by including
				// - them specifically here, instead of bootstrap-3.3.5.min.js
			}
			<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114743187-1"></script>


			{this.props.user && this.props.user.canAccessKeystone
			// - The KeystoneJS Content Editor provides support for ks-editable data attributes,
			// - which generate links to edit content for users who can access Keystone
			&& <script src="/keystone/js/content/editor.js"></script>
			}

			<script src="/js/bundle.js"></script>

			{
				// - Add scripts that are globally required by your site here.

				// - Include template-specific javascript files by extending the js block
				this.props.js
			}
			{/*<link rel="stylesheet" type="text/css" href="//cdn.sstatic.net/Sites/stackoverflow/all.css?v=8c7d44a438e6"/>*/}
			</body>
			</html>
		);
	}
	else if(this.state.canonical==='/nyt'){
		return (
			<html>
			<head>
				<title>{this.props.title}</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="robots" content="noindex, nofollow" />
				<meta name="googlebot" content="noindex, nofollow"/>
				<meta name="slurp" content="noindex, nofollow"/>
				<meta name="msnbot" content="noindex, nofollow"/>
				<meta name="description" content={this.props.description}/>

				{/* Facebook meta tagdata*/}
				<meta property="og:url" content={productLink} />
				<meta property="og:title" content={this.props.fbTitle}  />
				<meta property="og:type" content="shoping website" />
				<meta property="og:image" content={this.props.fbImage}/>
				<meta property="og:description" content={this.props.fbDescription} />

				{/*Twitter Card data */}
				<meta name="twitter:card" content="summary"/>
				<meta name="twitter:site" content="shoping website"/>
				<meta name="twitter:title" content={this.props.fbTitle}/>
				<meta name="twitter:description" content={this.props.fbDescription}/>
				<meta name="twitter:creator" content="@author_handle"/>

				<meta name="twitter:image" content={this.props.fbImage}/>

				<link rel="canonical" href={"https://www.tagminepenge.dk"+this.state.canonical}/>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>

				<link href="/styles/site.css" rel="stylesheet"/>
				{/*<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet"/>*/}
				{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
				{/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
				{/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
				<style dangerouslySetInnerHTML={{__html: this.props.children}} />
				{this.props.user && this.props.user.canAccessKeystone
				&& <link href="/keystone/styles/content/editor.min.css" rel="stylesheet"/>
				}


			</head>

			<body>


			<div id="body" >

				{
					// - The children block should contain the body of your template's content
					React.cloneElement(this.props.children,{changeprop:this.changeprop})
				}
			</div>

			{
			}
			<script src="/js/jquery/jquery-1.11.3.min.js"></script>

			{
				// - Customise which Bootstrap javascript files are served by including
				// - them specifically here, instead of bootstrap-3.3.5.min.js
			}
			<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114743187-1"></script>


			{this.props.user && this.props.user.canAccessKeystone
			// - The KeystoneJS Content Editor provides support for ks-editable data attributes,
			// - which generate links to edit content for users who can access Keystone
			&& <script src="/keystone/js/content/editor.js"></script>
			}

			<script src="/js/bundle.js"></script>

			{
				// - Add scripts that are globally required by your site here.

				// - Include template-specific javascript files by extending the js block
				this.props.js
			}
			{/*<link rel="stylesheet" type="text/css" href="//cdn.sstatic.net/Sites/stackoverflow/all.css?v=8c7d44a438e6"/>*/}
			</body>
			</html>
		);
	}
	
	else if(this.state.canonical==='/min-konto'){
		return (
			<html>
			<head>
				<title>{this.props.title}</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="robots" content="noindex, nofollow" />
				<meta name="googlebot" content="noindex, nofollow"/>
				<meta name="slurp" content="noindex, nofollow"/>
				<meta name="msnbot" content="noindex, nofollow"/>
				<meta name="description" content={this.props.description}/>

				{/* Facebook meta tagdata*/}
				<meta property="og:url" content={productLink} />
				<meta property="og:title" content={this.props.fbTitle}  />
				<meta property="og:type" content="shoping website" />
				<meta property="og:image" content={this.props.fbImage}/>
				<meta property="og:description" content={this.props.fbDescription} />

				{/*Twitter Card data */}
				<meta name="twitter:card" content="summary"/>
				<meta name="twitter:site" content="shoping website"/>
				<meta name="twitter:title" content={this.props.fbTitle}/>
				<meta name="twitter:description" content={this.props.fbDescription}/>
				<meta name="twitter:creator" content="@author_handle"/>

				<meta name="twitter:image" content={this.props.fbImage}/>

				<link rel="canonical" href={"https://www.tagminepenge.dk"+this.state.canonical}/>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>

				<link href="/styles/site.css" rel="stylesheet"/>
				{/*<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet"/>*/}
				{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
				{/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
				{/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
				<style dangerouslySetInnerHTML={{__html: this.props.children}} />
				{this.props.user && this.props.user.canAccessKeystone
				&& <link href="/keystone/styles/content/editor.min.css" rel="stylesheet"/>
				}


			</head>

			<body>


			<div id="body" >

				{
					// - The children block should contain the body of your template's content
					React.cloneElement(this.props.children,{changeprop:this.changeprop})
				}
			</div>

			{
			}
			<script src="/js/jquery/jquery-1.11.3.min.js"></script>

			{
				// - Customise which Bootstrap javascript files are served by including
				// - them specifically here, instead of bootstrap-3.3.5.min.js
			}
			<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114743187-1"></script>


			{this.props.user && this.props.user.canAccessKeystone
			// - The KeystoneJS Content Editor provides support for ks-editable data attributes,
			// - which generate links to edit content for users who can access Keystone
			&& <script src="/keystone/js/content/editor.js"></script>
			}

			<script src="/js/bundle.js"></script>

			{
				// - Add scripts that are globally required by your site here.

				// - Include template-specific javascript files by extending the js block
				this.props.js
			}
			{/*<link rel="stylesheet" type="text/css" href="//cdn.sstatic.net/Sites/stackoverflow/all.css?v=8c7d44a438e6"/>*/}
			</body>
			</html>
		);
	}
	else if(this.state.canonical==='/min-oenskeliste'){
		return (
			<html>
			<head>
				<title>{this.props.title}</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="robots" content="noindex, nofollow" />
				<meta name="googlebot" content="noindex, nofollow"/>
				<meta name="slurp" content="noindex, nofollow"/>
				<meta name="msnbot" content="noindex, nofollow"/>
				<meta name="description" content={this.props.description}/>

				{/* Facebook meta tagdata*/}
				<meta property="og:url" content={productLink} />
				<meta property="og:title" content={this.props.fbTitle}  />
				<meta property="og:type" content="shoping website" />
				<meta property="og:image" content={this.props.fbImage}/>
				<meta property="og:description" content={this.props.fbDescription} />

				{/*Twitter Card data */}
				<meta name="twitter:card" content="summary"/>
				<meta name="twitter:site" content="shoping website"/>
				<meta name="twitter:title" content={this.props.fbTitle}/>
				<meta name="twitter:description" content={this.props.fbDescription}/>
				<meta name="twitter:creator" content="@author_handle"/>

				<meta name="twitter:image" content={this.props.fbImage}/>

				<link rel="canonical" href={"https://www.tagminepenge.dk"+this.state.canonical}/>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>

				<link href="/styles/site.css" rel="stylesheet"/>
				{/*<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet"/>*/}
				{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
				{/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
				{/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
				<style dangerouslySetInnerHTML={{__html: this.props.children}} />
				{this.props.user && this.props.user.canAccessKeystone
				&& <link href="/keystone/styles/content/editor.min.css" rel="stylesheet"/>
				}


			</head>

			<body>


			<div id="body" >

				{
					// - The children block should contain the body of your template's content
					React.cloneElement(this.props.children,{changeprop:this.changeprop})
				}
			</div>

			{
			}
			<script src="/js/jquery/jquery-1.11.3.min.js"></script>

			{
				// - Customise which Bootstrap javascript files are served by including
				// - them specifically here, instead of bootstrap-3.3.5.min.js
			}
			<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114743187-1"></script>


			{this.props.user && this.props.user.canAccessKeystone
			// - The KeystoneJS Content Editor provides support for ks-editable data attributes,
			// - which generate links to edit content for users who can access Keystone
			&& <script src="/keystone/js/content/editor.js"></script>
			}

			<script src="/js/bundle.js"></script>

			{
				// - Add scripts that are globally required by your site here.

				// - Include template-specific javascript files by extending the js block
				this.props.js
			}
			{/*<link rel="stylesheet" type="text/css" href="//cdn.sstatic.net/Sites/stackoverflow/all.css?v=8c7d44a438e6"/>*/}
			</body>
			</html>
		);
	}
	else if(this.state.canonical==='/thankyou'){
		return (
			<html>
			<head>
				<title>{this.props.title}</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="robots" content="noindex, nofollow" />
				<meta name="googlebot" content="noindex, nofollow"/>
				<meta name="slurp" content="noindex, nofollow"/>
				<meta name="msnbot" content="noindex, nofollow"/>
				<meta name="description" content={this.props.description}/>

				{/* Facebook meta tagdata*/}
				<meta property="og:url" content={productLink} />
				<meta property="og:title" content={this.props.fbTitle}  />
				<meta property="og:type" content="shoping website" />
				<meta property="og:image" content={this.props.fbImage}/>
				<meta property="og:description" content={this.props.fbDescription} />

				{/*Twitter Card data */}
				<meta name="twitter:card" content="summary"/>
				<meta name="twitter:site" content="shoping website"/>
				<meta name="twitter:title" content={this.props.fbTitle}/>
				<meta name="twitter:description" content={this.props.fbDescription}/>
				<meta name="twitter:creator" content="@author_handle"/>

				<meta name="twitter:image" content={this.props.fbImage}/>

				<link rel="canonical" href={"https://www.tagminepenge.dk"+this.state.canonical}/>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>

				<link href="/styles/site.css" rel="stylesheet"/>
				{/*<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet"/>*/}
				{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
				{/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
				{/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
				<style dangerouslySetInnerHTML={{__html: this.props.children}} />
				{this.props.user && this.props.user.canAccessKeystone
				&& <link href="/keystone/styles/content/editor.min.css" rel="stylesheet"/>
				}


			</head>

			<body>


			<div id="body" >

				{
					// - The children block should contain the body of your template's content
					React.cloneElement(this.props.children,{changeprop:this.changeprop})
				}
			</div>

			{
			}
			<script src="/js/jquery/jquery-1.11.3.min.js"></script>

			{
				// - Customise which Bootstrap javascript files are served by including
				// - them specifically here, instead of bootstrap-3.3.5.min.js
			}
			<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114743187-1"></script>


			{this.props.user && this.props.user.canAccessKeystone
			// - The KeystoneJS Content Editor provides support for ks-editable data attributes,
			// - which generate links to edit content for users who can access Keystone
			&& <script src="/keystone/js/content/editor.js"></script>
			}

			<script src="/js/bundle.js"></script>

			{
				// - Add scripts that are globally required by your site here.

				// - Include template-specific javascript files by extending the js block
				this.props.js
			}
			{/*<link rel="stylesheet" type="text/css" href="//cdn.sstatic.net/Sites/stackoverflow/all.css?v=8c7d44a438e6"/>*/}
			</body>
			</html>
		);
	}
	else{
		// var pubHub= "ca-pub-5660541978573161";
		// var adSenseScript="(adsbygoogle = window.adsbygoogle || []).push({google_ad_client:"+ pubHub +",enable_page_level_ads: true});";
		return (
			<html>
			<head>
				<title>{this.props.title}</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

				<meta name="description" content={this.props.description}/>

				{/* Facebook meta tagdata*/}
				<meta property="og:url" content={productLink} />
				<meta property="og:title" content={this.props.fbTitle}  />
				<meta property="og:type" content="shoping website" />
				<meta property="og:image" content={this.props.fbImage}/>
				<meta property="og:description" content={this.props.fbDescription} />

				<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
				<script type="text/javascript" src="/js/googleAdSense.js" />

				{/*Twitter Card data */}
				<meta name="twitter:card" content="summary"/>
				<meta name="twitter:site" content="shoping website"/>
				<meta name="twitter:title" content={this.props.fbTitle}/>
				<meta name="twitter:description" content={this.props.fbDescription}/>
				<meta name="twitter:creator" content="@author_handle"/>

				<meta name="twitter:image" content={this.props.fbImage}/>

				<link rel="canonical" href={"https://www.tagminepenge.dk"+this.state.canonical}/>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>

				<link href="/styles/site.css" rel="stylesheet"/>
				{/*<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet"/>*/}
				{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
				{/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
				{/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
				<style dangerouslySetInnerHTML={{__html: this.props.children}} />
				{this.props.user && this.props.user.canAccessKeystone
				&& <link href="/keystone/styles/content/editor.min.css" rel="stylesheet"/>
				}


			</head>

			<body>


			<div id="body" >

				{
					// - The children block should contain the body of your template's content
					React.cloneElement(this.props.children,{changeprop:this.changeprop})
				}
			</div>

			{
			}
			<script src="/js/jquery/jquery-1.11.3.min.js"></script>

			{
				// - Customise which Bootstrap javascript files are served by including
				// - them specifically here, instead of bootstrap-3.3.5.min.js
			}
			<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114743187-1"></script>


			{this.props.user && this.props.user.canAccessKeystone
			// - The KeystoneJS Content Editor provides support for ks-editable data attributes,
			// - which generate links to edit content for users who can access Keystone
			&& <script src="/keystone/js/content/editor.js"></script>
			}

			<script src="/js/bundle.js"></script>

			{
				// - Add scripts that are globally required by your site here.

				// - Include template-specific javascript files by extending the js block
				this.props.js
			}
			{/*<link rel="stylesheet" type="text/css" href="//cdn.sstatic.net/Sites/stackoverflow/all.css?v=8c7d44a438e6"/>*/}
			</body>
			</html>
		);
	}
	
};
export default view;
