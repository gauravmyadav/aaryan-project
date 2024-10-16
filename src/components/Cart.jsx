import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart,incrementQuantity,decrementQuantity} from '../app/addCartSlice'
import { Link, useNavigate } from 'react-router-dom'


export default function Cart() {

  var subTotalCartPrice = 0;
  var deliveryCharges = 40;
  var discount = 0;
  const dispatch = useDispatch()
  let data = useSelector((state) => {
    return state.cart
  })
  let navigate = useNavigate();


  return (
    <div>
      <div className="container-fluid mt-5">
      <div className='text-end mt-3 mx-4'>
              <button onClick={()=> navigate(-1)} className='btn btn-danger'>Back</button>
            </div>
        <table class="bill-table table text-center mt-3">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((product, i) => {
                subTotalCartPrice += product.price * product.quantity;
                return (
                  <tr className='text-center  justify-content-center' key={i}>
                    <th scope="row">{i + 1}</th>

                    <td><img style={{ width: "70px" }} src={product.image} alt="" /></td>
                    <td>{product.title}</td>
                    <td>₹ {product.price}</td>
                    <td>
                      <button onClick={()=>dispatch(decrementQuantity(product.id))} type='button' className="btn btn-sm" style={{ background: "#373063", color: "white" }} >-</button>
                      {/* <span value = {product.quantity}> 0 </span> */}
                      {/* <input type="text" name='quantity' className='form-control input-number text-center' style={{width: "40px", height:"40px"}} value={product.quantity} min="1" max="100"/>  */}
                      <span style={{fontSize:"15px", border:"1px solid", padding:"5px"}}  value={product.quantity}>{product.quantity}</span>
                      <button onClick={()=>dispatch(incrementQuantity(product.id))} type='button' className='btn btn-sm btn-success ms-1'>+</button>
                    </td>
                    <td>₹ {product.price * product.quantity}</td>
                    <td><button onClick={()=>dispatch(removeFromCart(product.id))} className='btn btn-secondary'>X</button></td>
                  </tr>
                )
              })
            }
            


          </tbody>
        </table>

        <div className="row">
          <div className="col-lg-7 mt-5">
            <input className='w-75 text-center' type="text" placeholder='Your Coupon Number' />
            <button className='btn ms-2' style={{ background: "#373063", color: "white" }}>Apply Coupon</button>
          </div>
          <div className="col-lg-5 mt-5 checkoutbox">
            <div class="card">
              <div class="card-body mx-4">
                <div class="container">
                  <p class="" style={{ fontSize: "20px" }}>Thank for your purchase</p>
              <div className='text-left'>
                  <div class="row">
                    <hr />
                    <div class="col-xl-9">
                      <p>Subtotal:</p>
                    </div>
                    <div class="col-xl-3">
                      <p class="float-end">₹ {subTotalCartPrice}
                      </p>
                    </div>
                    {/* <hr/> */}
                  </div>
                  <div class="row">
                    <div class="col-xl-9">
                      <p>Delivery:</p>
                    </div>
                    <div class="col-xl-3">
                      <p class="float-end">₹ {deliveryCharges}
                      </p>
                    </div>
                    {/* <hr/> */}
                  </div>
                  <div class="row">
                    <div class="col-xl-9">
                      <p>Discount:</p>
                    </div>
                    <div class="col-xl-3">
                      <p class="float-end">₹ {discount}
                      </p>
                    </div>
                    <hr style={{ border: "2px solid black" }} />
                  </div>
                  <div class="row text-black">

                    <div class="col-xl-12">
                      <p class="float-end fw-bold">Total : ₹  {subTotalCartPrice + deliveryCharges + discount} /-
                      </p>
                    </div>
                    <div className='text-center'>
                      <Link to={"/checkout"}>
                    <button className='btn btn-success w-25 '>Checkout</button>
                    </Link>
                    </div>
                   
                    <hr style={{ border: "2px solid black" }} />
                  </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
