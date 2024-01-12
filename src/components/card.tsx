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
        <div className="max-w-64 w-full shadow-card relative justify-self-start	mb-6	p-3 bg-white">
            <div 
                className="w-full aspect-[2.5/4] bg-cover bg-center" 
                style={{ backgroundImage: `url(${data.image})`}} 
                title={data.title}
            />
            <div className="bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 p-4 flex flex-col justify-between absolute top-0 bottom-0 left-0 right-0">
                <div>
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        {data.category}
                    </p>
                    <div className="text-white font-bold text-md mb-2">{data.title}</div>
                    <p className="text-white text-xs line-clamp-6 leading-5 opacity-80">{data.description}</p>
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