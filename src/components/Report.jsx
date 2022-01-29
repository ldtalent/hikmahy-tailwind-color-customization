import React from 'react';
import profileImg from '../assets/image-jeremy.png'

const Report = () => {
  return (

    <div className ="report-wrapper h-full w-full md:max-w-lg rounded-lg bg-white shadow-md lg:w-68 lg:mr-3 md:mb-7 md:mx-auto lg:mb-0">
      <div className="profile bg-violet px-6 py-7 rounded-lg flex items-center md:flex-col md:items-start md:px-9 md:pt-9">
        <div className="profile-img rounded-full bg-white p-1 w-20 h-20 mr-3 lg:mb-8">
          <img className="w-full h-full" src={profileImg} alt="profile-img" />
        </div>
        <h2 className="text-transparent-white font-light text-base md:mt-2 lg:mb-80 xl:mb-12">Report for <div className="font-normal capitalize text-2xl md:text-4xl md:leading-tight md:font-light">jeremy robson</div></h2>
      </div>
      <div className="time flex justify-between lg:flex-col px-6 py-5 md:py-4 md:px-7 capitalize font-medium text-grayish-blue">
        <div className="daily md:text-xl md:mb-4">daily</div>
        <div className="weekly text-very-dark-blue md:text-xl md:mb-4">weekly</div>
        <div className="monthly md:text-xl md:mb-4">monthly</div>
      </div>
    </div>
  )
};

export default Report;
