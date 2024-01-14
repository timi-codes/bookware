import React, { FC } from 'react';
import { SvgIcon } from '.';



const Fiction: SvgIcon = ({ 
    width = 14, 
    height = 14 ,
    fillColor = "text-amber-600"
}) => {
    return (
        <svg 
            width={width} 
            height={height}
            className={`fill-current ${fillColor} w-3.5 h-3.5 mr-1` }
            viewBox="0 0 64.000000 64.000000"
        >
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M250 575 c-27 -9 -62 -31 -88 -56 -95 -95 -91 -233 11 -377 37 -51 110 -102 147 -102 67 0 182 121 212 223 40 143 -21 275 -145 312 -61 18 -78 18 -137 0z m-20 -270 c52 -27 82 -115 40 -115 -53 0 -110 57 -110 110 0 25 28 27 70 5z m250 -5 c0 -34 -28 -79 -60 -95 -64 -33 -88 -9 -55 55 27 52 115 83 115 40z"/>
            </g>
        </svg>
    )
}

export default Fiction