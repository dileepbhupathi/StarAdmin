import React from 'react'
import { StarAdminChartMonitorData } from '../../Constants/StarAdminChartMonitorData'
import './StarAdminChartMonitor.scss'

export const StarAdminChartMonitor = () => {
  return (
    <div className='star-admin-chart-monitor-container'>
        {
            StarAdminChartMonitorData.map(each => (
                <div key={each.id} className='star-admin-chart-montor-item-container'>
                    <div className='star-admin-chart-monitor-item-content-container'>
                        <h1 className='star-admn-chart-monitor-item-count'>{each.count}</h1>
                        <p className='star-admin-chart-monitor-item-name'>{each.name}</p>
                        <p className='star-admin-chart-monitor-item-profit'>{each.profit}</p>
                    </div>
                        <img src={each.chart} alt ='/' className = 'chart-image'/>
                </div>
            ))
        }
    </div>
  )
}
