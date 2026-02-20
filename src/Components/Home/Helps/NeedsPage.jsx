import React from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Helps from '../Helps/Helps';
import Footer from '../../Layout/Footer/Footer';
import '../../../Css/Style.css';

function NeedsPage() {
    return (
        <div className='needs-page-wrapper'>
            <Navbar />
            <div style={{ marginTop: '80px' }}>
                <Helps />
            </div>
            <Footer />
        </div>
    );
}

export default NeedsPage;
