import React, {useEffect,useState}from 'react'

 const Logs = () => {
     const [logs,setLogs] = useState([])
     const [loading,setLoading] = useState(false)

    useEffect()


     const getLogs = async () => {
         setLoading(true)
         const res = await fetch()
         const data = await res.json()
         setLogs(data)
         setLoading(false)
     }
     if(loading){
         return <h4>loading...</h4>
     }
    return (
        <div>
            
        </div>
    )
}
export default Logs