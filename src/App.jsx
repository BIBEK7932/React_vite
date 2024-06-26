import './App.css'
import ProductTab from './components/Home/ProductTab'
import Counter from './components/Events/Counter'
import Ludo from './components/Events/Ludo'
import ToDo from './components/Events/ToDo'
import Lottery1 from './components/Events/Lottery1'
import Lottery from './components/NewLottery/Lottery'
import { sum } from './components/NewLottery/helper'
import Form from './components/Forms/Form'
import Comment from './components/Forms/Comments'
function App() {
  
 let winningCondition = (ticket)=>{
return sum(ticket)===21;
 }
  return (
    <>
   {/* <Form/> */}
    
    <Comment/>
    <Lottery1 />
    <Lottery  winningCondition={winningCondition} n={4}/>
    <ToDo/>
    <ProductTab/>
    <Ludo/>
    
   
   
   
    </>
  )
}

export default App

function Description(){
  return(<>
 <p>This is Description</p>
 <h5>Sum of 2 + 2 = {2+2}</h5>
  </>
   
  )
}

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}