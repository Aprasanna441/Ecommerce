import React, { useEffect, useState } from 'react'
import { useUserInfoQuery } from '../services/products'

const Dashboard = () => {
  const {data,isLoading}=useUserInfoQuery()
  
 
  return (
<>
{data.full_name}  <br />
{data.address} <br />
{data.joined_on} <br />
<a href="/forgetpassword">Change Password</a>

</>
  )
}

export default Dashboard