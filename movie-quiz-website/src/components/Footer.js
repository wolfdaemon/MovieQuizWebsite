import React from 'react';
import Mail from '@mui/icons-material/Mail';
import OnDemandVideo from '@mui/icons-material/OndemandVideo';
import Telegram from '@mui/icons-material/Telegram';

import '../styles/Footer.css';


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Mail /> <OnDemandVideo /> <Telegram />
            </div>
            <p> &copy; 2021 REACTion Labs </p>
        </div>
    )
}

export default Footer;
