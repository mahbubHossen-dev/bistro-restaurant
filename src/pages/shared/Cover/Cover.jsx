import React from 'react';

const Cover = ({title, description, coverImg, style}) => {
    return (
        <div style={{backgroundImage: `url('${coverImg}')`}} className=' py-24 px-36 my-24'>
            <div style={style} className=' p-16 text-center space-y-3 rounded-md'>
                <h1 className='text-4xl'>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Cover;