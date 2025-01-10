import './App.css';
import HeaderComponent from "./Components/Header/HeaderComponent";
import PortfolioWrapperComponent from './Components/PortfolioWrapperComponent';

function App() {
  return (
    <PortfolioWrapperComponent>
      <HeaderComponent/>
    </PortfolioWrapperComponent>
  );
}

export default App;
