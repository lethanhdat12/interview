import React, { useEffect } from 'react'
import './style.css'
export default function Home(props) {
    return (
        <div>
            <div className='container'>
                <div className='becrumd'>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.81066 9L9.28033 16.4697C9.57322 16.7626 9.57322 17.2374 9.28033 17.5303C8.98744 17.8232 8.51256 17.8232 8.21967 17.5303L0.21967 9.53033C-0.0732233 9.23744 -0.0732233 8.76256 0.21967 8.46967L8.21967 0.46967C8.51256 0.176777 8.98744 0.176777 9.28033 0.46967C9.57322 0.762563 9.57322 1.23744 9.28033 1.53033L1.81066 9Z" fill="#04004D" />
                    </svg>
                    <h2 className='becrumdtitle'>
                        Create New Wallet
                    </h2>
                </div>
                <h1 className='home-title'>
                    Auto Gen Seed Phrase?
                </h1>
                <ul className='list-word'>
                    {
                        props.data24 ?
                            props.data24.map((item , index) => (
                                <li className='list-word-item' key={index}>
                                    <span className='list-word-index'>
                                        {item.index + 1}
                                    </span>
                                    <span className='list-word-text'>
                                        {item.name + 1}
                                    </span>
                                </li>
                            ))
                            : null
                    }

                </ul>
                <div className='home-tap'>
                    <p className='home-tap-title'>
                        Tap to Copy or Carefully write down your seed phrase and store it in a safe place
                    </p>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon-tab' onClick={()=>props.handleSuccess()}>
                        <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" fill="white" stroke="#004DFF" />
                        <path d="M30.7143 36.0938H19.8393C17.8326 36.0938 16.2143 34.526 16.2143 32.582V14.0201H11.5536C10.6473 14.0201 10 14.7099 10 15.5251V38.6021C10 39.4801 10.6473 40.1071 11.5536 40.1071H29.1607C30.0022 40.1071 30.7143 39.4801 30.7143 38.6021V36.0938ZM30.7143 14.5218V8H19.8393C18.933 8 18.2857 8.6898 18.2857 9.50502V32.582C18.2857 33.46 18.933 34.0871 19.8393 34.0871H37.4464C38.2879 34.0871 39 33.46 39 32.582V16.0268H32.2679C31.3616 16.0268 30.7143 15.3997 30.7143 14.5218ZM38.4821 12.5778L34.2746 8.50167C33.9509 8.18813 33.5625 8 33.1741 8H32.7857V14.0201H39V13.6438C39 13.2676 38.8058 12.8913 38.4821 12.5778Z" fill="#004DFF" />
                    </svg>

                </div>
            </div>
            <div className='home-footer'>
                <p className='footer-title'>
                    <span>
                        How does this work?
                    </span>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 10L17.5 15L12.5 20" stroke="#04004D" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </p>
                <button className='footer-button'>next</button>
            </div>
        </div>
    )
}
