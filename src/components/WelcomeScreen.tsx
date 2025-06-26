import React from 'react'

interface Props {
  onContinue: () => void
}

const WelcomeScreen: React.FC<Props> = ({ onContinue }) => {
  return (
    <>
      {/* Main Screen */}
      <div className="main-screen" style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Full Screen Star Background */}
        <img 
          src="/star-character.png" 
          alt="Star Character"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            imageRendering: 'pixelated',
            zIndex: 1
          }}
          onError={(e) => {
            // Fallback if image doesn't exist
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.parentElement) {
              const fallback = document.createElement('div');
              fallback.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; font-size: 200px; color: #86EFAC; z-index: 1;';
              fallback.innerHTML = '⭐';
              e.currentTarget.parentElement.appendChild(fallback);
            }
          }}
        />

        {/* Welcome Message Box */}
        <div className="welcome-message">
          Welcome! My name is Hoshino, I will guide you through this journey.
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="main-buttons">
        <button 
          className="app-button"
          onClick={onContinue}
        >
          ☰
        </button>
        <button 
          className="app-button"
          onClick={onContinue}
        >
          💬
        </button>
        <button 
          className="app-button"
          onClick={onContinue}
        >
          🍎
        </button>
      </div>

      {/* Bottom Action Buttons */}
      <div className="bottom-buttons">
        <button className="app-button small-button">
          🎮
        </button>
        <button className="app-button small-button">
          💤
        </button>
      </div>
    </>
  )
}

export default WelcomeScreen 