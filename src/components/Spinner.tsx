import React from 'react'
import spinner from './../assets/images/spinner.gif';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="w-100-mt-20">
      <img
        src={spinner}
        alt="loading..."
        width={180}
        className="text-center-mx-auto"
      />
    </div>
  )
}

export default Spinner


