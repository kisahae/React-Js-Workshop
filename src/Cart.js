import './App.css';
import React from 'react';
import visa from './cc-visa.svg';
import mastercard from './cc-mastercard.svg';
import paypal from './cc-paypal.svg';


class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total_price: 0,
      test: 0
    }
  }

  onBack = () => {
    this.props.changePage("home")
  }

  componentDidMount() {
    var x = 0;
    this.props.list.forEach((e) => {
      x += e.item.price * e.amount
    })
    this.setState({
      total_price: x
    })
  }

  render() {
    return (
      <div className="Cart">
        <div id="cartContainer">
          <div id="cartLeft">

            <div className="cartList">

              {
                this.props.list.map((element) => {
                  return (
                    <div className="cartListCol">
                      <img src={element.item.image} style={{ width: '250px', marginRight: '20px' }} alt=""></img>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <p>{element.item.name}</p>
                        <p>Amount: {element.amount}
                        </p>
                        <p>Price : {element.amount * element.item.price}</p>
                      </div>
                    </div>
                  )
                })
              }

            </div>

          </div>
          <div id="cartRight">


            <h1>Total Price: {this.state.total_price} IDR</h1>
            <div id="buttonCart">
              <button type="button" class="btn btn-danger" id="buttonBack" onClick={() => {
                this.onBack()
              }}>Back</button>
              <button id="buttonProceed" class="btn btn-success">
                Proceed
              </button>
            </div>
            <div id="paymentMethod">
              <img src={visa} className="visaLogo" alt="logo" style={{ width: '60px' }} />
              <img src={mastercard} className="mastercardLogo" alt="logo" style={{ width: '60px' }} />
              <img src={paypal} className="paypalLogo" alt="logo" style={{ width: '60px' }} />
            </div>
          </div>
        </div>
        <div id="showMobile">
          <h1 id="showMobileh1">Total Price: {this.state.total_price} IDR</h1>
          <div id="showMobileButtonCart">
            <button id="buttonProceedMobile" class="btn btn-success">
              Proceed
            </button>
            <button type="button" class="btn btn-danger" id="buttonBackMobile" onClick={() => {
              this.onBack()
            }}>Back</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Cart;
