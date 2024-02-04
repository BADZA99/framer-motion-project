
import { useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components'
const StyleleMainWrapper=styled.div`
position:relative;`
function App() {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  return (
    <StyleleMainWrapper>
      <Header  isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </StyleleMainWrapper>
    
  );
}

export default App;
