import React, { FC } from 'react';
import { SvgIcon } from '.';

const Horror: SvgIcon = ({ 
    width = 14, 
    height = 14 ,
    fillColor = "text-green-300"
}) => {
    return (
        <svg   width={width} height={height} className={`fill-current ${fillColor} w-3.5 h-3.5 mr-1` } viewBox="0 0 64.000000 64.000000">
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M88 566 c53 -61 64 -107 38 -158 -13 -24 -12 -31 11 -75 20 -39 24 -59 20 -103 -2 -30 -8 -64 -12 -74 -7 -17 -6 -18 11 -11 10 4 44 10 74 12 44 4 64 0 103 -20 44 -23 51 -24 75 -11 51 26 97 15 158 -38 l37 -33 -7 70 c-4 38 -16 89 -26 112 l-19 43 -33 -20 c-18 -11 -46 -20 -61 -20 -29 0 -97 27 -97 38 0 3 10 17 23 30 17 19 19 26 8 30 -17 6 -47 36 -53 53 -4 11 -12 8 -32 -10 -26 -24 -26 -24 -41 -5 -32 42 -31 120 2 156 15 17 13 19 -30 38 -26 12 -77 24 -114 27 l-68 6 33 -37z"/>
            </g>
        </svg>
    )
}

export default Horror