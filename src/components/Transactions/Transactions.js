import React from 'react'
import { TransactionsChart } from '../TransactionsChart/TransactionsChart'
import './Transactions.scss'

export const Transactions = () => {
  return (
    <div className="totalrevenue-content-and-chart-container">
      <div className="total-revenue-container">
        <div className="total-revenue-title-profit-container">
          <h4 className="total-revenue-title">Transactions</h4>
          <p className="total-revenue-profit">-2.87%</p>
        </div>
        <h3 className="total-revenue-value">147.7k</h3>
      </div>
      <TransactionsChart/>
    </div>
  )
}
