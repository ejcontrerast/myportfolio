import React from "react";

interface NameLogoProps {
    className?: string;
}


const NameLogo: React.FC<NameLogoProps> = ({className}) => {

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 140 50"
        className=""
      >
        {/* ERNESTO Text */}
        <text
          className="fill-current"
          style={{
            fontSize: '22px', // Matches original size.
            textAnchor: 'start', // Aligns text to start from x coordinate.
          }}
        >
          <tspan
            x="4"
            y="24"
            style={{
              fontFamily: 'sans-serif', // Myanmar Text with fallback.
              fontWeight: 400,
            }}
          >
            ERNESTO
          </tspan>
        </text>

        {/* CONTRERAS Text */}
        <text
          className="fill-current"
          style={{
            fontSize: '23px', // Matches original size.
            textAnchor: 'start', // Aligns text to start.
            transform: 'scale(0.86, 1.16)', // Applies scaling transformation.
          }}
        >
          <tspan
            x="5"
            y="38"
            style={{
              fontFamily: 'sans-serif', // Myanmar Text with fallback.
              fontWeight: 600,
            }}
          >
            CONTRERAS
          </tspan>
        </text>
      </svg>
    );
}

export default NameLogo;