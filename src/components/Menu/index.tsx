import React from 'react'
import { menuList } from 'static/menuList'
import { useAppSelector } from 'hooks/reduxHooks'
import { RootState } from 'app-redux/store'
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'

import './menu.scss'

const Menu = (): React.JSX.Element => {
    const { isOpenMenu } = useAppSelector((state: RootState) => state.settingsSlice)

    return (
        <div
            className={classNames(
                'menu bg-white py-7 flex flex-col items-center shadow',
                isOpenMenu ? 'menu_open' : null
            )}
        >
            <Link to={'/'} className='menu__logo flex flex-col items-center'>
                <img className='w-32 max-2xl:w-20' src="/assets/logo.png" alt="" />
                <p className='text-3xl uppercase pt-4'>romsem</p>
            </Link>
            <span className='block w-3/5 bg-gray-500 h-px my-7'></span>
            <div className='menu__links'>
                {menuList.map(item =>
                    <NavLink
                        to={item.href}
                        state={{ linkId: item.id }}
                        key={item.id}
                        aria-current
                        className={
                            ({ isActive }) =>
                                isActive ? 'flex items-center mb-7 hover:text-orange-500 cursor-pointer' : 'flex items-center mb-7 hover:text-orange-500 cursor-pointer'
                        }
                    >
                        <>
                            {item.icon}
                            <p className='pl-5 text-2xl max-2xl:text-xl'>{item.title}</p>
                        </>
                    </NavLink>
                )}
            </div>
        </div>
    )
}

export default Menu