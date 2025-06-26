import React, { useState } from 'react'
import PetSelection from './components/PetSelection'
import PetInteraction from './components/PetInteraction'
import MoonGallery from './components/MoonGallery'
import WelcomeScreen from './components/WelcomeScreen'
import './index.css'

function App() {
  const [currentView, setCurrentView] = useState('welcome')

  const renderContent = () => {
    switch (currentView) {
      case 'welcome':
        return <WelcomeScreen onContinue={() => setCurrentView('pet')} />
      case 'selection':
        return <PetSelection onBack={() => setCurrentView('pet')} />
      case 'gallery':
        return <MoonGallery onBack={() => setCurrentView('pet')} />
      default:
        return (
          <>
            {/* Main Screen */}
            <div className="main-screen">
              {/* Status Section */}
              <div className="status-section">
                <div className="status-item">
                  <span className="status-label">Mood</span>
                  <span className="status-stars">⭐⭐⭐</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Hunger</span>
                  <span className="status-stars">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Energy</span>
                  <span className="status-stars">⭐⭐</span>
                </div>
              </div>

              {/* Character Area */}
              <div className="character-area">
                <div className="moon-decoration">🌙</div>
                <div className="star-decoration-1">⭐</div>
                <div className="star-decoration-2">✨</div>
                
                <div className="character-sprite" style={{
                  width: '120px',
                  height: '120px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="/pink-character.png" 
                    alt="Pink Character"
                    style={{
                      width: '100px',
                      height: '100px',
                      imageRendering: 'pixelated'
                    }}
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = '<div style="font-size: 80px;">👧🏻</div>';
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="main-buttons">
              <button 
                className="app-button"
                onClick={() => setCurrentView('selection')}
              >
                ☰
              </button>
              <button 
                className="app-button"
                onClick={() => setCurrentView('pet')}
              >
                💬
              </button>
              <button 
                className="app-button"
                onClick={() => setCurrentView('gallery')}
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
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="app-container">
        
        {/* Settings Gear */}
        <div className="settings-gear">⚙️</div>

        {/* Title */}
        <div className="app-title">HOSHINO</div>
        <div className="app-subtitle">2025</div>

        {renderContent()}

      </div>
    </div>
  )
}

export default App 