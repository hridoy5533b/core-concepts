import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const  nayoks = ['Hridoy','Siam', 'Morsalin', 'Nasir','Arafat','Shawon','Ferdaws', ];
 const Products =[
   {name:'Photoshop', price:'$90.99'},
   {name:'Illustrator', price:'60.99'},
   {name:'PDF Reader', price:'6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">

     <p>My first React Paragraph</p>
     <ul>
       <Counter></Counter>
       <Users></Users>
       {
         nayoks.map(nayoks => <li>{<li>{nayoks}</li>}</li>)
       }
       {
         Products.map(Product => <li>{Product.name}</li>)
       } 
        

         {/* <li>{nayoks[0]}</li>
         <li>{nayoks[1]}</li>
         <li>{nayoks[2]}</li> */}
     </ul>
     <Product Product={Products[0]}></Product>
     <Product Product={Products[1]}></Product>
     <Product Product={Products[2]}></Product>
     <Person name="Hridoy Ahmed" job="freelansing"></Person>
     <Person name="Siam" job="play Boy"></Person>
     <Person name="Morsalin" job="ajaira"></Person>
     <Person name="Nasir" job="kamnai"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);


  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onMouseMove={() => setCount(count - 1)}>Dcrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
 return(
   <div>
     <h3>Dynamic Users: {users.length}</h3>
     <ul>
       {
         users.map(user => <li>{user.name}</li>)
       }
     </ul>
   
   </div>
 )
}

function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    width:'200px',
    height:'200px',
    float:'left'
  }
  const {name, price} = props.Product;
  console.log(name, price)
  return (
    <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy naw</button>
      
    </div>
  )
}  

 function Person(props){
const personStyle={ 
  border:'2px solid gold',

}  

   return(
        <div style={personStyle}>
            <h1>name: {props.name }</h1>
            <h3>Hero of {props.job}</h3>
         </div>)
   
   }

export default App;
