import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row, Form } from 'react-bootstrap';

const AddServices = () => {
    // using state for form data and errors related to form data
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});


    // to set the field
    const setField = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }


    // form validation
    const findFormErrors = () => {
        const { name, description, price } = formData
        const newErrors = {}

        // name errors
        if (!name || name === '') newErrors.name = 'cannot be blank!'
        else if (name.length < 2) newErrors.name = 'name is too short!'
        // description errors
        if (!description || description === '') newErrors.description = 'cannot be blank!'
        else if (description.length < 2) newErrors.description = 'name is too short!'
        // price errors
        if (!price || price === '') newErrors.price = 'price cannot be blank!'

        return newErrors
    }


    // image uploading handle to imagebb
    const handleImageUpload = event => {
        // console.log(event.target.files[0]);

        // preparing image data
        const imageData = new FormData();
        imageData.set('key', 'de4a8d0b1762d8d476fab2a09edc351c');
        imageData.append('image', event.target.files[0]);

        // fetch for uploading file in imagebb using api
        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: imageData
        })
            .then(response => response.json())
            .then(result => {
                // console.log('Success:', result);
                // console.log('image url:', result.data.display_url);
                // setting image data into the field
                setField("imageURL", result.data.display_url)
            })
            .catch(error => {
                console.error('image Error:', error);
            });
    }


    // handel the form submission 
    const handelSubmit = e => {
        e.preventDefault();
        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {
            // console.log(formData);
            // const url = `http://localhost:5055/addService`;
            const url = `https://calm-river-92849.herokuapp.com/addService`;

            // fetch for sending new product data to server 
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => {
                    // console.log("Server side response: ", response);
                    if(response) {
                        alert('Service Data Uploading Successful !');
                        setFormData({});
                    }
                })
                .catch(error => {
                    console.error('Server side Error:', error);
                });
        }
    }

    return (
        <div className="addProductForm mt-5">
            <div className="container">
                <Form onSubmit={handelSubmit}>

                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={4}>
                            Service Name
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="Name the service"
                                onChange={e => setField('name', e.target.value)}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.name}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDescription">
                        <Form.Label column sm={4}>
                            Description
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="Service description here"
                                onChange={e => setField('description', e.target.value)}
                                isInvalid={!!errors.description}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.description}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPrice">
                        <Form.Label column sm={4}>
                            Price
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="Charges 0.00"
                                onChange={e => setField('price', e.target.value)}
                                isInvalid={!!errors.price}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.price}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalFile">
                        <Form.Label column sm={4}>
                            Related Photo <FontAwesomeIcon icon={faFileUpload} />
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="file" onChange={handleImageUpload} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={8}></Col>
                        <Col sm={4}>
                            <Button variant="primary" size="lg" block type="submit">Upload Service</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default AddServices;