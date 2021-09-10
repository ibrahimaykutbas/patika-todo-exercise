import React from "react";

import { Button } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";

import { changeCurrentIcon } from "../redux/todos/todosSlice";

function ColorPalette() {
  const dispatch = useDispatch();
  const currentIcon = useSelector((state) => state.todos.currentIcon);

  return (
    <div style={{ paddingLeft: 100, marginTop: 10 }}>
      <Button
        size="sm"
        color="primary"
        onClick={() => dispatch(changeCurrentIcon("primary"))}
      >
        {currentIcon === "primary" && "✓"}
      </Button>{" "}
      <Button
        size="sm"
        color="warning"
        onClick={() => dispatch(changeCurrentIcon("warning"))}
      >
        {currentIcon === "warning" && "✓"}
      </Button>{" "}
      <Button
        size="sm"
        color="info"
        onClick={() => dispatch(changeCurrentIcon("info"))}
      >
        {currentIcon === "info" && "✓"}
      </Button>{" "}
      <Button
        size="sm"
        color="danger"
        onClick={() => dispatch(changeCurrentIcon("danger"))}
      >
        {currentIcon === "danger" && "✓"}
      </Button>{" "}
    </div>
  );
}

export default ColorPalette;
