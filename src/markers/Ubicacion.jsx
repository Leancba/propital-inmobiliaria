import * as React from 'react';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#57b894',
  stroke: 'none'
};

function Ubicacion({size = 50}) {
  return (
    <svg width="10" height="10" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.2 0.5C1.878 0.5 0 2.378 0 4.7C0 7.85 4.2 12.5 4.2 12.5C4.2 12.5 8.4 7.85 8.4 4.7C8.4 2.378 6.522 0.5 4.2 0.5ZM4.2 6.2C3.80218 6.2 3.42064 6.04197 3.13934 5.76066C2.85804 5.47936 2.7 5.09783 2.7 4.7C2.7 4.30218 2.85804 3.92064 3.13934 3.63934C3.42064 3.35804 3.80218 3.2 4.2 3.2C4.59782 3.2 4.97936 3.35804 5.26066 3.63934C5.54196 3.92064 5.7 4.30218 5.7 4.7C5.7 5.09783 5.54196 5.47936 5.26066 5.76066C4.97936 6.04197 4.59782 6.2 4.2 6.2Z"
        fill="#707070"
      />
    </svg>
  );
}

export default React.memo(Ubicacion);
