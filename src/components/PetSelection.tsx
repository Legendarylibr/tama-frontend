import React from 'react'

interface Props {
  onBack: () => void
}

const PetSelection: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="status-section">
      <div className="status-item">
        <span className="status-label">Pet Select</span>
        <span className="status-stars">⭐⭐⭐</span>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ fontSize: '60px', marginBottom: '10px' }}>🐰</div>
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>LUNABUN</div>
        <div style={{ fontSize: '12px', margin: '10px 0' }}>Moon Rabbit</div>
        <button 
          onClick={onBack}
          style={{
            padding: '8px 16px',
            backgroundColor: '#fbbf24',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default PetSelection 