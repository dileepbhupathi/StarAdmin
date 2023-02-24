import React from 'react'
import './WebsiteAudienceMetrics.scss'
import {GoPrimitiveDot} from 'react-icons/go'
import { WebsiteAudienceMetricChart } from '../WebsiteAudienceMetricChart/WebsiteAudienceMetricChart'
import {FaBuffer} from 'react-icons/fa'
import { GuageChart } from '../GuageChart/GuageChart'
import { WAMcolors, WAMData, WAMkeys } from '../../Constants/WebsiteAudienceMetricChartData'

export const WebsiteAudienceMetrics = () => {
  return (
    <div className='website-audience-matrics-container'>
        <h1 className='website-audience-matric-title'>Website Audience Metrics</h1>
        <div className='page-view-contaner'>
            <h4 className='page-view-value'>523,200</h4>
            <div className='page-view-content-container'>
                <p className='page-view-content'>Page Views</p>
                <GoPrimitiveDot className='page-view-dot-icon'/>
            </div>
        </div>
        <div className='bounce-rate-container'>
            <h4 className='bounce-rate-value'>753,098</h4>
            <div className='bounce-rate-content-container'>
                <p className='bounce-rate-content'>Bounce Rate</p>
                <GoPrimitiveDot className='bounce-rate-dot-icon'/>
            </div>
        </div>
        <WebsiteAudienceMetricChart data = {WAMData} keys = {WAMkeys} colors = {WAMcolors} />
        <div className='bufferdata-container'>
            <div className='buffer-icon-container'><FaBuffer/></div>
            <h2 className='buffer-value'>3,605</h2>
        </div>
        <p className='since-last-week'>Since last week</p>
        <p className='buffer-content'><strong>0.51</strong>% (30 days)</p>
        <GuageChart/>
    </div>
  )
}
