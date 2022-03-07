import React, { Component } from 'react'
import { connect } from 'react-redux';
import { action } from './Action/action';

 class ChildOne extends Component {
     constructor(props){
         super(props);
         this.state = {
             data : "",
         }
     }

     handelchange = (e)=>{
         const value = e.target.value;
         this.setState({data : value})
     }

  render() {
      console.log("child propps", this.props);
      console.log("child state", this.state.data);
    return (
      <div>
          <div className="row m-5">
              <div className="col">
                  <div className="card">
                      <div className="card-header bg-info text-white">
                          <h1>Child One</h1>
                          </div>
                          <div className="card-body">
                              disply here:-{this.props.name}
                              <input className='input m-3' type="text" onChange={this.handelchange} />
                              </div>
                              <div className="card-footer bg-secondary text-white">
                                 <button className="btn-primary" onClick={()=>{this.props.geekDispatch(this.state.data)}}> value one</button>
                                  </div>
                      </div>
                  </div>
              </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxStoreobject, currentComponentProps) => {
    const name = reduxStoreobject.name;
    return {
        name
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    const dispatchToChild = (newValue)=>{
        // const actionObj = {
        //     type : "CHILD_VALUE",
        //     payload : newValue,
        // };
        dispatch(action(newValue));
        
    }
    return {
        geekDispatch : dispatchToChild,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildOne)