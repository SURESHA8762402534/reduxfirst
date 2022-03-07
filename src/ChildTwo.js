import React, { Component } from 'react'
import { connect } from 'react-redux';
import { action } from './Action/action';

class ChildTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
        }
    }

    handeler = (e)=>{
        const value = e.target.value;
        this.setState({name:value})
    }

  render() {
      console.log("child two state", this.state.name);
    return (
      <div>
          <div className="row m-5">
              <div className="col">
                  <div className="card">
                      <div className="card-header bg-info text-white">
                          <h1>Child Two</h1>
                          </div>
                          <div className="card-body">
                              display here: {this.props.name}
                              <input type="text" className="input m-3" onChange={this.handeler} />
                              </div>
                              <div className="card-footer bg-secondary text-white">
                                  <button className="btn-info" onClick={()=>{this.props.geek(this.state.name)}}>value two</button>
                                  </div>
                      </div>
                  </div>
              </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxStoreObject, currentComponentProps)=>{
    const value = reduxStoreObject.name;
    return{
        name:value,
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    const mapDispatch = (newvalue)=>{
        dispatch(action(newvalue))
    }
    return {
        geek:mapDispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChildTwo);