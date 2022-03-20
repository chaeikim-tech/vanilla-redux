import React, { useState } from "react";
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state){
    return { toDos: state};
}

function mapDispatchToProps(dispatch) {
    return{
        addToDo: text => dispatch(actionCreators.addToDo(text))
    };
}
//https://react-redux.js.org/using-react-redux/connect-mapdispatch


export default connect(mapStateToProps, mapDispatchToProps)(Home);
// connect = components들을 store에 연결해줌.
// https://react-redux.js.org/using-react-redux/connect-mapstate