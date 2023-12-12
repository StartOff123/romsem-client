import React from 'react'
import { menuList } from 'static/menuList'
import { Link } from 'react-router-dom'

const NavLink = (): React.JSX.Element => {
    return (
        <div className='home-page__nav-link mt-12 grid'>
            {menuList.map(item =>
                <Link to={item.href} state={{ linkId: item.id }} key={item.id} className='home-page__link h-48 overflow-hidden shadow relative cursor-pointer'>
                    <img className='absolute w-full transition-all' src={item.img} alt={item.title} />
                    <h1 className='z-10 p-2 text-white text-2xl w-full absolute transition-all'>{item.title}</h1>
                </Link>
            )}
        </div>
    )
}

export default NavLink