import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [devices, setDevices] = useState(null)
  const [d_type, setD_type] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/api/devices')
      .then(response => {
        setDevices(response.data)
      })
      .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('d_type', d_type)

        axios.post('http://localhost:8000/api/devices/add', formData)
    }

  return (
    <div>
      <h1>HomePage</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="d_type" value={d_type} onChange={(e) => setD_type(e.target.value)} required />
        <button type="submit">Send</button>
      </form>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>DEVICE TYPE</th>
          </tr>
        </thead>
        <tbody>
          {devices && devices.map((device) => (
            <tr key={device.id}>
              <td>{device.d_id}</td>
              <td>{device.d_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
