import './App.css';
import React from 'react';
import axios from "axios";
import Cart from './Cart';
import Iphone from './Iphone.jpg';
import Lipstick from './Lipstick.jpg';
import Nike from './Nike.jpg';
import logo from './ultrashop.png';


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: [],
      search_filter: "",
      shopping_list: [],
      page: "home",
      filtered: [],
      temp: "",
      item_exist: -1
    }
  }

  componentDidMount() {
    axios.get("https://online.akomate.com/atma/api/products").then(res => {
      this.setState({
        obj: res.data
      })
    });
  }

  onCart = () => {
    this.setState({ page: "cart" })
  }

  onLogout = () => {
    this.props.changePage("firstPage")
  }

  changePage = newPage => {
    this.setState({ page: newPage })
  }

  render() {
    return (
      <div className="Home">


        {
          this.state.page === "cart" ?
            <Cart list={this.state.shopping_list}
              changePage={this.changePage}
            /> :

            <div>


              <nav className="navbar navbar-light bg-light">
                <div className="navbar-nav">

                  <a className="d-flex" style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }} onClick={() => {
                    this.onCart()
                    this.setState({
                      filtered: []
                    })
                  }}><ion-icon name="cart-outline" id="cartLogo">
                    </ion-icon>
                  </a>
                </div>
                <a className="navbar-brand" href="#" ><img src={logo} className="registerLogo" alt="logo" />UltraShop</a>
                <a style={{ cursor: 'pointer' }} onClick={() => { this.onLogout() }}>
                  <ion-icon name="log-out-outline" id="logoutLogo"></ion-icon>
                </a>

              </nav>
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Nike} style={{ height: '680px', objectFit: 'cover' }} className="d-block w-100 data-bs-interval= 3000" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Lipstick} style={{ height: '680px', objectFit: 'cover' }} className="d-block w-100 data-bs-interval= 3000" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Iphone} style={{ height: '680px', objectFit: 'cover' }} className="d-block w-100 data-bs-interval= 3000" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h1>Find Our Products Here!</h1>
              <div id="containerSearchProduct">
                <div id="searchProduct">
                  <input value={this.state.temp}
                    onChange={event => {
                      this.setState({ temp: event.target.value })
                    }} class="inputSearch" type="search" placeholder="Search" aria-label="Search" />
                  <button onClick={() => {
                    this.state.temp.length !== 0 ?
                      this.setState({
                        search_filter: this.state.temp,
                      }) :
                      this.setState({
                        search_filter: "...........",
                      })
                  }} class="btn btn-outline-success" type="submit" id="btnSearch">Search</button>
                </div>
              </div>


              <div className="row row-cols-1 row-cols-md-3 g-4" id="productContainer">





                {
                  this.state.search_filter !== "" ?
                    this.setState({
                      filtered: this.state.obj.filter((element) => {
                        return element.name.toLowerCase().includes(this.state.search_filter.toLowerCase())
                      }),
                      search_filter: "",
                      temp: ""
                    }) : this.state.filtered.length !== 0 ?
                      this.state.filtered.map((item) => {
                        console.log("inid i kedua")
                        return (

                          <div name="item">
                            <div className="card">
                              <img src={item.image} style={{ height: '300px' }} class="productImage" alt=""></img>
                              <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-title">ID: {item.id}</p>
                                <p className="card-title">Details: {item.detail}</p>
                                <p className="card-title">Price: {item.price}</p>
                              </div>
                              <button type="button" class="btn btn-primary" onClick={() => {
                                if (this.state.shopping_list.length === 0) {
                                  this.setState({
                                    shopping_list: this.state.shopping_list.concat({ "item": item, "amount": 1 })
                                  })
                                } else {
                                  this.state.shopping_list.forEach((element) => {
                                    if (element.item === item) {
                                      this.setState({
                                        shopping_list: this.state.shopping_list.map((element) => {
                                          var obj = {}
                                          if (element.item === item) {
                                            obj = {
                                              "item": element.item,
                                              "amount": element.amount + 1
                                            };
                                            return obj
                                          } else {
                                            obj = {
                                              "item": item,
                                              "amount": 1
                                            }
                                            return obj
                                          }
                                        })
                                      })
                                    } else {
                                      this.setState({
                                        shopping_list: this.state.shopping_list.concat({ "item": item, "amount": 1 })
                                      })
                                    }
                                  })
                                }
                              }}>
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        )
                      }) :
                      this.state.obj.map((item) => {
                        console.log("ini di ketiga")

                        return (
                          <div className="col">
                            <div className="card">
                              <img src={item.image} style={{ height: '300px' }} class="productImage" alt=""></img>
                              <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-title">ID: {item.id}</p>
                                <p className="card-title">Details: {item.detail}</p>
                                <p className="card-title">Price: {item.price}</p>
                              </div>
                              <button type="button" class="btn btn-primary" onClick={() => {
                                var arr = this.state.shopping_list.filter((element) => {
                                  return element.item === item
                                })
                                if (arr.length === 0 || this.state.shopping_list.length === 0) {
                                  this.setState({
                                    shopping_list: this.state.shopping_list.concat({ "item": item, "amount": 1 })
                                  })
                                } else {
                                  this.setState({
                                    shopping_list: this.state.shopping_list.map((element) => {
                                      var obj = {}
                                      if (element.item === item) {
                                        obj = {
                                          "item": element.item,
                                          "amount": element.amount + 1
                                        }
                                        return obj
                                      } else {
                                        return element
                                      }
                                    })
                                  })
                                }
                              }}>
                                Add to Cart
                              </button>
                            </div>
                          </div>



                        )
                      })
                }
              </div>
              <footer id="contactUs">
                <div id="socialmedia">
                  <a href="https://www.facebook.com/haenuki.sachi.9" className="socialmediaicon">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="https://www.instagram.com/haenukisachi_" className="socialmediaicon">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="mailto:sachihaenuki1@gmail.com" className="socialmediaicon">
                    <ion-icon name="mail-outline"></ion-icon>
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=6288808703528" className="socialmediaicon">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </a>
                </div>
                <p id="footerText">&#169; 2022 Commsult</p>
              </footer>
            </div >
        }
      </div>);
  }
}

export default Home;
