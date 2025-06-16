import { FC } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

// Components
import Navigation from './components/Navigation';
import PetSelection from './components/PetSelection';
import PetInteraction from './components/PetInteraction';
import MoonGallery from './components/MoonGallery';

// Styles
import './styles/App.css';
import '@solana/wallet-adapter-react-ui/styles.css';

const App: FC = () => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = clusterApiUrl(network);
  const wallets = [new PhantomWalletAdapter()];

  return (
    <ChakraProvider>
      <CSSReset />
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Router>
              <div className="app">
                <Navigation />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<PetSelection />} />
                    <Route path="/pet/:id" element={<PetInteraction />} />
                    <Route path="/gallery" element={<MoonGallery />} />
                  </Routes>
                </main>
              </div>
            </Router>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ChakraProvider>
  );
};

export default App; 
