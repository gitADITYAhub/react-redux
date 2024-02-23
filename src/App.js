
import './App.css';
import React from 'react';
import Header from './components/Header';
import ExtraSection from './components/ExtraSection';
import SearchBar from './components/SearchBar';
import WebsiteBuilderList from './components/WebsiteBuilderList';
import DealsSection from './components/DealsSection';
import SignUpSection from './components/SignUpSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <SearchBar />
      <Header />
      <ExtraSection />
      <WebsiteBuilderList />
      <DealsSection />
      <SignUpSection />
      <Footer />
      
    </div>
  );
}

export default App;
