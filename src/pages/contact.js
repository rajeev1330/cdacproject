import React from "react";
import Header from "./header";
import Footer from "./footer";

function Contact() {
  return (
    <div>
      <div className="main-sec inner-page">
        <Header />
      </div>
      <section className="banner-bottom py-5">
        <div className="container py-md-5">
          <h3 className="title-wthree mb-lg-5 mb-4 text-center">Contact Us </h3>
          <div className="row contact_information">
            <div className="col-md-6">
              <div className="contact_right p-lg-5 p-4">
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
                        placeholder="User Phone"
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
                  <div className="field-group">
                    <div className="content-input-field">
                      <textarea
                        placeholder="Your Message Here..."
                        required=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="content-input-field">
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 contact_left p-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350041.310790406!2d30.68773492426509!3d39.0014851732576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sin!4v1522753415269"></iframe>
            </div>

            <div className="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
              <div className="mt-5 information-wthree">
                <h4 className="text-uppercase mb-4">
                  <span className="fa fa-comments"></span> Communication
                </h4>
                <p className="cont-wthree-para mb-3 text-capitalize">
                  for general queries, including property Sales and
                  constructions, please email us at{" "}
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
              <div className="mt-5 information-wthree">
                <h4 className="text-uppercase mb-4">
                  <span className="fa fa-life-ring"></span> Technical Support
                </h4>
                <p className="cont-wthree-para mb-3 text-capitalize">
                  we are ready to help! if you have any queries or issues,
                  contact us for support <label>+12 388 455 6789</label>.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
              <div className="mt-5 information-wthree">
                <h4 className="text-uppercase mb-4">
                  <span className="fa fa-map"></span> Others
                </h4>
                <p className="cont-wthree-para mb-3 text-capitalize">
                  we are ready to help! if you have any queries or issues,
                  contact us for support <label>+12 388 455 6789</label>.
                </p>
              </div>
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

export default Contact;
