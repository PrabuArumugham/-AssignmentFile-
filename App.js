import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import inputComp from './inputComp';
//import menuData from './menudata.json';
const menudatas=[ 
  {
    "name": "Pepsi",
    "category": "Beverages",
    "itemId": 16295,
    "imageUrl": "/no_menu_image.jpg",
    "price": 200,
    "tax": 8.25,
    "available": true,
    "description": "",
    "modifierGroups": {},
    "timePeriods": [
      {
        "price": null,
        "description": null,
        "daysOfWeek": [],
        "period": [],
        "alwaysAvailable": true
      }
    ]
  },
   {
    "name": "Diet Pepsi",
    "category": "Beverages",
    "itemId": 16296,
    "imageUrl": "/no_menu_image.jpg",
    "price": 200,
    "tax": 8.25,
    "available": true,
    "description": "",
    "modifierGroups": {},
    "timePeriods": [
      {
        "price": null,
        "description": null,
        "daysOfWeek": [],
        "period": [],
        "alwaysAvailable": true
      }
    ]
  }];

function App() {
  var selectedVal='';
  const [pricepage, setPricepage] = useState(false);
  const [pri, setPri] = useState();
  const handlingFun=(event)=>{
   setPricepage(true);
 
   //selectedVal=document.getElementById("pricetag").value;
    for(var i=0; i<menudatas.length; i++){
      if(menudatas[i].itemId==event.target.value){
        menudatas[i].timePeriods.price=pri;
     }
     //alert(pri)
  }
  }
  const onchange = (event) => {
    setPri(document.getElementById('pricetag').value)
    //console.log("Form>",data);
    setPricepage(!true)
    
}
  return (
    
    <div >
    {pricepage==true? <div> <input id='pricetag' /><button onClick={onchange}>Set the price </button></div>:
  menudatas.map((user,index) => (
    <div key={user.itemId}  class="column">
   
                <img src={user.imageUrl}/>
                                 <div class="card">
                                     <div class="container">
                                         <h2>{user.name}</h2>
                                         <p class="title">{user.category}</p>
                                         <p><h3>{'Available  :'+user.available}</h3></p>
                                         
                                         <p><h3>{'Updated Price  :'+user.timePeriods.price+'/-'}</h3></p>
                                         <p><h5>Tax {user.tax+' %'}</h5></p>
                                        <button value={user.itemId} onClick={handlingFun}>Price Change</button>
                                     </div>
                                 </div>
                        </div>
          
  ))}
     
    </div>
  );
}

export default App;
