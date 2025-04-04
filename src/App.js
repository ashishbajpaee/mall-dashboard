
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { 
  Ecommerce, Orders, Employees, Stacked, Pyramid, Customers, 
  Line, Area, Bar, Pie, Financial, ColorMapping 
} from './pages';

import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { 
    setCurrentColor, setCurrentMode, currentMode, activeMenu, 
    currentColor, themeSettings, setThemeSettings 
  } = useStateContext();

  useEffect(() => {
    const colorMode = localStorage.getItem('colorMode');
    const themeMode = localStorage.getItem('themeMode');
    if (colorMode && themeMode) {
      setCurrentColor(colorMode);
      setCurrentMode(themeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-[1000]">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              title="Settings"
            >
              <FiSettings />
            </button>
          </div>

          <div className={`${activeMenu ? 'w-72 fixed' : 'w-0'} sidebar dark:bg-secondary-dark-bg bg-white`}>
            <Sidebar />
          </div>

          <div className={`min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'} dark:bg-main-dark-bg bg-main-bg`}>
            <div className="fixed md:static w-full navbar bg-main-bg dark:bg-main-dark-bg">
              <Navbar />
            </div>

            {themeSettings && <ThemeSettings />}

            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/orders" element={<Orders />} />
             
              <Route path="/line" element={<Line />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
             
              <Route path="/stacked" element={<Stacked />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
