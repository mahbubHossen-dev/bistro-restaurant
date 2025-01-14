import React from 'react';
import FoodBanner from '../FoodBanner/FoodBanner';

import bgImg from '../../../assets/menu/banner3.jpg'
import Cover from '../../shared/Cover/Cover';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useFetchData from '../../../hooks/useFetchData';
import ShowCategory from '../../shared/ShowCategory/ShowCategory';
import Heading from '../../shared/Heading/Heading';

const Menu = () => {

    const dessertData = useFetchData('dessert')
    const pizzasData = useFetchData('pizza')
    const saladsData = useFetchData('salad')
    const soupsData = useFetchData('soup')
    const offeredData = useFetchData('offered')

    console.log(offeredData)

    const styles = {
        backgroundColor: 'black',
        opacity: 0.6,
        color: "white"
    }

    const description = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    return (
        <div className='max-w-7xl mx-auto'>

            <FoodBanner bgImg={bgImg} title={'Our Menu'} description={'Would you like to Try a dish?'} />

            <div className='max-w-6xl mx-auto'>
                <div>
                    <div>
                        <Heading subHeading={"---Don't miss---"} heading={"Today's Offer"} />
                    </div>
                    <ShowCategory title='offered' data={offeredData}/>
                </div>

                <Cover title={'DESSERTS'} description={description} coverImg={dessertImg} style={styles} />

                <ShowCategory title='dessert' data={dessertData} />

                <Cover title={'PIZZA'} description={description} coverImg={dessertImg} style={styles} />

                <ShowCategory title='pizza' data={pizzasData} />

                <Cover title={'SALAD'} description={description} coverImg={dessertImg} style={styles} />

                <ShowCategory title='salad' data={saladsData} />

                <Cover title={'SOUPS'} description={description} coverImg={dessertImg} style={styles} />

                <ShowCategory title='soup' data={soupsData} />
            </div>
        </div>
    );
};

export default Menu;