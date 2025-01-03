import React from 'react'
import Image from 'next/image'
interface Props{
    image:string;
    name:string;
    position:string;
}

const TeamCard = (prop:Props) => {
  return (
    <div>
      <Image src={prop.image} alt={prop.name} width={400} height={400} className='rounded-2xl mx-auto'/>
      <h1 className='text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold '>{prop.name}</h1>
      <p className='mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium'>{prop.position}</p>
      <p className='text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur est ut atque tempore numquam, modi debitis perferendis quas vero.</p>
    </div>
  )
}

export default TeamCard
