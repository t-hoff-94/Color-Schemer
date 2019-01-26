import React, { Component } from 'react';
import styled from 'styled-components'
import SingleColor from './components/SingleColor'
import ColorSlider from './components/ColorSlider'

const ContainerStyle = styled.div`
  background-color: #333;
  min-height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <ContainerStyle>
      <SingleColor />
      <ColorSlider />
      </ContainerStyle>
    );
  }
}

export default App;
