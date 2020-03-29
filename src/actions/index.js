import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchDashboard =  () => async dispatch=>{
        const response = await jsonPlaceholder.get('/api');
        dispatch({type:'FETCH_DASHBOARD',payload:response.data});
};

export const fetchConfirmedCases =  () => async dispatch=>{
        const response = await jsonPlaceholder.get('/api/confirmed');
        dispatch({type:'FETCH_CONFIRMED_CASES',payload:response.data});
};


export const fetchUser = country => async dispatch =>{
        const response = await jsonPlaceholder.get(`/countries/${country}`);
        dispatch({type:"FETCH_COUNTRY",payload:response.data});
}

