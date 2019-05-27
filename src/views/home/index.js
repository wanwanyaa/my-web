import React from 'react'
import { connect } from 'react-redux'
import { inputChange } from './store/createActions'
class Index extends React.Component {
  constructor (props) {

  }
  render() {
    const { inputVal, inputChange } = this.props
    return (
      <div>
        <input value={ inputVal } onChange={ (e)=> { console.log(e) } }></input>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputVal: state.home.inputVal
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    inputChange(value) {
      dispatch(inputChange(value))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)
