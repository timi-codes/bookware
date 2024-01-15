import React from 'react';
import { SvgIcon } from '.';

const Thrillers: SvgIcon = ({ 
    width = 14, 
    height = 14 ,
    fillColor = "text-green-300"
}) => {
    return (
        <svg   width={width} height={height} className={`fill-current ${fillColor} w-3.5 h-3.5 mr-1` } viewBox="0 0 64.000000 64.000000">
        <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"  stroke="none">
            <path d="M305 490 l-150 -150 53 -52 52 -53 145 145 c80 80 145 149 145 155 0 6 -21 32 -48 58 l-47 47 -150 -150z"/>
            <path d="M430 355 l-145 -145 28 -27 c25 -25 28 -26 43 -11 16 15 19 15 46 -5 27 -20 31 -20 56 -6 24 13 27 21 30 80 l3 65 69 69 c39 38 70 75 70 81 0 13 -32 44 -46 44 -5 0 -74 -65 -154 -145z"/>
            <path d="M65 250 l-59 -60 24 -25 24 -26 63 63 63 62 -22 23 c-12 13 -24 23 -28 23 -3 0 -32 -27 -65 -60z"/>
            <path d="M396 94 c-21 -21 -20 -57 2 -77 24 -22 55 -21 75 1 34 37 11 92 -38 92 -13 0 -31 -7 -39 -16z"/>
        </g>
        </svg>
    )
}

export default Thrillers