import React, { useEffect, useState } from 'react'
import './Page.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Post() {
    let [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
        <div>
            <div className='fs-1 text-center text-info bg-dark'>
                <h1 className='pt-3 pb-3 m-0'>POSTS</h1>
            </div>
            <Table responsive striped="columns" variant='dark' className='text-white-50 bg-dark'>
                <tr >
                    <td>UserId</td>
                    <td>Id</td>
                    <td>Tital</td>
                    <td>Body</td>
                </tr>
                <tbody border={4}>
                    {
                        data.map((ele, ind) => {
                            return (
                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.body}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Post;