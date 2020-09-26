import React from 'react';
import '../styles/Product.scss';
function Product({ name, image, link, git }) {
    return (
        <div className='product animate1'>
            <h2>{name}</h2>
            <img src={image} alt='' />
            <a href={git} target='_blank'>
                Github Link
            </a>
            <a href={link} target='_blank'>
                visit website
            </a>
        </div>
    );
}

export default Product;
