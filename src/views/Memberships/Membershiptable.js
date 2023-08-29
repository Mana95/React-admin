import { useState } from "react";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Viewmembership from "./Viewmember";
import { useNavigate } from "react-router-dom";
import Table from "../../components/table/Table";




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

//table fields
const tableFields = ['Id', 'Owner', 'Type','Valid Period','Email','Contactno','Status'];
const navigatepath = 'viewmember'

//view member
// const[selectedMember, setSelectedMember] = useState(null);





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
              <Table fields={tableFields} navpath = {navigatepath} data={records} ></Table>


            </div>
          </div>
          
         

            {/* <h1>{selectedMember && <div>{selectedMember.owner}</div>}</h1> */}
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

