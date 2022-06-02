import React, { useEffect, useState } from 'react'
import './style.css'
export default function Popup(props) {

  useEffect(()=>{
    if(props.isOpen){
      setTimeout(() => {
        props.handleSuccess()
      }, 2000);
    }
  },[props.isOpen])

  return (
    <div className={`popup-main ${props.isOpen ? "active" : null}`}>
      <div className='popup-overlay' onClick={()=>props.handleSuccess()}>

      </div>
      <div className='popup-content'>
        <span className='icon-popup'>
          <svg width="18" height="7" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>props.handleSuccess()}>
            <path d="M9.00036 3.45506L15.866 0.145722C16.6167 -0.216127 17.5093 0.119115 17.8596 0.894506C18.21 1.6699 17.8854 2.59181 17.1347 2.95366L9.63469 6.56875C9.23261 6.76255 8.7681 6.76255 8.36603 6.56875L0.86603 2.95366C0.115323 2.59181 -0.209247 1.6699 0.141083 0.894506C0.491413 0.119115 1.38398 -0.216127 2.13469 0.145722L9.00036 3.45506Z" fill="#D3D7DB" />
          </svg>
        </span>
        <span className='icon-success'>
          <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35.5" cy="35.5" r="35.5" fill="#04B800" />
            <path d="M41.8571 49H29.8571C27.6429 49 25.8571 47.2701 25.8571 45.125V24.6429H20.7143C19.7143 24.6429 19 25.404 19 26.3036V51.7679C19 52.7366 19.7143 53.4286 20.7143 53.4286H40.1429C41.0714 53.4286 41.8571 52.7366 41.8571 51.7679V49ZM41.8571 25.1964V18H29.8571C28.8571 18 28.1429 18.7612 28.1429 19.6607V45.125C28.1429 46.0938 28.8571 46.7857 29.8571 46.7857H49.2857C50.2143 46.7857 51 46.0938 51 45.125V26.8571H43.5714C42.5714 26.8571 41.8571 26.1652 41.8571 25.1964ZM50.4286 23.0513L45.7857 18.5536C45.4286 18.2076 45 18 44.5714 18H44.1429V24.6429H51V24.2277C51 23.8125 50.7857 23.3973 50.4286 23.0513Z" fill="white" />
          </svg>
        </span>
        <p className='popup-content-text'>
          Saved to clipboard
        </p>
        <span className='popup-content-time'>
          2s
        </span>
      </div>
    </div>
  )
}
