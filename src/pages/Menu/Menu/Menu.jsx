import React from 'react';
import FoodBanner from '../FoodBanner/FoodBanner';

import bgImg from '../../../assets/menu/banner3.jpg'
import Category from '../Category/Category';

const Menu = () => {
    return (
        <div className='max-w-7xl mx-auto'>

            <FoodBanner bgImg={bgImg} title={'Our Menu'} description={'Would you like to Try a dish?'} />

            <div className='max-w-6xl mx-auto'>
                <Category />
            </div>
        </div>
    );
};

export default Menu;