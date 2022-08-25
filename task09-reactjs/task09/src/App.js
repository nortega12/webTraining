import './scss/App.scss';
import Header from './components/Header';
import PhotoInfo from './components/Photo-info-container';
import GeneralInfo from './components/General-info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PhotoInfo />
      <GeneralInfo />
      <Footer />
    </div>
  );
}

export default App;
