import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Table() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/info/")
      if(res.data) {
        if(res.data.success) {
          console.log(res.data.success, "WTF")
          setData(res.data.data)
        }
      }
    }

    fetchData()

    return () => {
      setData(null)
    }
  }, [])
  return (
    <div className="info-table-container">
      <div className="container">
        <div className="info-box">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
              <th scope="col">Number of Travellers</th>
              <th scope="col">Budget per Person</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) => <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.location}</td>
              <td>{item.numberOfTravellers}</td>
              <td>{item.budgetPerPerson} USD</td>
            </tr>)}
          </tbody>
        </table>
        </div>
        <Link className="nav-links" to="/">Add Entry</Link>
      </div>
    </div>
  )
}

export default Table