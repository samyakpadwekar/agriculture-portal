//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/App.css";

const SellerNavigation = () => {
  const role = sessionStorage.getItem("userRole");

  const Signout = (props) => {
    sessionStorage.removeItem("sellerId");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("userDetails");
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("businessName");
    document.location.href = "/seller-signin";
  };

  return (
    <div>
      {role === "SELLER" && (
        <div style={{ position:"inherit" }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
              <div style={{alignContent:"center"}}>
              <Link to="/seller/home">
                <span className="navbar-brand" id="brand" href="">
                  AgriShop 
                </span>
              </Link>
              <div style={{marginLeft:'16px'}}><h6> Seller Portal</h6></div>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-1 mb-lg-0 ">
                  <li className="nav-item mx-3 ">
                    <Link to="/seller/home">
                      <span className="nav-link">Home</span>
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link to="/seller/product-list">
                      <span className="nav-link">Catalogue</span>
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link to="/seller/inventory">
                      <span className="nav-link">Inventory</span>
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link to="/seller/your-orders">
                      <span className="nav-link">Orders</span>
                    </Link>
                  </li>
                  {/* <li className="nav-item mx-3">
                <Link to="/seller/performance">
                  <span className="nav-link">
                    Performance
                  </span>
                </Link>
              </li> */}
                  <li className="nav-item mx-3">
                    <div className="input-group-prepend nav-item dropdown ">
                      <button
                        className="btn btn-light dropdown-toggle nav-link"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <strong>Reports</strong>
                      </button>
                      <ul className="dropdown-menu">
                        <div style={{ zIndex: 2 }}>
                          <li>
                            <Link to="/seller/inventory-report">
                              <span className="dropdown-item" href="#">
                                Inventory Report
                              </span>
                            </Link>
                          </li>
                        </div>
                        <li>
                          <Link to="/seller/performance">
                            <span className="dropdown-item" href="#">
                              Performance Report
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/seller/payments">
                            <span className="dropdown-item" href="#">
                              Payments Summary
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item mx-3">
                    <Link to="/seller/edit-profile">
                      <span className="nav-link">Profile</span>
                    </Link>
                  </li>
                  <li>
                    <div className="admin-signout">
                      <button
                        className="btn btn-danger"
                        type="submit"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={Signout}
                      >
                        Signout
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SellerNavigation;
