import React from 'react';
import Fundraiserbox from './Fundraiserbox';
import fund1 from '../Assets/Images/s1.png'
import fund2 from '../Assets/Images/s2.png'
import fund3 from '../Assets/Images/s3.png'
import '../Css/Style.css';

function Fundraisers() {
  return (
    <div className='agent'>
    <div className='a-heading'>
    <h1>Fundraisers</h1>
     <p>“If you call yourself Save the Whales, every once in
      a while you have to save a whale.”</p>
    </div>
    <div className='b-container'>
    <Fundraiserbox image={fund1} name="Alvin" />
    <Fundraiserbox image={fund2} name="Khan" />
    <Fundraiserbox image={fund3 } name="Vielv" />
    </div>
    </div>
  )
}

export default Fundraisers; 