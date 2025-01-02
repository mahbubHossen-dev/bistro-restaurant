import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import Cover from '../../shared/Cover/Cover';

import coverImg from '../../../assets/home/chef-service.jpg'

const Home = () => {

    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet laboriosam explicabo nemo maxime nesciunt cupiditate, iusto repellendus esse at.'

    return (
        <div>
            <Banner />

            <div className=''>
                <div className='max-w-6xl mx-auto'>
                    <Order></Order>

                    <Cover title={'Bistro Boss'} description={description} coverImg={coverImg}/>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;