const reducer = (state ,action)=>{
    if(state === undefined){
        return {
            name : 'geekster'
        };

    }
    // if(action.type === 'CHILD_VALUE'){
    //     console.log('i have reched the reducer')
    // }

    const load = action.payload
    switch(action.type){
        case "CHILD_VALUE":
            console.log('i have reched the reducer');
           
            state.name = [...state.name," / ", load]
            
            break;

            default:
            break
    }
    return {...state};
}

export default reducer;