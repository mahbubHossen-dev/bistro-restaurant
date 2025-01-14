import React from 'react';

const CategoryItem = ({ item }) => {
    const { image, name, recipe, price } = item || {}

    return (
        <div className='flex justify-between'>
            <div className='flex gap-4 text-[#737373]'>
                <img src={image} className='w-20 h-20 rounded-full rounded-tl-none' alt="" />
                <div>
                    <h3 className='text-xl'>{name} ------------------</h3>
                    <p>{recipe}</p>
                </div>
            </div>

            <div>
                <p className='text-yellow-600'>${price}</p>
            </div>

        </div>
    );
};

export default CategoryItem;