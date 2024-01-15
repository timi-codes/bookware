import React, { FC } from 'react';
import { SvgIcon } from '.';

const Poetry: SvgIcon = ({ 
    width = 14, 
    height = 14 ,
    fillColor = "text-green-300"
}) => {
    return (
        <svg   width={width} height={height} className={`fill-current ${fillColor} w-3.5 h-3.5 mr-1` } viewBox="0 0 64.000000 64.000000">
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M468 607 c-32 -17 -79 -52 -105 -77 -49 -47 -123 -153 -123 -177 0 -9 -14 -13 -45 -13 l-45 0 0 -40 0 -40 130 0 130 0 0 40 0 40 -65 0 c-36 0 -65 2 -65 5 0 2 8 20 17 40 15 31 20 35 44 30 42 -9 101 11 136 47 33 35 57 105 51 151 l-3 27 -57 -33z"/>
            <path d="M190 210 c0 -6 -11 -15 -24 -20 -54 -20 -72 -106 -31 -140 8 -7 15 -21 15 -31 0 -18 9 -19 130 -19 120 0 130 1 130 18 0 11 9 27 20 37 16 15 20 29 18 64 -3 41 -7 48 -35 61 -18 8 -33 21 -33 28 0 9 -26 12 -95 12 -58 0 -95 -4 -95 -10z"/>
            </g>
        </svg>
    )
}

export default Poetry