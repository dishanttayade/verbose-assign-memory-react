import data from '../Data.json'

const Contact = ()=> {
    return (
        <div className="container">
        <div className="text-center" style={{paddingTop: "10%", color:'black'}}>
            <h1>{data[2].title}</h1>
            <h4>{data[2].address}</h4>
        </div>
  </div>
    )
}

export default Contact;