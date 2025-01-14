import React from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import { Link, useLocation } from 'react-router-dom';

const ShowCategory = ({ title, data }) => {
    
    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>

                {
                    data.map(offered => <CategoryItem key={offered._id} item={offered} />)
                }


            </div>
            <div className='text-center mt-8'>
                <Link to={`/ourShop/${title}`}><button className='btn btn-outline'>ORDER YOUR FAVORITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default ShowCategory;