import React from 'react';
import useCart from '../../hooks/useCart';

const Cart = () => {
    const [cart, , isPending] = useCart()
    const totalPrice = cart.reduce((accum, item) => accum + item.price , 0)
    console.log(totalPrice)
    console.log(cart)
    if(isPending){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div>
            <div className='flex items-center justify-evenly mt-12 text-2xl'>
                <div>
                    <h3>TOTAL ORDERS : {cart?.length}</h3>
                </div>
                <div>
                    <h3>TOTAL PRICE: ${totalPrice}</h3>
                </div>
                <div>
                    <button className='btn'>PAY</button>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.map((item, idx) => <tr key={item._id}>
                                    <th>{idx+1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                        <br />
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>)
                            }
                            
                            
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;