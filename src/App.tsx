import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Simple components for now
const PetSelection = () => (
  <div className="space-y-4">
    <div className="lcd-text text-center border-b border-gray-600 pb-2">
      <div className="lcd-text-large retro-glow">
        SELECT PET
      </div>
    </div>
    <div className="text-center space-y-3">
      <div className="pet-display mx-auto">
        <div className="text-4xl pixel-bounce">
          🐰
        </div>
      </div>
      <div className="lcd-text-large">
        LUNABUN
      </div>
      <div className="lcd-text text-xs">
        MOON RABBIT
      </div>
    </div>
  </div>
);

const PetInteraction = () => (
  <div className="space-y-4">
    <div className="lcd-text text-center border-b border-gray-600 pb-2">
      <div className="flex justify-between text-xs">
        <span>AGE: 5D</span>
        <span>12:34</span>
      </div>
    </div>
    <div className="text-center">
      <div className="pet-display mx-auto">
        <div className="text-4xl pixel-bounce">
          😊
        </div>
      </div>
      <div className="lcd-text-large retro-glow">
        LUNABUN
      </div>
    </div>
  </div>
);

const MoonGallery = () => (
  <div className="space-y-4">
    <div className="lcd-text text-center border-b border-gray-600 pb-2">
      <div className="lcd-text-large retro-glow">
        MOON GALLERY
      </div>
    </div>
    <div className="text-center space-y-4 py-8">
      <div className="text-4xl">🌙</div>
      <div className="lcd-text">
        NO ASCENDED PETS YET
      </div>
    </div>
  </div>
);

const Navigation = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-3 gap-4 justify-items-center">
      <div className="text-center">
        <button className="btn-tamagotchi">
          🐾
        </button>
        <div className="button-label">SELECT</div>
      </div>
      <div className="text-center">
        <button className="btn-tamagotchi">
          ❤️
        </button>
        <div className="button-label">CARE</div>
      </div>
      <div className="text-center">
        <button className="btn-tamagotchi">
          🌙
        </button>
        <div className="button-label">GALLERY</div>
      </div>
    </div>
    <div className="flex justify-center items-center space-x-2 mt-2">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-green-400 text-xs font-mono">ONLINE</span>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="tamagotchi-device">
          <div className="brand-label">HOSHINO™</div>
          
          <div className="lcd-screen">
            <div className="lcd-text text-center mb-2">
              ✧ CELESTIAL PET DEVICE ✧
            </div>
            
            <main>
              <Routes>
                <Route path="/" element={<PetSelection />} />
                <Route path="/pet" element={<PetInteraction />} />
                <Route path="/gallery" element={<MoonGallery />} />
              </Routes>
            </main>
          </div>
          
          <Navigation />
          
          <div className="text-center mt-4">
            <div className="text-purple-200 text-xs font-mono">
              MODEL: HSN-2024
            </div>
            <div className="text-purple-300 text-xs mt-1">
              ⚡ SOLANA POWERED ⚡
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App; 