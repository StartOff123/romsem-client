import React from 'react'
import WhatsappSvg from './WhatsappSvg'
import TelegramSvg from './TelegramSvg'

import './footer.scss'
import InstagramSvg from './InstagramSvg'

const links: Array<{ title: string }> = [
    { title: 'О компании', },
    { title: 'Доставка и оплата' },
    { title: 'Лента материалов', },
    { title: 'Политика возврата' }
]

const messengers: Array<{ icon: React.FC }> = [
    { icon: WhatsappSvg },
    { icon: TelegramSvg },
    { icon: InstagramSvg },
]

const Footer = (): React.JSX.Element => {
    return (
        <div className='wrapper__container pt-7'>
            <div className='footer border-t border-gray-500 pt-5 grid max-md:block'>
                <div className='border-r border-gray-500 pb-9 max-md:border-b max-md:border-r-0'>
                    <ul className='grid grid-flow-row gap-3'>
                        {links.map((item, i) =>
                            <li key={i} className='text-lg cursor-pointer hover:text-orange-500'>{item.title}</li>
                        )}
                    </ul>
                </div>
                <div className='px-10 border-r border-gray-500 max-md:border-b max-md:border-r-0 max-md:p-10 max-sm:px-0'>
                    <p className='text-gray-500 text-lg'>Выберите удобный мессенджер для общения</p>
                    <div className='flex justify-between mt-2'>
                        {messengers.map((item, i) =>
                            <div key={i} className='opacity-30 hover:opacity-100 cursor-pointer transition-all'>
                                <item.icon />
                            </div>
                        )}
                    </div>
                </div>
                <div className='pl-10 max-md:p-10 max-sm:px-0'>
                    <p className='text-gray-500 text-lg'>Тел: <a className='underline hover:text-orange-500' href="/">+7 999 999 99 99</a></p>
                    <p className='text-gray-500 text-lg'>Адрес: Гагарина 1-ая линия, 10</p>
                </div>
            </div>
        </div>
    )
}

export default Footer