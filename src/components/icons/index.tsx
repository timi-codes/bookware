import React, { FC } from 'react'
import { Category } from '../card'
import Fiction from './fiction'
import Horror from './horror'
import Romance from './romance'
import Poetry from './poetry'
import Adventure from './adventure'
import Thrillers from './thrillers'
import Satire from './satire'

export interface SvgIconProps {
    width?: number
    height?: number
    strokeWidth?: number
    strokeColor?: string
    fillColor?: string
    rotateCenter?: number
}

const colors = ['text-green-400', 'text-rose-500', 'text-rose-400', 'text-blue-400','text-rose-400', 'text-violet-400', 'text-amber-400']

export interface SvgIcon extends FC<SvgIconProps> {}

const GenreIcon = ({ name, ...rest}: { name: Category } & SvgIconProps)=>{
    const genreIndex = Object.keys(Category).indexOf(name.toUpperCase())

    return (
        <p className={`text-xs ${colors[genreIndex]} font-medium flex items-start`}>
            { name === Category.HORROR && <Horror fillColor={colors[genreIndex]} {...rest}/>}
            { name === Category.ROMANCE && <Romance fillColor={colors[genreIndex]} {...rest}/>}
            { name === Category.POETRY && <Poetry fillColor={colors[genreIndex]} {...rest}/>}
            { name === Category.ADVENTURE && <Adventure fillColor={colors[genreIndex]} {...rest}/>}
            { name === Category.THRILLERS && <Thrillers fillColor={colors[genreIndex]} {...rest}/>}
            { name === Category.SATIRE && <Satire fillColor={colors[genreIndex]} {...rest}/>}
            { name === Category.FICTION && <Fiction fillColor={colors[genreIndex]} {...rest}/>}
            {name}
        </p>
    )
}
export default GenreIcon