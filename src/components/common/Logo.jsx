import React from 'react'

const Logo = ({ className = 'text-white w-auto h-12' }) => {
  return (
    <svg 
      viewBox="0 0 102.81 43.93" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
      className={className}
    >
      <path d="M35.144 8.449h23.547V0H35.144zM20.002 0 8.834 25.343h9.654L29.573 0zm52.524 0v8.448h21.873v8.445H72.528v2.63h-.003v24.404h30.284V35.48H80.936V25.344H94.4v-8.449h8.409V0zM0 43.928h8.786V.006H0zm58.685-35.48-15.566 35.48h9.198l15.67-35.48zM18.469 25.345l8.235 18.584h9.572l-8.108-18.59z"/>
    </svg>
  )
}

export default Logo