import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = ({fields,data,navpath})=>{

    // console.log(data);

    const [tableData,setTableData] = useState([]);
    const navigate = useNavigate();


    const Viewmembership = ()=>{
        navigate('/'+navpath);
    }
    return(

        <div className="mt-3">

<table className="table">
  <thead>
    <tr>
        {fields.map((field,index)=>(
              <th key={index}>{field}</th>
        ))}
        <th className="text-center">Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((row,rowIndex)=>(
        <tr key={rowIndex}>
            {Object.keys(row).map((key)=>(
                <td key={key}>{row[key]}</td>
                
                
            ))}
           
            <td className="text-center">
            <button type="button" className="btn btn-primary" onClick={()=>Viewmembership()}>View</button>
            <button type="button" className="btn btn-danger">Delete</button>
        

        </td>
            
        </tr>
    ))} 
   
     
     
      
     
   
   
  </tbody>
</table>
 
        </div>
    )   

}

export default Table;