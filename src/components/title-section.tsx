import React from 'react'

interface TitleSectionProps{
    title:string;
    body:string;
    pill:string;
    
}

const TitleSection:React.FC<TitleSectionProps> = ({title, body, pill}) => {
  return (
    <React.Fragment>
      <section
            className="flex
            flex-col
            gap-4
            justify-center
            items-center
            md:items-center
            "
        >
            <article
                className="rounded-full
                p-[1px]
                text-sm
                bg-gradient-to-r
                from-green-600
                to-green-400
                dark:bg-gradient-to-r
                dark:from-brand-primaryBlue
                dark:to-brand-primaryPurple
                "
            >
                <div className="rounded-full 
                 px-3  
                 py-1 
                 bg-white
                 dark:bg-black"
                 >
                    {pill}
                 </div>
            </article>
            {body ? (
            <>
                <h2 
                    className="text-center text-3xl sm:text-4xl sm:max-w-[750px] font-semibold"
                    >
                        {title}
                </h2>
                <p className="dark:text-washed-purple-700 text-green-800 sm:max-w-[450px]
                text-center">{body}</p>
            </>
            ) : 
            <h1 className="text-center
                text-4xl
                sm:text-6xl
                sm:max-w-[850px]
                md:text-center
                font-semibold"
                >{title}</h1>
            }
        </section>
    </React.Fragment>
  )
}

export default TitleSection