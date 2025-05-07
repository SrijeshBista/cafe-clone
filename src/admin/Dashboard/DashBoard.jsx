import React from 'react'
import SIdeNav from '../Sidenav/SIdeNav'

const Dashboard =() => {
  return (
    <div className='admin-main container'>
     <div className="left-side">
     <SIdeNav/> 
    </div>   
     <div className="right-side dash-right">
     <sectoin id="dashboard">
      <div className="dashboard-main container">
        <div className="dashboard-title">
          <h1>DashBoard</h1>
        </div>
        <div className="dashboard-des">
          <div className="detail">
            100+ <br />
            User
          </div>
          <div className="detail">
            100+ <br />
            Order
          </div>
          <div className="detail">
           Best    <br />       
           Quality
          </div>
          <div className="detail">
            Best <br />
            Quantity
          </div>
          <div className="detail">
            All Over Nepal <br />
            Address
          </div>
        </div>
      </div>
    </sectoin>
     </div>
    </div>
  )
}

export default Dashboard;
