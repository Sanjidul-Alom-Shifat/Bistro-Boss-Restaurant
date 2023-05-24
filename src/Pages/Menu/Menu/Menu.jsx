// import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
// import UseTitle from '../../../Hook/UseTitle';
import menuImg from '../../../assets/menu/banner3.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hook/UseMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

    // UseTitle('Our Menu Page');

    const [menu] = useMenu();
    console.log(menu)
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Menu Page</title>
            </Helmet>

            <Cover img={menuImg} title="Our Menu"></Cover>

            <div className='mx-4 md:mx-5 lg:mx-16'>
                <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            </div>

            <MenuCategory items={offered} button={"ORDER YOUR FAVOURITE FOOD"} ></MenuCategory>

            {/* dessert menu items  */}
            <div className='my-12 lg:my-14'>
                <MenuCategory items={desserts} title="dessert" button={"ORDER YOUR FAVOURITE DESSERT" }img={dessertImg}></MenuCategory>
            </div>

            <div>
                <MenuCategory items={pizza} title={"pizza"} button={"ORDER YOUR FAVOURITE PIZZA"} img={pizzaImg}></MenuCategory>
            </div>

            <div className='my-12 lg:my-14'>
                <MenuCategory items={salad} title={"salad"} button={"ORDER YOUR FAVOURITE SALAD"} img={saladImg}></MenuCategory>
            </div>

            <div className='my-12 lg:my-14'>
                <MenuCategory items={soup} title={"soup"} button={"ORDER YOUR FAVOURITE SOUP"} img={soupImg}></MenuCategory>
            </div>

        </div>
    );
};

export default Menu; <h3>dsdfgds</h3>