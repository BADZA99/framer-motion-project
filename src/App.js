
import { useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components'
import Menu from './components/Menu';
const StyleleMainWrapper=styled.div`
position:relative;


`
function App() {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  return (
    <StyleleMainWrapper>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} />
    </StyleleMainWrapper>
  );
}

export default App;
