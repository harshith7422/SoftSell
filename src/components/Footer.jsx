import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center p-4 bg-gray-200 dark:bg-gray-700 text-sm">
            © {new Date().getFullYear()} SoftSell. All rights reserved.
        </footer>
    );
};

export default Footer;
