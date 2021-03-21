import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SellerNavigation from './components/SellerNavigation'
import CustomerNavbar from './components/CustomerNavbar'
import BuyerNav from './components/BuyerNav'

import SignupScreen from './screens/buyers/Signup'
import Buyerlist from './screens/admin/buyerslist'
import CategoryList from './screens/admin/categorylist'
import AddCategory from './screens/admin/addcategory'
import SellerList from './screens/admin/sellerlist'
import LoginScreen from './screens/users/LoginScreen'
import HomeScreen from './screens/users/HomeScreen'
import UserEditProfileScreen from './screens/users/UserEditProfileScreen'

import SellerHomeScreen from './screens/sellers/SellerHomeScreen'
import SellerEditProfileScreen from './screens/sellers/SellerEditProfileScreen'
import SellerSignupScreen from './screens/sellers/SellerSignup'
import ProductListScreen from './screens/sellers/ProductListScreen'
import AddProductScreen from './screens/sellers/AddProductScreen'
import ProductCatalogueScreen from './screens/sellers/ProductCatalogueScreen'
import EditProductScreen from './screens/sellers/EditProductScreen'
import InventoryScreen from './screens/sellers/InventoryScreen'
import InventoryReportScreen from './screens/sellers/InventoryReportScreen'
import OrdersListScreen from './screens/sellers/OrdersListScreen'
import PerformanceScreen from './screens/sellers/PerformanceScreen'
import ProductFeedbackScreen from './screens/sellers/ProductFeedbackScreen'

import AdminNavigation from './components/AdminNavigation'
import ProductReport from './screens/admin/productreport'
import YourAccount from './screens/buyers/YourAccount'
import CartScreen from './screens/buyers/CartScreen'
import OrderDetails from './screens/buyers/OrderDetails'
import YourOrders from './screens/buyers/YourOrders'
import AddAdmin from './screens/admin/addadmin'
import FeedbackList from './screens/admin/feedbacklist'
import ComplaintList from './screens/admin/complaintlist'
import CurrentOrders from './screens/buyers/CurrentOrders'
import CustomerEditProfileScreen from './screens/buyers/CustomerEditProfile'
import CustomerEditAddBank from './screens/buyers/CustomerEditAddBank'

function App() {
  return (
     <Router>
      <div className="App">
        {/* <Navigation /> */}
        {/* <SellerNavigation /> */}
		    <AdminNavigation/>
        {/* <CustomerNavbar/> */}
        {/* <BuyerNav/> */}
        <div>
          <Switch>
            <Route path="/home" component={HomeScreen} />
            <Route path="/signup" exact component={SignupScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/admin/add-admin" component={AddAdmin} />
            <Route path="/admin/buyer-list" component={Buyerlist} />
            <Route path="/admin/category-list" component={CategoryList} />
            <Route path="/admin/add-category" component={AddCategory} />
            <Route path="/admin/feedback-list" component={FeedbackList} />
            <Route path="/admin/complaint-list" component={ComplaintList} />
            <Route path="/admin/product-report" component={ProductReport} />
            <Route path="/admin/seller-list" component={SellerList} />
            <Route
              path="/user/edit-profile"
              component={UserEditProfileScreen}
            />

            
            <Route
              path="/seller/edit-profile"
              component={SellerEditProfileScreen}
            />
            <Route path="/seller/home" component={SellerHomeScreen} />
            <Route path="/seller/product-list" component={ProductListScreen} />
            <Route
              path="/seller/product-catalogue"
              component={ProductCatalogueScreen}
            />
            <Route path="/seller-signup" component={SellerSignupScreen} />
            <Route path="/seller/add-product" component={AddProductScreen} />
            <Route path="/seller/edit-product" component={EditProductScreen} />
            <Route path="/seller/inventory" component={InventoryScreen} />
            <Route
              path="/seller/inventory-report"
              component={InventoryReportScreen}
            />
            <Route path="/seller/your-orders" component={OrdersListScreen} />
            <Route path="/seller/performance" component={PerformanceScreen} />
            <Route path="/seller/product-feedback" component={ProductFeedbackScreen} />



            <Route path="/user/your-account" component={YourAccount} />
            <Route path="/user/my-cart" component={CartScreen} />
            <Route path="/user/your-orders" component={YourOrders} />
            <Route path="/user/current-orders" component={CurrentOrders} />
            <Route
              path="/user/customer-edit-profile"
              component={CustomerEditProfileScreen}
            />
            <Route
              path="/user/customer-edit-address-bank"
              component={CustomerEditAddBank}
            />
            <Route path="/user/order-details" component={OrderDetails} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
