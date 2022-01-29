import React from 'react';
import profileImg from '../assets/image-jeremy.png'

const Report = () => {
  return (

    <div className ="report-wrapper h-full w-full rounded-lg bg-white shadow-md">
      <div className="profile bg-violet px-6 py-7 rounded-lg flex items-center">
        <div className="profile-img rounded-full bg-white p-1 w-20 h-20 mr-3">
          <img className="w-full h-full" src={profileImg} alt="profile-img" />
        </div>
        <h2 className="text-transparent-white font-light text-base">Report for <div className="font-normal capitalize text-2xl">jeremy robson</div></h2>
      </div>
      <div className="time flex justify-between px-6 py-5 capitalize font-medium text-grayish-blue">
        <div className="daily">daily</div>
        <div className="weekly text-very-dark-blue">weekly</div>
        <div className="monthly">monthly</div>
      </div>
    </div>
  )
};

export default Report;
