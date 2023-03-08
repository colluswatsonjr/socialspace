import React from 'react';

export default function Card({ page }) {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{page.username || page.title}</h3>
        <p>{page.bio}</p>
      </div>
    </div>
  );
}
