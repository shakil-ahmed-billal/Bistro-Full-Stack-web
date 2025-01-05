import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImage from '../../assets/shop/banner2.jpg';
import SectionCover from "../../components/Shared/SectionCover";
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {

    const categories =  ['salad' , 'pizza' , 'soup','dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu()
    console.log(initialIndex , typeof category)

    const soup = menus.filter(item => item.category === "soup")
    const pizza = menus.filter(item => item.category === "pizza")
    const dessert = menus.filter(item => item.category === "dessert")
    const drinks = menus.filter(item => item.category === "drinks")
    const salad = menus.filter(item => item.category === "salad")


    return (
        <div >
            <Helmet>
                <title>bistro || order</title>
            </Helmet>
            <SectionCover
                title={'Order Food'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                image={orderImage}
            ></SectionCover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'w-10/12 mx-auto'}>
                <TabList className={'flex justify-center gap-10 py-5 text-xl font-semibold'}>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>

            </Tabs>
        </div>
    )
}

export default Order
