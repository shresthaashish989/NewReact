
import './App.css';
import Button from './Components/Button';
import First from './Components/First';
import Second from './Components/Second';
import { Demo, Test } from './Components/Test';


function App() {
  return (
    <div className="App">
   <First head="my name is Ashish Shrestha"/>
   <Button button_cnt="sign in"/>
   <Second head="my age is bla bla bla"/>
   <Button button_cnt="Buy Now"/>
   <Test head="I amm rich"/>
   <Button  button_cnt="Register"/>
   <Demo head="my school name is texas"/>
   <Button  button_cnt="Click Me"/>
 

    </div>
  );
}

export default App;
