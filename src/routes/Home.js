import React, { useState } from "react";
import { connect } from 'react-redux';

function Home({ toDos }) {
  const [text, setText] = useState("");
  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
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

export default connect(mapStateToProps)(Home);
// connect = components들을 store에 연결해줌.
// https://react-redux.js.org/using-react-redux/connect-mapstate