import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
function Comments() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(function (response) {
        // handle success
        console.log(response.data.postId);
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
        <h1 className='pt-3 pb-3 m-0'>COMMENTS</h1>
      </div>
      <Table responsive striped="columns" variant='dark' className='text-white-50 bg-dark'>
        <tr>
          <td>PostId</td>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Body</td>
        </tr>
        <tbody>
          {
            data.map((ele, ind) => {
              return (
                <tr>
                  <td>{ele.postId}</td>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
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

export default Comments;