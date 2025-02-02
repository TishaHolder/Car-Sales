import { ADD_FEATURE } from '../actions/actions.js';
import { REMOVE_FEATURE } from '../actions/actions.js';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }

  

   export const reducer = (state = initialState, action) => { 
   
    switch(action.type){      

        case ADD_FEATURE:  

        if (state.car.features.find(feature => feature.id === action.payload.id)) {
            alert("you already added this feature!");
            return state;
          } else {          
               
        return {            
           

            ...state, //return a modified version of our state object so spread state in here
           
            car: { 
                ...state.car,//spread existing object

                 //adds the cost of the added feature to the total price
                price: state.car.price + action.payload.price,
                features: [...state.car.features, action.payload] //appeand the features in action.payload to the features array
            }
        }
    };
    

    
    

        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,

                    //subtracts the cost of the removed feature from the total price
                    price: state.car.price - action.payload.price,
                    features: state.car.features.filter(feature => {
                        if(feature.id === action.payload.id){
                            return false;

                        }
                        else {
                            return true;
                        }
                    })
                }

            };

           
        
        default:
            return state;

    }//end switch          

  }//end reducer

 