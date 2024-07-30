import React from 'react'

const Header = () => {
    const links = ["Overview", "Invest", "Auto-Invest", "My Portfolio"]
    const active = 2
    return (
        <div className='header-container'>
            <div className='header-link'>
                {
                    links.map((data, index) => {
                        return (
                            <div className={`${active == index ? 'header-link-text-active' : 'header-link-text'} `}>{data}</div>
                        )
                    })
                }
            </div>
            <div className='header-menu'>
                <div className='header-menu-text'>En</div>
                <div className='header-bell'><img src='/bell.png' /> <span className='header-bell-count'>2</span></div>

                <div><img src='/Avatar.png' /></div>
            </div>
        </div>
    )
}

export default Header
