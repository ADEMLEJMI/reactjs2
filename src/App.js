import Name from "./Name";
import Description from "./Description";
import Price from "./Price";
import Image from "./Image";
import Card from 'react-bootstrap/Card';
import './style.css'
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";
const nom = prompt("Quel est votre nom ?");

function App() {
 
 
  return (
    
    
    <div className="App" style ={{display:'flex', justifyContent:'center',marginTop:300}}>
   {nom=="adem"?
   <>
  
   <Image/>
      <Card style={{backgroundColor:'white'}}>
      <ListGroup variant="flush" style={{backgroundColor:'white'}}>
        <ListGroup.Item  style={{backgroundColor:'white',display:"flex",justifyContent:"center",alignItems:"center"}}>   <Name /> </ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'white',display:"flex",justifyContent:"center",alignItems:"center"}}>  <Description/></ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'white',display:"flex",justifyContent:"center",alignItems:"center",marginTop:25}}> <Price/></ListGroup.Item>
      </ListGroup>
    </Card>
    </>

      :<h1>wrong</h1> }      
     
      
    </div>
  );
}

export default App;
