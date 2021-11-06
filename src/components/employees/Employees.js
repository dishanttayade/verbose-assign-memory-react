import edata from '../Data.json'
const Employees = ()=> {
    return (
        <div style={{margin:"50px"}}>
            <h1>{edata[3].title}</h1>
            {
                edata[3].employees.map( (e) => (
                    <ul>
                        <li style={{ fontSize:"20px" }}>{e}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Employees;