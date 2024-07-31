import React from 'react'
import Bottom from "./Bottom";
import {EChartComponent} from './Chart';
import {BarOptions, PieOptions} from '../utils/constant'
const Content = () => {
    return (
        <div>
            <div className='content-top'>
                <div className='Content-conservation'>
                    <div className='Content-conservation-title'>Conservative</div>
                    <div className='Content-conservation-num'>10-14%</div>
                    <div className='Content-conservation-val'>Interest Rate</div>
                </div>
                <div className='Content-second-container'>
                    <div className='Content-tab'>
                        <div>
                            <div className='Content-active'>Active</div>
                            <div className='Content-St'>Status</div>
                        </div>
                        <div>
                            <div className='Content-val'>1500 SAR</div>
                            <div className='Content-St'>Max. Investement</div>
                        </div>
                        <div>
                            <div className='Content-val'>26</div>
                            <div className='Content-St'>Loans Funded</div>
                        </div>
                    </div>
                    <div className='content-tab-bot'>
                        <div className='Content-St'>
                            * Strategy started at 20th March 2021
                        </div>
                        <div className='Content-setting'>
                            <div className='Content-stop'>Stop</div>
                            <div className='Content-change'>Change Settings</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='content-mid'>
                <div className='content-mid-first'>
                    <p>Invested <img src='/help.png' /></p>
                    <div style={{padding:"20px"}}>
                        <EChartComponent options={BarOptions} style={{ height: 230 }}/>
                    </div>
                </div>
                <div className='content-mid-second'>
                    <p>Excepted Risk Score Distribution</p>
                        <EChartComponent options={PieOptions} style={{ height: 230, padding:10 }}/>
                </div>
            </div>
            <div style={{margin:"20px"}}>
                <Bottom />
            </div>
        </div>
    )
}

export default Content
