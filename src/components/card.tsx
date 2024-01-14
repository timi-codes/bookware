import React from 'react'
import Image from 'next/image'
import avatar from 'gradient-avatar'

export enum Category {
    HORROR,
    ROMANCE,
    POETRY,
    ADVENTURE,
    THRILLERS,
    SATIRE,
    FICTION
}

type CategoryKey = keyof Omit<typeof Category, 'parse'>;

export namespace Category {
    export function parse(name: string ) {
      return Category[name as CategoryKey ];
    }
}

export interface CardProps {
    data: {
        id: number
        image: string
        title: string
        description: string
        category: Category
        author: string
        year: string
    }
}


const Card: React.FC<CardProps> = ({ data }) =>{
    return (
        <div className="max-w-64 w-full shadow-card relative justify-self-start	mb-6 p-3 bg-white cursor-pointer">
            <div 
                className="w-full aspect-[2.5/4] bg-cover bg-center cursor-pointer" 
                style={{ backgroundImage: `url(${data.image})`}} 
                title={data.title}
            />
            <div className="transition-opacity ease-in duration-300 opacity-0 hover:opacity-100 bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 p-4 flex flex-col justify-between absolute top-0 bottom-0 left-0 right-0">
                <div>
                    <p className="text-xs text-amber-600 font-medium flex items-start  ">
                        
                        Fiction
                    </p>
                    <div className="text-white font-bold text-md mb-2 opacity-95 mt-4">{data.title}</div>
                    <p className="text-white text-xs line-clamp-6 leading-4 opacity-80">{data.description}</p>
                </div>
                <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full mr-2 relative overflow-hidden	">
                        <Image 
                            src={`data:image/svg+xml;utf8,${encodeURIComponent(avatar(data.author, 16))}`} 
                            layout="fill" 
                            objectFit="cover"  
                            alt="Avatar of Jonathan Reinink" 
                        />
                    </div>
                    <div className="text-xs">
                        <p key={data.author} className="text-white leading-none font-medium">{data.author}</p>
                    </div>
                </div>
            </div>
            {/* <div className='absolute bg-black bottom-10'>
                <p className='text-xs text-white'>FICTION</p>
            </div> */}
        </div>
    )
}

export default Card;