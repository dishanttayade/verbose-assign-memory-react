import data from '../Data.json'
const About = ()=> {
    return (
        <div className="container">
    
        <div className="text-center" style={{paddingTop: "10%", color:'white'}}>
            <h1>{data[1].title}</h1>
            <h4>{data[1].content}</h4>
        </div>
  </div>
    )
}

export default About;