import { useState } from "react";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Viewmembership from "./Viewmember";
import { useNavigate } from "react-router-dom";

// import { useHistory } from 'react-router-dom';
// import UseHis

const Membershiptable =(props)=>{


    const records = [
    {
        id:1,
        owner:"Amal",
        type:"Monthly",
        validperiod:"2023-03-18",
        email: "amal160@gmail.com",
        contactno: "0112789702",
        status:"Active"
    },
    {
        id:2,
        owner:"Namal",
        type:"4 Month Pack",
        validperiod:"2023-0410",
        email: "namal120@gmail.com",
        contactno: "0756854286",
        status:"Active"
    },

    {
      id:3,
      owner:"Shehan",
      type:"Monthly",
      validperiod:"2023-06-20",
      email: "sheha160@gmail.com",
      contactno: "0112762468",
      status:"Active"
    },

    {
      id:4,
      owner:"Bimsara",
      type:"Monthly",
      validperiod:"2023-04-28",
      email: "bimsara120@gmail.com",
      contactno: "0772656786",
      status:"Active"
    }
];

//view member
const[selectedMember, setSelectedMember] = useState(null);
const [show,setShow] = useState(false);
const navigate = useNavigate();


const viewmeber =(r) =>{
  if(r !=null){
    setSelectedMember(r);
      navigate('/viewmember');
  }
  
  setShow(true);
  console.log(selectedMember);

 
  // console.log("Member ",selectedMember);
}

const handleClose = ()=>{
  setShow(false);
}

return(

    <div className="container-fluid">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
              </div>
           
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <div className="mt-3">
            <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Owner</th>
      <th scope="col">Type</th>
      <th scope="col">Valid period</th>
      <th scope="col">Email</th>
      <th scope="col">Contact no</th>
      <th scope="col">Status</th>
      <th scope="col" className="text-center">Action</th>
    </tr>
  </thead>
  <tbody>
    {records.map((r)=>(
        <tr key={r.id}>
        <td>{r.id}</td>
        <td>{r.owner}</td>
        <td>{r.type}</td>
        <td>{r.validperiod}</td>
        <td>{r.email}</td>
        <td>{r.contactno}</td>
        <td>{r.status == "Active"? <span className="badge bg-success">Active</span>: <span className="badge bg-danger">Deleted</span>}</td>
        <td className="text-center">
        <button type="button" className="btn btn-primary" onClick={()=>viewmeber(r)}>View</button>
        <button type="button" className="btn btn-danger">Delete</button>
        

        </td>
      
      
      </tr>
    ))
    }
   
    
   
  </tbody>
</table>
            </div>

            </div>
          </div>
          

            <h1>{selectedMember && <div>{selectedMember.owner}</div>}</h1>
        </div>
        {/* <Membermodal isOpen={open} member={selectedMember}></Membermodal> */}

        {/* model */}
        {/* <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedMember.category}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div> */}


    
    </div>




);


};
export default  Membershiptable;

