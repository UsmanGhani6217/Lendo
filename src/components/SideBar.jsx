import React from 'react'

const SideBar = () => {
    return (
        <div className='sideBar-container'>
            <div className='second-container'>
                <div className='second'>

                    <div><img src='/walet.png' /></div>
                    <div>
                        <div className='SideBar-price'>62,540 SAR</div>
                        <div className='second-ballance'><span className='second-ballance-child'>62,540 SAR</span><span><img src='/arr1.png' /></span></div>
                    </div>
                </div>
                <div className='payment-method'>
                    <div className='Slider-deposit Slider-deposit-text'>Deposit</div>
                    <div className='Slider-withdraw Slider-withdraw-text'>Withdraw</div>
                </div>
                <div className='second-notice'>
                    <div>
                        <img src='/warning.png' />
                    </div>
                    <div className='second-notice-text'>To withdraw more than <b>10,000 SAR</b>   you need to <b>verify</b> your banking account.</div>
                </div>
            </div>
            <div className='third-container'>
                <div>
                    <img src='/Frame.png' />
                </div>
                <div className='third-text'>
                    Why Should You Trust It?
                </div>
                <div className='third-text-dis'>
                    Because of this and that.<br /> Anyway investing is very good
                </div>
            </div>
        </div>
    )
}

export default SideBar
