import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { deleteTodo } from "../redux/todos/todosSlice";

import { Row, Col, Toast, ToastHeader, ToastBody } from "reactstrap";

function TodoList() {
  const todos = useSelector((state) => state.todos.items);
  const searchText = useSelector((state) => state.todos.searchText);
  const filtered = todos.filter((item) => {
    return item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
  });

  const dispatch = useDispatch();

  return (
    <>
      <Row style={{ marginTop: 25 }}>
        {filtered.map((item) => (
          <Col xs="4" style={{ marginBottom: 10 }}>
            <Toast>
              <ToastHeader
                icon={item.icon}
                onClick={() => dispatch(deleteTodo({ id: item.id }))}
              ></ToastHeader>
              <ToastBody>{item.title}</ToastBody>
            </Toast>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default TodoList;
