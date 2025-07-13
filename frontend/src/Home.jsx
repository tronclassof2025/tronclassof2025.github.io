import React, { useState } from 'react';
import PieChartComponent from "./component/PieChartComp"


export const Home = () => {
    const [activeTab, setActiveTab] = useState('home');
    const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div>
            <h1>Welcome Home</h1>
            <p>This is the home page content. You can add your main content here.</p>
          </div>
        );
      case 'about':
        return (
          <div>
            <h1>About Us</h1>
            <p>Learn more about our company and mission.</p>
          </div>
        );
      case 'services':
        return (
          <div>
            <h1>Our Services</h1>
            <p>Discover what we can do for you.</p>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h1>Contact Us</h1>
            <p>Get in touch with our team.</p>
          </div>
        );
      default:
        return <div>Home</div>;
    }
  };

  return (
    <div className="app">
      <nav className="sidebar">
        <div className="nav-item">
          <button 
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
        </div>
        <div className="nav-item">
          <button 
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </div>
        <div className="nav-item">
          <button 
            className={activeTab === 'services' ? 'active' : ''}
            onClick={() => setActiveTab('services')}
          >
            Services
          </button>
        </div>
        <div className="nav-item">
          <button 
            className={activeTab === 'contact' ? 'active' : ''}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </div>
      </nav>
      <main className="content">
        {renderContent()}
        <PieChartComponent />
      </main>
    </div>
  );

}