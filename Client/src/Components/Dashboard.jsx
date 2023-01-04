import React from 'react'
import Test from './Test'

function Dashboard() {
  return (
    <div className='dashboard'> 
        <div>
            <p>Get Change</p>
            <p>Hi Joshua</p>
        </div>

        <div>
            <div className='asideIcons'></div>
            <div>
                <p>Employees</p>
                <button>Add New</button>
            </div>

            <div className='dash-heading'>
                <h2>Josh Bakery Ventures</h2>
                <p>62, Bode Thomas, Surulere, Lagos</p>
            </div>

            <div className='select-container'>
                <select name="" id="">
                    <option selected>Change role</option>
                    <option value="">Admin</option>
                    <option value="">Staff</option>
                </select>

                <button>Change</button>

                <input type="text" placeholder='Enter staff name here' />
            </div>
        </div>

        <Test />
      
    </div>
  )
}

export default Dashboard
