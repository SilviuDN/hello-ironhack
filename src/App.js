// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FeatureCards from './FeatureCards';

import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'


const featureCards = [
  { title: "Declarative", description: "React makes it painless to create interactive UIs.", imageSource: {icon1}},
  { title: "Components", description: "Build encapsuled components that manage their state.", imageSource: {icon2}},
  { title: "Single-Way", description: "A set of imutable values is passed to the components.", imageSource :{icon3}},
  { title: "JSX", description: "Statically typed, designed to run on modern browsers.", imageSource: {icon4}}
]

function App() {
  return (
    <>
        <Header titleText="Say Hello to ReactJS"/>
        <FeatureCards featureCards={featureCards}/>
        

    </>
  );
}

export default App;
