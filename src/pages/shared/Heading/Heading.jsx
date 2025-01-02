import React from 'react';

const Heading = ({subHeading, heading}) => {
    return (
        <div className='text-center my-12'>
            <p className='text-yellow-500 pb-3'>---{subHeading}---</p>
            <h1 className='text-4xl font-medium border-t-2 border-b-2 w-4/12 mx-auto py-4 uppercase'>{heading}</h1>
        </div>
    );
};

export default Heading;