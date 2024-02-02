import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Photos() {
    let [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])
    return (
        <div className='bg-dark'>
            <div className='fs-1 text-center text-info bg-dark'>
                <h1 className='pt-3 pb-3 m-0'>PHOTOS</h1>
            </div>
            <Container >
                <Row className='gap-5  justify-content-center'>
                    {
                        data.map((ele, ind) => {
                            return (
                                <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
                                    <Card >
                                        <Card.Img variant="top" src={ele.url} />
                                        <Card.Body>
                                            <Card.Title>{ele.id}</Card.Title>
                                            <Card.Title>{ele.title}</Card.Title>

                                            <Button variant="primary">{ele.albumId}</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>

        </div>
    )
}

export default Photos;