import React, { useEffect, useState } from 'react';
import datas from '../data.json'
import CardItem from './CardItem'
import workIcon from '../assets/icon-work.svg'
import playIcon from '../assets/icon-play.svg'
import studyIcon from '../assets/icon-study.svg'
import exerciseIcon from '../assets/icon-exercise.svg'
import socialIcon from '../assets/icon-social.svg'
import careIcon from '../assets/icon-self-care.svg'


const Cards = () => {
  useEffect(() => {
    setColors(['bg-orange', 'bg-blue', 'bg-red', 'bg-green', 'bg-purple', 'bg-yellow', ])
    setIcons([workIcon, playIcon, studyIcon, exerciseIcon, socialIcon, careIcon])
  }, []);

  const [colors, setColors] = useState([]);
  const [icons, setIcons] = useState([]);

  return(
    <div className="cards-wrapper md:flex md:flex-wrap md:flex-1 lg:max-w-xl xl:max-w-4xl">
        <ul className="mt-7 md:flex md:justify-center lg:justify-start md:flex-wrap md:content-center md:mt-0">
            {datas.map((data, index)=>{
              const color =  colors[index]
              const icon = icons[index]

              return(
                <>
                  <CardItem key={index} data={data} color={color} icon={icon} />
                </>
              )
            })}
        </ul>
    </div>
  )
};

export default Cards;
