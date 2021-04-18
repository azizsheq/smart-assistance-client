import React, { useEffect, useState } from 'react';
import './ManageServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { Button, Modal, Table } from 'react-bootstrap';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [editableService, setEditableService] = useState([]);
    const [updatedService, setUpdatedService] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // function loadServices() {
    //     const url = `http://localhost:5055/getServices`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setServices(data)
    //         })
    // }
    // loadServices();

    useEffect(() => {
        // const url = `http://localhost:5055/getServices`;
        const url = `https://calm-river-92849.herokuapp.com/getServices`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data)
            })
    },[])




    const deleteService = (id) => {
        // const url = `http://localhost:5055/deleteService/${id}`;
        const url = `https://calm-river-92849.herokuapp.com/deleteService/${id}`;
        // console.log(url);

        // fetch for sending new service data to server 
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                if (res) {
                    alert('Service Successfully Deleted !')
                    // loadServices();
                }
            })
    }


    const handleUpdateForm = (id) => {
        // const url = `http://localhost:5055/getService/${id}`;
        const url = `https://calm-river-92849.herokuapp.com/getService/${id}`;
        // fetch for sending new service data to server 
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setEditableService(data)
            })
        setShow(true)
    }


    const setField = (field, value) => {
        setUpdatedService({
            ...updatedService,
            [field]: value
        })
    }


    const handleServiceUpdate = (id) => {
        // console.log(updatedService);

        // const url = `http://localhost:5055/updateService/${id}`;
        const url = `https://calm-river-92849.herokuapp.com/updateService/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers:  {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedService)
        })
        .then(res => res.json())
        .then(result => {
            // console.log('UPDATED')
            if(result){
                setShow(false);
                alert("Service Updated !")
            }
        })
    }


    return (
        <div>
            <h4>Total available services({services.length}) are - </h4>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th className="toCenter">Update</th>
                        <th className="toCenter">Delete</th>
                    </tr>
                </thead>
                {
                    services.map(service =>
                        <tbody key={service._id}>
                            <tr>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td>{service.price}</td>
                                <td className="toCenter">
                                    <FontAwesomeIcon icon={faEdit}
                                        style={{ color: 'green' }}
                                        onClick={() => handleUpdateForm(service._id)} />
                                </td>
                                <td className="toCenter">
                                    <FontAwesomeIcon icon={faTrash}
                                        style={{ color: 'red' }}
                                        onClick={() => deleteService(service._id)} />
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Service - </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <label>Service ID : {editableService._id}</label>
                    <br/>
                    <label for="serviceName">Service Title</label>
                    <input id="serviceName" placeholder={editableService.name}
                    onChange={e => setField('name', e.target.value)}
                    ></input>
                    <br/>
                    <label for="servicePrice">Unite Price</label>
                    <input id="servicePrice" 
                    placeholder={editableService.price}
                    onChange={e => setField('price', e.target.value)}
                    ></input>
                    <br/>
                    <label for="serviceDescription">Description</label>
                    <input id="serviceDescription" 
                    placeholder={editableService.description}
                    onChange={e => setField('description', e.target.value)}
                    ></input>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                    <Button variant="primary" onClick={() => handleServiceUpdate(editableService._id)}>Update Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ManageServices;