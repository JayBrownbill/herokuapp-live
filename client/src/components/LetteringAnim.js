import React from 'react'


// const SVG = ({
//     style= {},
//     fill = '#fff',
//     width = '100%',
//     height = '100%',
//     viewBox = '0 0 510 520', 
//     className = '',
// }) =>(

    const SVG = ({
        style = {},
        fill = "#000",
        width = "100%",
        className = "",
        viewBox = "0 0 310 300"
      }) => (
        <svg
          width={width}
          style={style}
          height={width}
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
          className={'LetterV'}
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
        <path className={className} d="M255.702,66.018c-20.101,2.7-25.2,5.4-36.001,32.4c-8.1,19.8-49.5,120.301-64.2,157.501h-9.9
		C127.9,207.619,102.1,137.418,85,93.018c-8.4-22.2-13.5-25.2-31.8-27v-8.4H129.4v8.4c-22.2,2.4-23.4,6-19.2,17.1
		c7.5,21.9,29.4,81.602,48.301,131.401c15.9-38.7,35.7-87.601,49.801-125.4c6.6-17.4,3-20.101-21.601-23.101v-8.4h69.001V66.018z"/>
        </svg>
      );
      
      export default SVG;
      