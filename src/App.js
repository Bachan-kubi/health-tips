import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Narration from './components/Narration/Narration';

function App() {
  return (
    <div className='all-app'>
      <Header />
      <Home />
      <Narration />
    </div>
  );
}

export default App;
