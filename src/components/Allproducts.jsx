import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../app/addCartSlice";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Allproducts() {
    const [spinner, setSpinner] = useState(true);
    const [newData, setNewdata] = useState([]);
    const [error, setError] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    let dispatch = useDispatch();

    function showData() {
        axios.get("https://661027bc0640280f219c6f3c.mockapi.io/ReactJs")
            .then((res) => {
                console.log(res.data);
                setNewdata(res.data);
                setSpinner(false);
            }).catch((err) => {
                setError("Unable To Product Fetch Data");
            });
    };

    useEffect(() => {
        showData();
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
        <div>
            <div className="container mt-5">
                <div className="row">
                    {
                        spinner ?
                            <div className="div">
                                <div className="alert alert-danger">{error}</div>
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div> :
                            newData.map((allData) => {
                                return (
                                    <div className="col-lg-3" key={allData.id}>
                                        <div className="card w-100">
                                            <img className='p-3' src={allData.image} alt="" />
                                            <div className="card-body">
                                                <h5>{allData.title}</h5>
                                                <p className='text-dark'>{allData.discription}</p>
                                                <strong className='fw-bold mb-3'>MRP:-</strong><del>{allData.mrp}</del>
                                                <ins className='ms-2'>{allData.price}</ins><br />
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <button
                                                            onClick={() => addProductToCart(allData)}
                                                            className={`btn btn-primary cart-btn mt-3 ${addedToCart[allData.id] ? 'added' : ''}`}
                                                        >
                                                            {addedToCart[allData.id] ?
                                                                <FontAwesomeIcon icon={faCheck} /> :
                                                                <FontAwesomeIcon icon={faCartPlus} />
                                                            }
                                                            <span>{addedToCart[allData.id] ? 'Added' : 'Cart'}</span>
                                                        </button>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <Link to={`/singlepage/${allData.id}`}>
                                                            <button className='btn btn-success mt-3'>Details</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })
                    }
                </div>
            </div>
        </div>
    )
}
