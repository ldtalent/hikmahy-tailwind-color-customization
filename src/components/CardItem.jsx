import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg'

const CardItem = ({data, color, icon}) => {
  
  return (
  <li className={"w-full rounded-lg bg-" + color + ' mb-5 shadow-md md:w-60 h-40 md:h-62 md:m-4 lg:m-3'}>
    <div className="icon w-20 mr-4 h-9 md:h-12 ml-auto overflow-hidden">
      <img className='w-full h-20 relative -top-2' src={icon} alt="icon" />
    </div>
    <div className="w-full h-32 md:h-50 rounded-lg bg-white px-6 py-7 grid grid-cols-2 grid-rows-2 md:grid-rows-3">
      <h4 className="title font-medium mb-1">{data.title}</h4>
      <div className="cur-time text-3xl col-start-1 md:text-6xl md:font-light md:tracking-tighter">{data.timeframes.weekly.current}hrs</div>
      <div className="ellipsis col-start-2 row-start-1 ml-auto">
        <img className='cursor-pointer hover:brightness-50' src={ellipsis} alt="ellipsis" />
      </div>
      <small className="prev-time col-start-2 row-start-2 md:col-start-1 md:row-start-3 md:whitespace-nowrap md:mt-5 ml-auto text-sm md:text-base">Last Week- {data.timeframes.weekly.previous}hrs</small>
    </div>
  </li>
  );
};

export default CardItem;
