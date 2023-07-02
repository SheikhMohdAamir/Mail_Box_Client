import React from 'react'
import ComposeMail from '../ComposeMail/ComposeMail'
import SideBar from './Components/SideBar'
import SearchBar from './Components/SearchBar'
import Itemlist from './Components/Itemlist'

const Home = () => {
  return (
    <div style={{margin:'10px'}}>
      <div style={{width:'75%', float:'right'}}>
        <SearchBar />
        <hr />
        <Itemlist />
      </div>
      <div style={{width:'25%',margin:'20px'}}>
        <h2>Mail Box</h2>
        <ComposeMail />
        <SideBar />
      </div>
      
      
    </div>
  )
}

export default Home
