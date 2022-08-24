import './scss/App.scss';
import Header from './header/Header';
import PhotoInfo from './main-photo-info/Photo-info-container';
import GeneralInfo from './general-info/General-info';
import Footer from './footer/Footer';
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
