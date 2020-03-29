
export default (state = [],action)=>{
   switch (action.type) {
      case 'FETCH_CONFIRMED_CASES':
         return action.payload;
      default:
         return state;
   }
   
}