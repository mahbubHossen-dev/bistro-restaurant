import React from 'react';
import useAuth from '../../../hooks/UseAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast'
import useCart from '../../../hooks/useCart';
const CategoryCard = ({data}) => {
    const {user} = useAuth()
    const axios = useAxiosSecure()
    const [, refetch] = useCart()
    const {image, name, recipe, _id, price} = data || {}

    const handleAddToCart =async (food) => {

        if(user && user.email){
            
        }else{
            alert('please login first')
            return 
        }

        const cartData = {
            menuId: _id,
            userEmail: user.email,
            name,
            image,
            price
            
        }
        
        try {
            const {data} =await axios.post('/cart', cartData)
            if(data.insertedId){
                toast.success(`${name} Added Success`)
                refetch()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(data)} className="btn border-b-[#BB8506] border-2 text-[#BB8506] hover:bg-black">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;