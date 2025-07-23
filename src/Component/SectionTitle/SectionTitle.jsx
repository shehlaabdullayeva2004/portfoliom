import React from 'react';
import './SectionTitle.scss';

export default function SectionTitle({ title }) {
  return (
    <div className='sectionTitle'>
          <p>{title}</p>
    </div>
  );
}
