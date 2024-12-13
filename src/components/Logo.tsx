import React from 'react';

interface LogoProps {

    className?: string;
  
  }

const Logo: React.FC<LogoProps> = ({className}) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 190 110"
            className=""
            >
            {/* Left Angle Bracket */}
            <text
                x="20"
                y="85"
                fontSize="100"
                fontFamily="Algerian"
                transform="scale(0.72 1.4)"
            >
                &lt;
            </text>
        
            {/* "e" Letter */}
            <text
                x="72"
                y="95"
                fontSize="230"
                fontFamily="Freestyle Script"
                transform="scale(0.88 1.13)"
            >
                e
            </text>
        
            {/* "c" Letter */}
            <text
                x="121"
                y="92"
                fontSize="225"
                fontFamily="Freestyle Script"
                transform="scale(0.89 1.13)"
            >
                c
            </text>
        
            {/* Right Angle Bracket */}
            <text
                x="200"
                y="85"
                fontSize="100"
                fontFamily="Algerian"
                transform="scale(0.75 1.34)"
            >
                &gt;
            </text>
        </svg>        
    )
}
export default Logo;
