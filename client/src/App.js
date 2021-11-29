import React, {useState} from 'react';
import About from './components/About';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Events from './components/Events';
import Contact from './components/Contact';
import Catering from './components/Catering';
import Footer from './components/Footer';
import Vip from './components/Vip';
import Online from './components/Online';
// import StarRating from './components/StarRating';

function App() {

  const [currentPage, setCurrentPage] = useState('about');

  const renderPage =() => {
    switch(currentPage){
      case 'about':
        return <About />;
      case 'menu':
        return <Menu />;
      case 'online':
        return <Online />;
        case 'events':
        return <Events />;
      case 'catering':
        return <Catering />;        
      case 'contact':
        return <Contact />;
      case 'vip':
        return <Vip />;
      default:
        return <About />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <main>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {/* <StarRating /> */}
      <Footer />
    </main>
  );
}

export default App;
