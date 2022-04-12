import React from "react";
import Header from "./header";
import Footer from "./footer";

function About() {
  return (
    <div>
      <div className="main-sec inner-page">
        <Header />
      </div>
      <section className="banner-bottom py-5">
        <div className="container py-md-5">
          <div className="row grids-wthree-info">
            <div className="col-lg-6 bag-img">
              <img
                src="../assets/images/bag1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 ab-info-con ab-inf-page text-left">
              <h4>About Our Baggage</h4>
              <p>
                Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet
                eleifend integer,Pellentesque maximus libero.Lorem ipsum dolor
                sit,Nulla pellentesque dolor ipsum laoreet eleifend
                integer,Pellentesque maximus libero.
              </p>
              <a href="single.html" className="btn shop mt-4">
                Read More
              </a>
            </div>
          </div>
          <div className="row grids-wthree-info text-center">
            <div className="col-lg-4 ab-content">
              <div className="ab-info-con">
                <h4>Fast & Free Delivery</h4>
                <p>
                  Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet
                  eleifend integer,Pellentesque maximus libero.
                </p>
              </div>
            </div>
            <div className="col-lg-4 ab-content">
              <div className="ab-info-con">
                <h4>Safe & Secure Payments</h4>
                <p>
                  Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet
                  eleifend integer,Pellentesque maximus libero.
                </p>
              </div>
            </div>
            <div className="col-lg-4 ab-content">
              <div className="ab-info-con">
                <h4>100% Money Back Guarantee</h4>
                <p>
                  Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet
                  eleifend integer,Pellentesque maximus libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collections">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 ab-content-img"></div>
            <div className="col-md-4 ab-content text-center p-lg-5 p-3 my-lg-5">
              <h4>Travel Must Haves</h4>
              <p>
                Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet
                eleifend integer,Pellentesque maximus libero.
              </p>
              <a href="shop.html" className="btn shop mt-3">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-bottom py-5">
        <div className="container py-md-5">
          <h3 className="title-wthree mb-lg-5 mb-4 text-center">
            Safety Meets Style{" "}
          </h3>
          <div className="row text-center">
            <div className="col-md-4 content-gd-wthree">
              <img src="../assets/images/c1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-4 content-gd-wthree ab-content py-lg-5 my-lg-5">
              <h4>Need Extra Space ?</h4>
              <p>
                Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet
                eleifend integer,Pellentesque maximus libero.
              </p>
              <a href="shop.html" className="btn shop mt-3">
                Shop Now
              </a>
            </div>
            <div className="col-md-4 content-gd-wthree">
              <img src="../assets/images/c2.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="mid-section">
        <div className="d-lg-flex p-0">
          <div className="col-lg-6 bottom-w3pvt-left p-lg-0">
            <img src="../assets/images/ab1.jpg" className="img-fluid" alt="" />
            <div className="pos-wthree">
              <h4 className="text-wthree">
                50% Off Any <br /> Women's Bags
              </h4>
              <a href="shop.html" className="btn shop mt-3">
                Shop Now
              </a>
            </div>
          </div>
          <div className="col-lg-6 bottom-w3pvt-left bottom-w3pvt-right p-lg-0">
            <img src="../assets/images/ab2.jpg" className="img-fluid" alt="" />
            <div className="pos-w3pvt">
              <h4 className="text-w3pvt">
                30% Off Any <br /> Men's Bags
              </h4>
              <a href="shop.html" className="btn shop mt-3">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-w3pvt py-5">
        <div className="container py-md-5">
          <form method="post" action="#">
            <p className="text-center">
              Subscribe to the Handbags Store mailing list to receive updates on
              new arrivals, special offers and other discount information.
            </p>
            <div className="row subscribe-sec">
              <div className="col-md-9">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email.."
                  name="email"
                  required=""
                />
              </div>
              <div className="col-md-3">
                <button type="submit" className="btn submit">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
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

export default About;
