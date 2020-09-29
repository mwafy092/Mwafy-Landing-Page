import React from 'react';
import '../styles/Product.scss';
function Product({ name, image, link, git }) {
    return (
        <div className='product animate1'>
            <h2>{name}</h2>
            <img src={image} alt='' />
            <a
                className='product-button1'
                href={git}
                target='_blank'
                style={{ textDecoration: 'none' }}>
                Github Link
            </a>
            <a
                className='product-button2'
                href={link}
                target='_blank'
                style={{ textDecoration: 'none' }}>
                visit website
            </a>
        </div>
    );
}

export default Product;
