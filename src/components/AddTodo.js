import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

import { addTodo } from "../redux/todos/todosSlice";

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const currentIcon = useSelector((state) => state.todos.currentIcon);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    dispatch(addTodo({ title, icon: currentIcon }));
    setTitle("");
  };

  return (
    <>
      <br />
      <form
        onSubmit={handleSubmit}
        style={{ paddingLeft: 100, paddingRight: 100 }}
      >
        <InputGroup>
          <Input
            placeholder="Add Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color={currentIcon} outline style={{ marginLeft: 10 }}>
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    </>
  );
}

export default Form;
