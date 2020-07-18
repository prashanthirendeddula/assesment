const ticketInitialState={
    
}
const ticketReducer=(state=ticketInitialState,action)=>{
    switch(action.type){
        case 'SET_TICKET':{
            return {...action.payload}
        }
      
             default:{
          return  {...state}
        }

    }

}
export default ticketReducer