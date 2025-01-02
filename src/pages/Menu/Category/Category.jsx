import React from 'react';
import Heading from '../../shared/Heading/Heading';

import img from '../../../assets/home/01.jpg'

const Category = () => {
    return (
        <div>
            <div>
                <Heading subHeading={"---Don't miss---"} heading={"Today's Offer"} />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
                <div className='flex justify-between'>
                    <div className='flex gap-4 text-[#737373]'>
                        <img src={img} className='w-20 h-20 rounded-full rounded-tl-none' alt="" />
                        <div>
                            <h3 className='text-xl'>ROAST DUCK BREAST ------------------</h3>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-yellow-600'>$14.5</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-4 text-[#737373]'>
                        <img src={img} className='w-20 h-20 rounded-full rounded-tl-none' alt="" />
                        <div>
                            <h3 className='text-xl'>ROAST DUCK BREAST ------------------</h3>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-yellow-600'>$14.5</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-4 text-[#737373]'>
                        <img src={img} className='w-20 h-20 rounded-full rounded-tl-none' alt="" />
                        <div>
                            <h3 className='text-xl'>ROAST DUCK BREAST ------------------</h3>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-yellow-600'>$14.5</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-4 text-[#737373]'>
                        <img src={img} className='w-20 h-20 rounded-full rounded-tl-none' alt="" />
                        <div>
                            <h3 className='text-xl'>ROAST DUCK BREAST ------------------</h3>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-yellow-600'>$14.5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;