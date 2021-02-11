import React from 'react'

    const Countrytimezone = ({ countryzone, handleChange }) => {
      return (
        <div>
          <h1>Countries and their Time Zones</h1>
            <select className="selbox" onChange= {(e)=> handleChange(e)}>
                {countryzone.map((list, i) => (
                    <option key= {i}  value={list.zoneName}> {list.zoneName}</option>
                ))}
            </select>
        </div>
      )
    };

export default Countrytimezone;

