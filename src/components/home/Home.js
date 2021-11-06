import React from 'react'
import data from '../Data.json'
const Home = () => {
  return (
    <div className="container">
    
        <div className="text-center" style={{paddingTop: "10%", color:'white'}}>
        
            <h1>{data[0].title}</h1>
            <h4>{data[0].content}</h4>
            <h3>{data[0].name}</h3>
            <h3>{data[0].roll}</h3>

        </div>
  </div>
  )
}
export default Home;