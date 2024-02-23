
import React from 'react';
import WebsiteBuilderItem from './WebsiteBuilderItem';
import '../styles/WebsiteBuilderList.css'; // Make sure to create a corresponding CSS file for styling

// Mock data, you would fetch this data from a backend in a real application
const buildersData = [
  {
    id: 1,
    rank: 1,
    title: 'WixPro 72-Inch Responsive Website Builder',
    description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design interface for Professional Websites and Online Stores (Black/Blue)',
    highlights: 'Main Highlights...',
    hd: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides',
    rating: 9,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg' // You should replace this with the actual path to your image
  },
  {
    id: 1,
    rank: 2,
    title: 'SiteCraft 68-Inch Ultimate Web Design Studio',
    description: ' Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
    highlights: 'Main Highlights...',
    hd: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides',
    rating: 9,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg' // You should replace this with the actual path to your image
  },
  {
    id: 1,
    rank: 3,
    title: 'WixPro 72-Inch Responsive Website Builder',
    description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design interface for Professional Websites and Online Stores (Black/Blue)',
    highlights: 'Main Highlights...',
    hd: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides',
    rating: 9,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg' // You should replace this with the actual path to your image
  },
  {
    id: 1,
    rank: 4,
    title: 'SiteCraft 68-Inch Ultimate Web Design Studio',
    description: ' Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
    highlights: 'Main Highlights...',
    hd: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides',
    rating: 9,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg' // You should replace this with the actual path to your image
  },
  {
    id: 1,
    rank: 5,
    title: 'WixPro 72-Inch Responsive Website Builder',
    description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design interface for Professional Websites and Online Stores (Black/Blue)',
    highlights: 'Main Highlights...',
    hd: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides',
    rating: 9,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg' // You should replace this with the actual path to your image
  },
  {
    id: 1,
    rank: 6,
    title: 'WixPro 72-Inch Responsive Website Builder',
    description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design interface for Professional Websites and Online Stores (Black/Blue)',
    highlights: 'Main Highlights...',
    hd: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides',
    rating: 9,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg' // You should replace this with the actual path to your image
  },
  {
    id: 1,
    rank: 7,
    title: 'WixPro 72-Inch Responsive Website Builder',
    description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design interface for Professional Websites and Online Stores (Black/Blue)',
    highlights: 'Main Highlights...',
    hd: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides',
    rating: 9,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg' // You should replace this with the actual path to your image
  },
  // ... more builders
];

const WebsiteBuilderList = () => {
  return (
    <div className="website-builder-list">
      {buildersData.map(builder => (
        <WebsiteBuilderItem key={builder.id} {...builder} />
      ))}
    </div>
  );
};

export default WebsiteBuilderList;
