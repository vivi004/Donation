import React from 'react';
import Fundraiserbox from './Fundraiserbox';
import '../../../Css/Style.css';
import './Fundraisers.css';

function Fundraisers() {
  const fundraiserData = [
    {
      id: 1,
      name: "Medical Support for Alvin",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
      raised: 8500,
      goal: 15000
    },
    {
      id: 2,
      name: "Education Fund for Khan",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      raised: 12400,
      goal: 10000
    },
    {
      id: 3,
      name: "Vielv's Recovery Fund",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
      raised: 3200,
      goal: 8000
    }
  ];

  return (
    <div className='agent'>
      <div className='a-heading'>
        <h1>Fundraisers</h1>
        <p>Your support directly helps these individuals overcome critical challenges.</p>
      </div>
      <div className='b-container'>
        {fundraiserData.map(fund => (
          <Fundraiserbox
            key={fund.id}
            image={fund.image}
            name={fund.name}
            raised={fund.raised}
            goal={fund.goal}
          />
        ))}
      </div>
    </div>
  )
}

export default Fundraisers;