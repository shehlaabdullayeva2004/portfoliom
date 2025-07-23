import React from 'react';
import './InfoTags.scss';

export default function InfoTags({ title }) {
  return (
    <div className='infoTag'>
      <p>{ title}</p> 
    </div>
  );
}
