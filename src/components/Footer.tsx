import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface text-subtext text-center py-4 text-sm">
      © {year} Rory Eddleston. All rights reserved.
    </footer>
  );
};

export default Footer;