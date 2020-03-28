import React, { Component } from 'react';
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

class Services extends Component {
    state = { 
        services: [
            {
                icon: <FaCocktail/>,
                title: 'free coctails',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit!'
            },
            {
                icon: <FaHiking/>,
                title: 'endless hiking',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit!'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'free shuttle',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit!'
            },
            {
                icon: <FaBeer/>,
                title: 'strongest beer',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit!'
            }
        ]
     }
    render() { 
        return ( 
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
         );
    }
}
 
export default Services;