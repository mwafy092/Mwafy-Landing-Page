import React from 'react';
import Product from './Product';
import '../styles/Projects.scss';
function Projects() {
    const appData = [
        {
            name: 'aircnc',
            image: '../projects/aircnc.png',
            link: 'https://wizardly-murdock-bb8b11.netlify.app/',
            git: 'https://github.com/mwafy092/AirCNC',
        },
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
        {
            name: 'dogbnb',
            image: '../projects/dogbnb.png',
            link: 'https://wonderful-mcclintock-6d4d61.netlify.app/',
            git: 'https://github.com/mwafy092/Udacity-Landing-Page',
        },
    ];
    return (
        <div className='projects'>
            {appData.map((data) => (
                <Product
                    key={data.name}
                    name={data.name}
                    image={data.image}
                    link={data.link}
                    git={data.git}
                />
            ))}
        </div>
    );
}

export default Projects;
