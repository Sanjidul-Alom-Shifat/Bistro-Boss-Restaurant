// import React from 'react';

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseCart from "../../../Hook/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {

    const [cart, refetch] = UseCart();
    console.log(cart);
    // how does reduce work!!!
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const HandleDeleteItem = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };

    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>

            <SectionTitle subHeading="My Cart" heading="WANNA ADD MORE?"></SectionTitle>

            <div className="uppercase font-semibold h-[60px] flex justify-around items-center">
                <h3 className="text-base md:text-lg lg:text-xl">Total Items: {cart?.length}</h3>
                <h3 className="text-base md:text-lg lg:text-xl">Total Price: ${total}</h3>
                <Link to='/dashboard/payment'>
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link>
            </div>

            <div className="relative overflow-x-auto w-full mt-5 mb-8">
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr>
                            <th>Serial</th>
                            <th>Food Name</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="">${item.price}</td>
                                <td>
                                    <button onClick={() => HandleDeleteItem(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCart;