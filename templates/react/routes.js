import Home from './containers/home';
import Profile from './containers/profile';
import ProductGroup from './containers/productGroup';
import SearchPage from './containers/searchPage';
import Product from './containers/productPage';
import ProductPitch from './components/productPitch';
import WishList from './components/wishlist';
import UserWishList from './components/user-wishlist';
import About from './components/aboutUs';
import Contact from './containers/contactUs';
import Privacy from './components/privacy-policy';
import GetStarted from './containers/submit-product/get-started';
import ProductForm from './containers/submit-product/product-form';
import Checkout from './containers/submit-product/checkout';
const Routes = {
	"/" : {
		component : Home,
		routeProps : {
			query : {
				sort : '-publishedDate'
			}
		}
	},
	"/nyt" : {
		component : Home,
		routeProps : {
			query : {
				sort : '-publishedDate'
			}
		}
	},
	"/populaer" : {
		component : Home,
		routeProps : {
			query : {
				sort : '-saves'
			}
		}
	},
	"/pris" : {
		component : Home,
		routeProps : {
			query : {
				sort : 'price'
			},
			priceRange : true
		}
	},
	"/min-konto" : {
		component : Profile
	},
	"/produkt/:id/:title" : {
		component : Product
	},
	"/produkt/:title" : {
	component : Product
	},
	"/soeg/:text" : {
		component : SearchPage
	},
	"/min-oenskeliste" : {
		component : WishList
	},
	"/user-wishlist/:userId" : {
		component : UserWishList
	},
	"/om-os" : {
		component : About
	},
	"/kontakt-os" : {
		component : Contact
	},
	"/get-started" : {
		component : GetStarted
	},
	/*"/product-form" : {
		component : ProductForm
	},*/
/*"/checkout" : {
		component : Checkout
	},*/
	"/fortrolighedspolitik" : {
		component : Privacy
	},
/*"/product-pitch" : {
		component : ProductPitch
	},*/
	"/:category" : {
		component : ProductGroup,
		routeProps : {
			query : {
				sort : '-publishedDate'
			}
		}
	},
	"/kategori/:category" : {
		component : ProductGroup,
		routeProps : {
			query : {
				sort : '-publishedDate'
			}
		}
	}
	
}
module.exports = Routes;
