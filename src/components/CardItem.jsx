import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg'

const CardItem = ({data, color, icon}) => {
  
  return (
  <li className={"w-full rounded-lg bg-" + color + ' mb-5 shadow-md'}>
    <div className="icon w-20 mr-4 h-9 ml-auto overflow-hidden">
      <img className='w-full h-20 relative -top-2' src={icon} alt="icon" />
    </div>
    <div className="w-full h-32 rounded-lg bg-white px-6 py-7 grid grid-cols-2 grid-rows-2">
      <h4 className="title font-medium mb-1">{data.title}</h4>
      <div className="cur-time text-3xl col-start-1">{data.timeframes.weekly.current}hrs</div>
      <div className="ellipsis col-start-2 row-start-1 ml-auto">
        <img src={ellipsis} alt="ellipsis" />
      </div>
      <small className="prev-time col-start-2 row-start-2 ml-auto text-sm">Last Week- {data.timeframes.weekly.previous}hrs</small>
    </div>
  </li>
  );
};

export default CardItem;
