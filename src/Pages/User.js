import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
function User() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
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
        <h1 className='pt-3 pb-3 m-0'>USER</h1>
      </div>
      <Table responsive striped="columns" variant='dark' className='text-white-50 bg-dark'>
        <tr className='fs-4 pt-3 pb-3 text-info bg-dark'>
          <th>Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
        <tbody >
          {
            data.map((ele, ind) => {
              return (
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.username}</td>
                  <td>{ele.email}</td>
                  <td>
                    <table>
                      <tr>
                        <td>{ele.address.street}</td>
                        <td>{ele.address.suite}</td>
                        <td>{ele.address.city}</td>
                        <td>{ele.address.zipcode}</td>
                        <td>
                          <table>
                            <tr>
                              <td>{ele.address.geo.lat}</td>
                              <td>{ele.address.geo.lng}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td>{ele.phone}</td>
                  <td>{ele.website}</td>
                  <td>
                    <table>
                      <tr>
                        <td>{ele.company.name}</td>
                        <td>{ele.company.catchPhrase}</td>
                        <td>{ele.company.bs}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              );
            })
          }
        </tbody>

      </Table>
    </div>
  )
}

export default User;