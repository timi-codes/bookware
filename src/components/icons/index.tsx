import React, { FC } from 'react'
import { Category } from '../card'
import Fiction from './fiction'
import Horror from './horror'

export interface SvgIconProps {
    width?: number
    height?: number
    strokeWidth?: number
    strokeColor?: string
    fillColor?: string
    rotateCenter?: number
  }

export interface SvgIcon extends FC<SvgIconProps> {}

const GenreIcon = ({ name, ...rest}: { name: Category } & SvgIconProps)=>{
    return (
        <p className="text-xs text-amber-600 font-medium flex items-start">
            { name === Category.HORROR && <Horror {...rest}/>}
            { name === Category.FICTION && <Fiction {...rest}/>}
            {name.toString()}
        </p>
    )
}
export default GenreIcon