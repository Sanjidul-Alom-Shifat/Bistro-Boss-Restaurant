// import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img, button }) => {
    return (
        <div className=''>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-12 mx-4 md:mx-5 lg:mx-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                {
                    title ?
                        <Link to={`/order/${title}`}>
                            <button className="btn btn-outline btn-warning border-0 border-b-4 ">{button}</button>
                        </Link>
                        :
                        <button className="btn btn-outline btn-warning border-0 border-b-4 ">{button}</button>
                }
            </div>
        </div>
    );
};

export default MenuCategory;