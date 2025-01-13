import './App.css';
import HeaderComponent from "./Components/Header/HeaderComponent";
import PortfolioWrapperComponent from './Components/PortfolioWrapperComponent';
import ExperienceComponent from "./Components/Experience/ExperienceComponent";
import ProjectsComponent from './Components/Projects/ProjectsComponent';
import ContactComponent from './Components/Contact/ContactComponent';
import FooterComponent from './Components/Footer/FooterComponent';

function App() {
  return (
    <PortfolioWrapperComponent>
      <HeaderComponent/>
      <ExperienceComponent/>
      <ProjectsComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </PortfolioWrapperComponent>
  );
}

export default App;
