import React, (useState) from 'react'

function Book(title, author, year){

    const [detail, setDetails] = useState(false)
 return(
     <div>
         <h2>{title}</h2>
         <h5>{author}</h5>
         <h5>{year}</h5>
         <button onCLick={() =>{setDetails(true)}>(detail ! "Show" : "Not Show"</button>
     </div>
 )
}
export default Book