import React from "react";
import Header from "./header";
import Footer from "./footer";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:53620/home/GetProduct")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          posts: result.listProducts,
        });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <div className="main-sec inner-page">
          <Header />
        </div>
        <section className="banner-bottom py-5">
          <div className="container py-5">
            <h3 className="title-wthree mb-lg-5 mb-4 text-center">Shop Now</h3>

            <div className="row shop-wthree-info text-center">
              <div className="row shop-wthree-info text-center mb-5">
                {posts.map((post) => (
                  <div className="product-shoe-info shoe">
                    <div className="men-thumb-item">
                      <img src={post.Image} className="img-fluid" alt="" />
                    </div>
                    <div className="item-info-product">
                      <h4>
                        <a href="single.html">{post.Name} </a>
                      </h4>

                      <div className="product_price">
                        <div className="grid-price">
                          <span className="money">
                            <span className="line">{post.Price}</span>{" "}
                            {post.DiscountedPrice}
                          </span>
                        </div>
                      </div>
                      <ul className="stars">
                        <li>
                          <a href="#">
                            <span
                              className="fa fa-star"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span
                              className="fa fa-star"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span
                              className="fa fa-star-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <nav aria-label="Page navigation example mt-5">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section className="newsletter-w3pvt py-5">
          <div className="container py-md-5">
            <form method="post" action="#">
              <p className="text-center">
                Subscribe to the Handbags Store mailing list to receive updates
                on new arrivals, special offers and other discount information.
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
}

export default Shop;
