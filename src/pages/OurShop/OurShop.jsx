import React, { useState } from 'react';
import shopBanner from '../../assets/shop/banner2.jpg'
import FoodBanner from '../Menu/FoodBanner/FoodBanner';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from '../shared/CategoryCard/CategoryCard';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';

const OurShop = () => {


    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()

    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex)

    const dessertData = useFetchData('dessert')
    const pizzasData = useFetchData('pizza')
    const saladsData = useFetchData('salad')
    const soupsData = useFetchData('soup')
    const drinksData = useFetchData('drinks')

    
    return (

        <div className='max-w-7xl mx-auto'>
            <FoodBanner title={'Our Shop'} description={'Would You Like to Try a Dish?'} bgImg={shopBanner} />

            <div className='max-w-6xl mx-auto my-16'>
                <div>
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>SALAD</Tab>
                            <Tab>PIZZA</Tab>
                            <Tab>SOUPS</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>DRINKS</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    saladsData.map(salad => <CategoryCard key={salad._id} data={salad} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    pizzasData.map(pizza => <CategoryCard key={pizza._id} data={pizza} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    soupsData.map(soup => <CategoryCard key={soup._id} data={soup} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    dessertData.map(dessert => <CategoryCard key={dessert._id} data={dessert} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    drinksData.map(drink => <CategoryCard key={drink._id} data={drink} />)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>

    );
};

export default OurShop;