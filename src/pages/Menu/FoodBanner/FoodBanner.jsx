import React from 'react';

const FoodBanner = ({title, description, bgImg}) => {
    return (
        <div
            className="hero min-h-screen brightness-150"
            style={{backgroundImage: `url('${bgImg}')`}}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content text-center bg-black opacity-40 py-20 px-72 text-[#FFFFFF] ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-medium">{title}</h1>
                    <p className="mb-5">
                       {description}
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default FoodBanner;