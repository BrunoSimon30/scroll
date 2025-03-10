import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
import './App.css';
import App from './App.jsx';

function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smoothness speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true,
      smoothTouch: false, // Disable smooth scrolling for touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return children;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrollWrapper>
      <App />
    </SmoothScrollWrapper>
  </StrictMode>
);
