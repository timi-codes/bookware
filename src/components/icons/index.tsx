import React, { FC } from 'react'
import { Category } from '../card'
import Fiction from './fiction'

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
    switch(name){
        case Category.FICTION:
            return <Fiction {...rest}/>
        default: return null
    }
}
export default GenreIcon