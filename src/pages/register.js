import React from "react";
import Header from "./header";
import Footer from "./footer";

function Register() {
  return (
    <div>
      <div className="main-sec inner-page">
        <Header />
      </div>
      <section className="banner-bottom py-5">
        <div className="container">
          <div className="content-grid">
            <div className="text-center icon">
              <span className="fa fa-user-circle-o"></span>
            </div>
            <div className="content-bottom">
              <form action="#" method="post">
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      name="text1"
                      id="text1"
                      type="text"
                      value=""
                      placeholder="User Name"
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      name="text1"
                      id="text1"
                      type="email"
                      value=""
                      placeholder="User Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      name="text1"
                      id="text3"
                      type="text"
                      value=""
                      placeholder="UserPhone"
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      name="password"
                      id="myInput"
                      type="Password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="content-input-field">
                  <button type="submit" className="btn">
                    Sign Up
                  </button>
                </div>
                <div className="list-login-bottom text-center mt-lg-5 mt-4">
                  <a href="#" className="">
                    By clicking Signup, I agree to your terms
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="shipping-wthree">
        <div className="shiopping-grids d-lg-flex">
          <div className="col-lg-4 shiopping-w3pvt-gd text-center">
            <div className="icon-gd">
              <span className="fa fa-truck" aria-hidden="true"></span>
            </div>
            <div className="icon-gd-info">
              <h3>FREE SHIPPING</h3>
              <p>On all order over $2000</p>
            </div>
          </div>
          <div className="col-lg-4 shiopping-w3pvt-gd sec text-center">
            <div className="icon-gd">
              <span className="fa fa-bullhorn" aria-hidden="true"></span>
            </div>
            <div className="icon-gd-info">
              <h3>FREE RETURN</h3>
              <p>On 1st exchange in 30 days</p>
            </div>
          </div>
          <div className="col-lg-4 shiopping-w3pvt-gd text-center">
            <div className="icon-gd">
              {" "}
              <span className="fa fa-gift" aria-hidden="true"></span>
            </div>
            <div className="icon-gd-info">
              <h3>MEMBER DISCOUNT</h3>
              <p>Register &amp; save up to $29%</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Register;
