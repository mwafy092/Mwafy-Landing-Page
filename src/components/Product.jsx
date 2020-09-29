import React from 'react';
import '../styles/Product.scss';
import Git from '../styles/images/github.svg';
function Product({ name, image, link, git }) {
    return (
        <div className='product animate1'>
            <h2>{name}</h2>
            <img src={image} alt='' />
            <a
                className='product-button'
                href={link}
                target='_blank'
                style={{ textDecoration: 'none' }}>
                visit website
            </a>
            <a href={git} className='git-button product-button' target='_blank'>
                <i class='fab fa-github'></i>
            </a>
        </div>
    );
}

export default Product;
