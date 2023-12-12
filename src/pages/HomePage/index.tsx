import React from 'react'
import SliderItem from './SliderItem'
import { Carousel } from 'antd'
import { products } from 'static/propucrts'
import { AboutBlock } from 'components'
import NavLink from './NavLink'
import Products from './Products'

import './home-page.scss'

const HomePage = (): React.JSX.Element => {
    return (
        <div className='home-page py-7'>
            <div className='wrapper__container'>
                <div className='shadow'>
                    <Carousel autoplay>
                        {products.map(item =>
                            <SliderItem key={item.id} item={item} />
                        )}
                    </Carousel>
                </div>
                <NavLink />
                <div className='mt-12'>
                    <Products />
                </div>
                <AboutBlock />
            </div>
        </div>
    )
}

export default HomePage