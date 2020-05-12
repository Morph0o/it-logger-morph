import React from 'react'

 const LogItem = ({log}) => {
    return (
        <li className="collection-item">
           <div>
    <a href='#edit-log-item' className ={`modal-trigger ${log.attention ? 'red-text': 'blue-text'}`} >
        {log.message}</a>
               </div> 
        </li>
    )
}

export default LogItem