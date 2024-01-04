import React from 'react';
import Helpsbox from './Helpsbox';
import fimg1 from '../Assets/Images/donor.jpg'
import fimg2 from '../Assets/Images/blood.jpg'
import fimg3 from '../Assets/Images/study.jpg'
import '../Css/Style.css';

function Helps() {
  return (
    <div className='product'>
    <div className='p-heading'>
    <h3>NEEDS</h3>
    <p>“If you call yourself Save the Whales, every once in
      a while you have to save a whale.”</p>
    </div>
    
    <div className='product-container'>
    <Helpsbox image={fimg1} name="Treatement-fund" price="10K+ Donors"/>
    <Helpsbox image={fimg2} name="Blood" price="50K+ Donors"/>
    <Helpsbox image={fimg3} name="Education" price="80K+ Donors"/>
    </div>
    
     </div>
  )
}

export default Helps;