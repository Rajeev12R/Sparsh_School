import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import SchoolProfile from '../components/SchoolProfile';
import SchoolInformation from '../components/SchoolInformation';
import Affiliation from '../components/Affiliation';
import Mission from '../components/Mission';
const Homepage = () => {
  const [activeComponent, setActiveComponent] = useState('home'); // 'home' by default

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Content />;
      case 'school-profile':
        return <SchoolProfile />;
      case 'school-information':
        return <SchoolInformation />;
      case 'school-information':
        return <SchoolInformation />;
      case 'affiliation-status':
        return <Affiliation />;
      case 'our-mission':
        return <Mission />;
      default:
        return <Content />;
    }
  };

  return (
    <div>
      {/* Pass the function to set the active component to Navbar */}
      <Navbar onNavClick={setActiveComponent} />
      {renderComponent()}
    </div>
  );
};

export default Homepage;
