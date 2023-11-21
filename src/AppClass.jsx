import React from 'react';
import './App.css';
import DataComponents from './components/DataComponents';

export default class AppClass extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.imageData
  // }

  render(props) {
    const images = DataComponents();
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
}




