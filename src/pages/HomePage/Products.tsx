import React from 'react'
import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import { products } from 'static/propucrts'
import { Card } from 'components'
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel'
import { IProduct } from 'types/productType'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons'

const Products = (): React.JSX.Element => {
    const productTemplate = (item: IProduct) => {
        return <Card item={item} className='my-3' />
    }

    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ]

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Новинки',
            children:
                <div className='py-7'>
                    <Carousel
                        itemTemplate={productTemplate}
                        value={products}
                        responsiveOptions={responsiveOptions}
                        numScroll={1}
                        numVisible={3}
                        nextIcon={<ArrowRightCircleFill size={25} />}
                        prevIcon={<ArrowLeftCircleFill size={25} />}
                    />
                </div>
        },
        {
            key: '2',
            label: 'Популярное',
            children:
                <div className='py-7'>
                    <Carousel
                        itemTemplate={productTemplate}
                        value={products}
                        responsiveOptions={responsiveOptions}
                        numScroll={1}
                        numVisible={3}
                        nextIcon={<ArrowRightCircleFill size={25} />}
                        prevIcon={<ArrowLeftCircleFill size={25} />}
                    />
                </div>
        },
    ]

    return (
        <Tabs items={items} defaultActiveKey='1' />
    )
}

export default Products