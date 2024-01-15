import React, { FC } from 'react';
import { SvgIcon } from '.';

const Adventure: SvgIcon = ({ 
    width = 14, 
    height = 14 ,
    fillColor = "text-green-300"
}) => {
    return (
        <svg   width={width} height={height} className={`fill-current ${fillColor} w-3.5 h-3.5 mr-1` } viewBox="0 0 64.000000 64.000000">
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M225 597 c-85 -34 -128 -73 -167 -147 -34 -65 -33 -195 1 -262 29 -57 71 -98 131 -130 65 -33 195 -33 260 0 60 32 102 73 131 130 32 63 34 196 4 257 -25 51 -89 115 -140 140 -48 23 -175 30 -220 12z m201 -51 c160 -74 195 -276 69 -401 -188 -189 -489 0 -413 259 15 51 99 137 148 153 62 19 140 15 196 -11z"/>
                <path d="M266 539 c-76 -18 -138 -78 -162 -156 -13 -44 -13 -62 -4 -110 10 -47 20 -65 64 -108 42 -43 62 -55 104 -64 85 -18 144 0 208 64 63 63 83 130 63 209 -17 68 -86 141 -152 161 -56 17 -65 17 -121 4z m64 -54 c0 -19 -4 -35 -10 -35 -5 0 -10 16 -10 35 0 19 5 35 10 35 6 0 10 -16 10 -35z m89 -116 c-23 -43 -44 -79 -48 -79 -12 0 -85 79 -79 86 15 15 153 82 160 78 5 -3 -10 -41 -33 -85z m-104 -59 c45 -46 49 -41 -56 -95 -37 -19 -69 -31 -73 -28 -6 7 73 163 83 163 4 0 25 -18 46 -40z m-125 10 c0 -5 -16 -10 -35 -10 -19 0 -35 5 -35 10 0 6 16 10 35 10 19 0 35 -4 35 -10z m330 0 c0 -5 -16 -10 -35 -10 -19 0 -35 5 -35 10 0 6 16 10 35 10 19 0 35 -4 35 -10z m-190 -165 c0 -19 -4 -35 -10 -35 -5 0 -10 16 -10 35 0 19 5 35 10 35 6 0 10 -16 10 -35z"/>
            </g>
        </svg>
    )
}

export default Adventure