import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
function Ablums() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
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
        <h1 className='pt-3 pb-3 m-0'> ALBUMS</h1>
      </div>
      <Table responsive striped="columns" variant='dark' className='text-white-50 bg-dark'>
        <tr className='fs-4 pt-3 pb-3 text-info bg-dark'>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
        </tr>
        <tbody >
          {
            data.map((ele, ind) => {
              return (
                <tr>
                  <td>{ele.userId}</td>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                </tr>
              );
            })
          }
        </tbody>

      </Table>
    </div>
  )
}

export default Ablums;