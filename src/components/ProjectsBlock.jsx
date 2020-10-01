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
            name: 'Amazon Clone',
            image: '../projects/amazon.png',
            link: 'https://clone-7e988.web.app/',
            git: 'https://github.com/mwafy092/Amazon-Clone-React',
        },
    ];
    return (
        <div className='works'>
            <h2 className='works-heading'>Latest Projects</h2>
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
