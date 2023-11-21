import './App.css';
// import elephant from './images/elephant.jpeg';
import DataComponents from './components/DataComponents'

const images = DataComponents();

function App() {
  return (
    <div className="App">
      {images.map((imgs, index) => (
        <div key={index}>
          <img src={imgs.img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
