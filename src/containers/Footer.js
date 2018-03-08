import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {clearForm, submitForm} from '../actions/index';
import {connect} from 'react-redux';

class Footer extends Component {

  constructor(props){
		super(props);
  }


  render(){
    return (
        <div>
           <button type="button" className="btn btn-primary-outline" disabled = {this.props.resulted}
               onClick={value => this.props.submitForm(this.props.questions, this.props.answers)}>
                  Submit
            </button>
          
            <button type="button" className="btn btn-danger-outline"
              onClick={value => this.props.clearForm()}>
                Clear Values
            </button>
            
           
       </div>
    );
  }
}

function mapDisaptchToProps(dispatch) {
  return bindActionCreators({clearForm, submitForm}, dispatch);
}

const mapStateToProps = (state) => {
  return {answers : state.answers, questions : state.questions, resulted : state.result.isSuccess};
}

export default connect(mapStateToProps, mapDisaptchToProps)(Footer);
