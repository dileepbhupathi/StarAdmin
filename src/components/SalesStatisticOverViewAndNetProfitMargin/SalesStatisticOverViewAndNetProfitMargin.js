import React from 'react'
import { NetProfitMargin } from '../NetProfitMargin/NetProfitMargin'
import { SalesStatisticOverview } from '../SalesStatisticOverview/SalesStatisticOverview'
import './SalesStatisticOverViewAndNetProfitMargin.scss'

export const SalesStatisticOverViewAndNetProfitMargin = () => {
  return (
    <div>
        <SalesStatisticOverview/>
        <NetProfitMargin/>
    </div>
  )
}
