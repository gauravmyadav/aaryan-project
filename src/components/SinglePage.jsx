import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from "../app/addCartSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Detail() {
    const [detailData, setDetailData] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});



    function sendData() {
        axios.get("https://661027bc0640280f219c6f3c.mockapi.io/ReactJs/" + id).then((res) => {
            setDetailData(res.data);
        }).catch((ex) => {
            console.log(ex);
        });
    }

    useEffect(() => {
        sendData();
    }, []);

    function addProductToCart(product) {
        let cartProduct = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1
        };
        dispatch(addToCart(cartProduct));
        setAddedToCart(prevState => ({ ...prevState, [product.id]: true }));
        setTimeout(() => {
            setAddedToCart(prevState => ({ ...prevState, [product.id]: false }));
        }, 1500);
    }

    return (
        <div className='container mt-2'>
            <div className="text-end">

                <button onClick={() => navigate(-1)} className='btn btn-danger mb-2'>Back</button>
            </div>
            <div className="card shadow">
                <div  className="row p-3">
                    <div className="col-lg-6">
                        <img className='mx-3 my-3 w-75' src={detailData.image} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className='text-dark mt-3'>{detailData.title}</h2>
                        <h4 className='text-dark'>{detailData.discription}</h4><hr />
                        <span className='fs-3 text-success'>Rs. {detailData.price} /-</span><br />
                        <span className='fw-bold fs-3 text-danger'>MRP:- </span><del className='fs-3 text-danger'>Rs.{detailData.mrp}</del>
                        <p className='text-dark fw-bold'>Inclusive off all taxes</p>

                        {/* <button onClick={() => addProductToCart(detailData)} className='btn btn-warning'>Add to Cart</button> */}

                        <button
                            onClick={() => addProductToCart(detailData)}
                            className={`btn btn-primary cart-btn mt-3 ${addedToCart[detailData.id] ? 'added' : ''}`}
                        >
                            {addedToCart[detailData.id] ?
                                <FontAwesomeIcon icon={faCheck} /> :
                                <FontAwesomeIcon icon={faCartPlus} />
                            }
                            <span>{addedToCart[detailData.id] ? 'Added' : 'Cart'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
