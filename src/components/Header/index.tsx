import React from 'react'
import { X, Search, Cart2 } from 'react-bootstrap-icons'
import classNames from 'classnames'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { TOGGLE_MENU } from 'app-redux/slices/settingsSlice'
import { headerLinks } from 'static/headerLinks'
import { Badge } from 'antd'
import { RootState } from 'app-redux/store'
import { Link } from 'react-router-dom'

import './header.scss'

const Header = (): React.JSX.Element => {
    const media1024 = useMediaQuery(1024)
    const dispatch = useAppDispatch()

    const [isOpenSearch, setIsOpenSearch] = React.useState<boolean>(false)
    const [value, setValue] = React.useState<string>('')
    const { cart } = useAppSelector((state: RootState) => state.cartSlice)

    const openSearchInput = () => {
        setIsOpenSearch(!isOpenSearch)
    }

    const openMenu = () => {
        dispatch(TOGGLE_MENU(true))
    }

    return (
        <div className='header z-20 flex items-center bg-white shadow'>
            {
                media1024 ?
                    <div className='h-16 bg-white px-2 pl-6 flex items-center'>
                        <div className='header__burger-btn cursor-pointer' onClick={openMenu}>
                            <span className='absolute bg-orange-500 w-full top-0'></span>
                            <span className='absolute bg-orange-500 w-full top-1/2'></span>
                            <span className='absolute bg-orange-500 w-full bottom-0'></span>
                        </div>
                    </div> :
                    <div className='header__contact bg-white px-4 py-2 text-center border-r border-gray-500'>
                        <h1 className='text-black text-lg font-semibold'>Наш телефон</h1>
                        <p className='text-orange-500 text-lg font-semibold'>+7 999 999 99 99</p>
                        <div className='header__time flex items-center'>
                            <span className='mr-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M7.49992 2.44559C7.67926 2.44559 7.826 2.29885 7.826 2.1195V1.95646C7.826 1.77711 7.67926 1.63037 7.49992 1.63037C7.32057 1.63037 7.17383 1.77711 7.17383 1.95646V2.1195C7.17383 2.29885 7.32057 2.44559 7.49992 2.44559Z" fill="#FF9846" />
                                    <path d="M7.49992 12.5544C7.32057 12.5544 7.17383 12.7012 7.17383 12.8805V13.0436C7.17383 13.2229 7.32057 13.3697 7.49992 13.3697C7.67926 13.3697 7.826 13.2229 7.826 13.0436V12.8805C7.826 12.7012 7.67926 12.5544 7.49992 12.5544Z" fill="#FF9846" />
                                    <path d="M2.1195 7.17383H1.95646C1.77711 7.17383 1.63037 7.32057 1.63037 7.49991C1.63037 7.67926 1.77711 7.826 1.95646 7.826H2.1195C2.29885 7.826 2.44559 7.67926 2.44559 7.49991C2.44559 7.32057 2.29885 7.17383 2.1195 7.17383Z" fill="#FF9846" />
                                    <path d="M13.0433 7.17383H12.8803C12.7009 7.17383 12.5542 7.32057 12.5542 7.49991C12.5542 7.67926 12.7009 7.826 12.8803 7.826H13.0433C13.2227 7.826 13.3694 7.67926 13.3694 7.49991C13.3694 7.32057 13.2227 7.17383 13.0433 7.17383Z" fill="#FF9846" />
                                    <path d="M3.81509 3.35881C3.68466 3.22838 3.489 3.22838 3.35857 3.35881C3.22813 3.48925 3.22813 3.6849 3.35857 3.81533L3.4727 3.92947C3.53792 3.99468 3.61944 4.02729 3.70096 4.02729C3.78248 4.02729 3.864 3.99468 3.92922 3.92947C4.05966 3.79903 4.05966 3.60338 3.92922 3.47294L3.81509 3.35881Z" fill="#FF9846" />
                                    <path d="M3.4727 11.0707L3.35857 11.1849C3.22813 11.3153 3.22813 11.5109 3.35857 11.6414C3.42379 11.7066 3.50531 11.7392 3.58683 11.7392C3.66835 11.7392 3.74987 11.7066 3.81509 11.6414L3.92922 11.5272C4.05966 11.3968 4.05966 11.2012 3.92922 11.0707C3.79879 10.9403 3.60313 10.9403 3.4727 11.0707Z" fill="#FF9846" />
                                    <path d="M11.1846 3.35881L11.0705 3.47294C10.94 3.60338 10.94 3.79903 11.0705 3.92947C11.1357 3.99468 11.2172 4.02729 11.2987 4.02729C11.3803 4.02729 11.4618 3.99468 11.527 3.92947L11.6411 3.81533C11.7716 3.6849 11.7716 3.48925 11.6411 3.35881C11.5107 3.22838 11.315 3.22838 11.1846 3.35881Z" fill="#FF9846" />
                                    <path d="M7.826 7.36965V4.40226C7.826 4.22291 7.67926 4.07617 7.49992 4.07617C7.32057 4.07617 7.17383 4.22291 7.17383 4.40226V7.50009C7.17383 7.58161 7.20644 7.66313 7.27165 7.72835L10.8423 11.299C10.9075 11.3642 10.989 11.3968 11.0706 11.3968C11.1521 11.3968 11.2336 11.3642 11.2988 11.299C11.4293 11.1686 11.4293 10.9729 11.2988 10.8425L7.826 7.36965Z" fill="#FF9846" />
                                    <path d="M7.5 0C3.3587 0 0 3.3587 0 7.5C0 11.6413 3.3587 15 7.5 15C11.6413 15 15 11.6413 15 7.5C15 3.3587 11.6413 0 7.5 0ZM7.5 14.3478C3.71739 14.3478 0.652174 11.2826 0.652174 7.5C0.652174 3.71739 3.71739 0.652174 7.5 0.652174C11.2826 0.652174 14.3478 3.71739 14.3478 7.5C14.3478 11.2826 11.2826 14.3478 7.5 14.3478Z" fill="#FF9846" />
                                </svg>
                            </span>
                            <p className='text-gray-500 text-sm'>работаем с 10:00 до 00:00</p>
                        </div>
                    </div>
            }
            <div className='header__wrapper h-full bg-white flex-1 px-4 py-2 flex items-center justify-between'>
                <div className='header__left'>
                    <h1 className='text-sm text-gray-500'>Город: </h1>
                    <p className='text-lg'>Златоуст</p>
                </div>
                <div className='header__right flex items-center'>
                    <div className='header__links'>
                        {headerLinks.map(link =>
                            <a className='ml-3 text-lg hover:text-orange-500' key={link.id} href={link.href}>{link.title}</a>
                        )}
                    </div>
                    <div className='header__icons flex items-center'>
                        <div className='header__search ml-5 cursor-pointer text-gray-500' onClick={openSearchInput}>
                            {isOpenSearch ?
                                <X size={30} /> :
                                <Search size={30} />
                            }
                        </div>
                        <Badge
                            color='#f35e2d'
                            count={cart?.length}
                        >
                            <Link to='/cart' className='ml-5 cursor-pointer block'>
                                <Cart2 size={30} className='text-gray-500 hover:text-orange-500'/>
                            </Link>
                        </Badge>
                    </div>
                </div>
            </div>
            <div
                className={classNames(
                    'w-full transition-all flex items-center absolute left-0 -z-10 bg-white shadow',
                    isOpenSearch ? 'top-full' : '-top-full'
                )}
            >
                <input
                    className='w-full outline-none border-none px-4 py-5 text-lg placeholder:text-lg'
                    type="text"
                    placeholder='Поиск...'
                    onChange={event => setValue(event.target.value)}
                    value={value}
                />
                <span onClick={() => setValue('')} className='px-4 py-4 text-gray-400 cursor-pointer hover:text-orange-500'>
                    <X className='transition-all' size={value === '' ? 0 : 30} />
                </span>
            </div>
        </div>
    )
}

export default Header