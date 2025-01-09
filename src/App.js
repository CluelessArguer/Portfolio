import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./Components/HeaderComponent";
import BodyWrapperComponent from './Components/BodyWrapperComponent';

function App() {
  return (
    <BodyWrapperComponent>
      <HeaderComponent/>
    </BodyWrapperComponent>
  );
}

export default App;
