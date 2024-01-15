import React from 'react';
import { SvgIcon } from '.';

const Satire: SvgIcon = ({ 
    width = 14, 
    height = 14 ,
    fillColor = "text-green-300"
}) => {
    return (
        <svg   width={width} height={height} className={`fill-current ${fillColor} w-3.5 h-3.5 mr-1` } viewBox="0 0 64.000000 64.000000">
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M287 626 c-38 -7 -73 -19 -78 -27 -12 -19 -11 -133 2 -204 15 -80 41 -129 100 -185 68 -65 100 -78 145 -57 55 27 118 92 149 154 25 51 29 71 33 175 5 135 9 129 -105 147 -89 14 -157 13 -246 -3z m89 -150 c26 -20 13 -30 -20 -15 -20 10 -32 10 -52 0 -33 -15 -46 -5 -20 15 25 18 67 18 92 0z m189 1 c25 -19 3 -30 -29 -16 -19 9 -32 9 -51 1 -28 -13 -44 2 -18 17 25 15 76 13 98 -2z m-145 -152 c25 0 67 4 94 8 33 6 47 5 45 -2 -8 -23 -115 -101 -138 -101 -24 0 -131 83 -131 102 0 6 15 7 43 1 23 -4 62 -8 87 -8z"/>
                <path d="M378 278 c43 -34 49 -34 90 0 l33 27 -79 0 -78 0 34 -27z"/>
                <path d="M78 438 c-37 -17 -70 -38 -73 -48 -8 -26 37 -180 69 -233 32 -55 94 -108 160 -136 80 -35 111 -25 167 52 l30 41 -33 11 c-30 10 -36 9 -63 -17 -17 -15 -36 -28 -43 -28 -21 0 -152 62 -147 70 3 4 31 11 62 14 98 12 98 12 62 54 -44 50 -77 126 -85 195 -8 68 -11 69 -106 25z m113 -138 c5 0 9 -4 9 -10 0 -5 -15 -10 -33 -10 -18 0 -42 -7 -54 -15 -23 -16 -41 -4 -20 13 20 17 61 31 75 26 8 -2 18 -4 23 -4z"/>
                <path d="M250 148 l-44 -10 34 -14 c44 -19 69 -15 88 14 14 21 13 22 -9 21 -13 -1 -44 -6 -69 -11z"/>
            </g>
        </svg>
    )
}

export default Satire