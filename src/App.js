import './App.css';
import HeaderComponent from "./Components/Header/HeaderComponent";
import PortfolioWrapperComponent from './Components/PortfolioWrapperComponent';
import ExperienceComponent from "./Components/Experience/ExperienceComponent";

function App() {
  return (
    <PortfolioWrapperComponent>
      <HeaderComponent/>
      <ExperienceComponent/>
    </PortfolioWrapperComponent>
  );
}

export default App;
