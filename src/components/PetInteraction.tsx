import React from 'react'

const PetInteraction: React.FC = () => {
  return (
    <div className="status-section">
      <div className="status-item">
        <span className="status-label">Pet Status</span>
        <span className="status-stars">⭐⭐⭐⭐⭐</span>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ fontSize: '60px', marginBottom: '10px' }}>👧🏻</div>
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>HOSHINO</div>
        <div style={{ fontSize: '12px', margin: '10px 0' }}>Anime Girl</div>
      </div>
    </div>
  )
}

export default PetInteraction 
