import React from 'react';
//import UserOrders from '../features/user/components/UserOrders';
import UserOrders from '../features/user/components/UserOrders';
import NavBar from '../features/navbar/Navbar'

const UserOrdersPage = () => {
  return (
    <>
        <NavBar>
            <h3>My Orders</h3>
        <UserOrders></UserOrders>
        </NavBar>
    </>
  )
}

export default UserOrdersPage