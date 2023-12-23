import React from 'react'

interface FeatureCardProps{
  image:string;
  title:string;
  description:string;
}

const FeatureCard:React.FC<FeatureCardProps> = ({image, title, description}) => {
  return (
    <section className='flex w-[300px] h-[100px] rounded-xl gap-6 m-5 p-5 bg-gray-400/10 items-center'>
      <img src={image} alt={title} className='w-10 h-10' />
      <div className='flex flex-col flex-auto'>
        <h3 className='font-medium text-lg'>{title}</h3>
        <p className= 'font-light text-md'>{description}</p>
      </div>
    </section>
  )
}

export default FeatureCard