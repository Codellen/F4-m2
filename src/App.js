import { useState,useEffect } from 'react'
import axios from 'axios'
import React  from 'react'
import LoadPage from './Component.js/LoadPage'
function App() {
let[apidata,setApiData] = useState([])
useEffect(()=>{
  axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
  .then((response)=>{
    console.log(response.data)
    setApiData(response.data)
  })
  .catch((err)=>console.log(err.message))
},[])
//console.log(apidata)

  return (
    <div>
      <LoadPage apidata={apidata}></LoadPage>
    </div>
  )
}

export default App
