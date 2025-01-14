import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import Cover from '../../shared/Cover/Cover';

import coverImg from '../../../assets/home/chef-service.jpg'
import ShowCategory from '../../shared/ShowCategory/ShowCategory';
import Heading from '../../shared/Heading/Heading';
import useFetchData from '../../../hooks/useFetchData';
import CallUs from '../Call/CallUs';
import CategoryCard from '../../shared/CategoryCard/CategoryCard';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {

    const popularData = useFetchData('popular')
    const saladData = useFetchData('salad')
    const styles = {
        backgroundColor: 'white',
        color: "black"
    }
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet laboriosam explicabo nemo maxime nesciunt cupiditate, iusto repellendus esse at.'

    return (
        <div>
            <Banner />

            <div className=''>
                <div className='max-w-6xl mx-auto'>
                    <Order></Order>

                    <Cover title={'Bistro Boss'} description={description} style={styles} coverImg={coverImg} />
                    {/* <ShowCategory /> */}


                    <div>
                        <Heading subHeading={'Check It Out'} heading={'CHEF RECOMMENDS'} />
                        <ShowCategory data={popularData} />
                    </div>

                    <CallUs />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            saladData.slice(0, 3).map(salad => <CategoryCard key={salad._id} data={salad}/>)
                        }
                    </div>


                    <FromOurMenu/>

                    <div className='my-12'>
                        <div>
                            <Heading subHeading={'What Our Client Says'} heading={'Testimonials'}/>
                        </div>
                        <Testimonials />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;