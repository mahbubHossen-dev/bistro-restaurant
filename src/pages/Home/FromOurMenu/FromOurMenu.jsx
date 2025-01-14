import React from 'react';
import Heading from '../../shared/Heading/Heading';

import featuredImg from '../../../assets/home/featured.jpg'

const FromOurMenu = () => {
    return (
        <div className='p-24 pt-6' style={{ backgroundImage: `url('${featuredImg}')` }}>
            <div>
                <Heading subHeading={'Check It Out'} heading={'From Our Menu'} />
            </div>
            <div className='md:flex gap-8'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='space-y-3 text-white'>
                    <p>March 20, 2025</p>
                    <h4 className='text-lg uppercase'>Where Can I get some</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <div className="">
                        <button className="btn btn-outline border-2 text-white hover:bg-black">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;