import { useState } from "react";

import { useDispatch } from "react-redux";

import { InputGroup, Input } from "reactstrap";

import { searchTodo } from "../redux/todos/todosSlice";

function Form() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    dispatch(searchTodo(search));
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ paddingLeft: 200, paddingRight: 200 }}
      >
        <InputGroup>
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              dispatch(searchTodo(search));
            }}
          />
        </InputGroup>
      </form>
    </>
  );
}

export default Form;
