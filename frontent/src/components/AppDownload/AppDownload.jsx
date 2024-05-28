import React from 'react';
import './AppDownload.css';
import playStoreImage from '../../assets/play_store.png';
import appStoreImage from '../../assets/app_store.png';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Cooks.Hut</p>
        <div className="app-download-platforms">
            <img src={playStoreImage} alt="Play Store"/>
            <img src={appStoreImage} alt="App Store"/>
        </div>
    </div>
  );
}

export default AppDownload;
