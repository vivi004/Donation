import React from 'react';
import Helpsbox from './Helpsbox';
import fimg1 from '../../../Assets/Images/donor.jpg'
import fimg2 from '../../../Assets/Images/blood.jpg'
import fimg3 from '../../../Assets/Images/study.jpg'
import '../../../Css/Style.css';
import './Helps.css';
import { useNavigate } from 'react-router-dom';

function Helps() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const needsData = [
    {
      id: 1,
      image: fimg1,
      name: "Treatment Fund",
      donors: "10K+ Donors",
      description: "Support critical medical surgeries and treatments."
    },
    {
      id: 2,
      image: fimg2,
      name: "Blood Donation",
      donors: "50K+ Donors",
      description: "Connect with verified blood donors in your area."
    },
    {
      id: 3,
      image: fimg3,
      name: "Education Support",
      donors: "80K+ Donors",
      description: "Help children with school supplies and scholarships."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400&h=260",
      name: "Disaster Relief",
      donors: "25K+ Donors",
      description: "Emergency aid for communities hit by natural disasters."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&q=80&w=400&h=260",
      name: "Animal Welfare",
      donors: "15K+ Donors",
      description: "Protect and care for abandoned animals and wildlife."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400&h=260",
      name: "Food Security",
      donors: "40K+ Donors",
      description: "Combat hunger by providing meals to those in need."
    }
  ];

  return (
    <div className='product'>
      <div className='container'>
        <div className='p-heading'>
          <h3>URGENT NEEDS</h3>
          <p>Choose a category and make a difference. Your small contribution can change a life today.</p>
        </div>

        <div className='product-container'>
          {needsData.map(need => (
            <Helpsbox
              key={need.id}
              image={need.image}
              name={need.name}
              price={need.donors}
            />
          ))}
        </div>

        {localStorage.getItem('isLoggedIn') === 'true' && (
          <button className='logout-btn' onClick={handleLogout}>
            <ion-icon name="log-out-outline"></ion-icon>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Helps;