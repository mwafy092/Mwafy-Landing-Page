import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import '../styles/ProjectsBlock.scss';
function ProjectsBlock() {
    const appData = [
        {
            name: 'product design',
            image: '../projects/product-design.png',
            link: 'https://serene-heisenberg-d430ba.netlify.app/',
            git: 'https://github.com/mwafy092/Product-Design',
        },
        {
            name: 'yummy eats',
            image: '../projects/yummy-eats.png',
            link: 'https://eager-cray-f18f46.netlify.app/',
            git: 'https://github.com/mwafy092/Yummy-Eats',
        },
        {
            name: 'bright colors',
            image: '../projects/bright-colors.png',
            link: 'https://pedantic-cori-c08c3f.netlify.app/',
            git: 'https://github.com/mwafy092/Udacity-Personal-Blog',
        },
    ];
    return (
        <div className='works'>
            <h2>Latest Projects</h2>
            <div className='project-container'>
                {appData.map((data) => (
                    <Product
                        name={data.name}
                        image={data.image}
                        link={data.link}
                        git={data.git}
                    />
                ))}
            </div>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
                <button>show more projects</button>
            </Link>
        </div>
    );
}

export default ProjectsBlock;
