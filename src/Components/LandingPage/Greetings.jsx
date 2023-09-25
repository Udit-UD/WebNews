import React from 'react'
import moment from "moment";
import "../Styles/Greetings.css";


export default function Greetings() {
  const currDate = moment();
  return (
    <div className='greetings-container'>
        <h2 className='greetings-heading'>
            Namastey India
        </h2>

        <h1 className='time'>
          {currDate.format('DD-MM-YYYY')}
        </h1>

    </div>
  )
}
