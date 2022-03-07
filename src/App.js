import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import { connect } from 'react-redux';
import { Component } from "react";
import { action } from "./Action/action";

class App extends Component{

  render(){
    console.log("parent props", this.props);
    return (
      <div className="App">
       <div className='row m-5'>
         <div className="col m-5">
         <div className="card">
           <div className="card-header bg-info text-white">
               <h1>Parent</h1>
               </div>
               <div className="card-body">
               this is the parent obj:- {this.props.someKey}
               </div>
              <div className="card-footer bg-secondary text-white">
                       parent value
               </div>
            </div>
          
          
           </div>
        
          <div className="col">
          <ChildOne
          age = {99} 
          />
          </div>
          
          <div className="col">
          <ChildTwo/>
            </div>
              
         </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxStoreObject,currentComponentProps) => {
  // console.log('reduxstore object',reduxStoreObject);
  const nameValue = reduxStoreObject.name;

  return {//it always return a object and whatever it returns it will got to App as a props

    geek:"ster",
    suresh:'student',
    someKey:nameValue,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    abhishek:'geekgeek'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
