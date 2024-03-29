import React,{ useState,useContext } from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon,
    Alert,
    } from "reactstrap";
import {v4} from "uuid";

import { TodoContext } from "../Context/TodoContext";
import {ADD_TODO} from "../Context/action.types"

const TodoForm = () => {

    const [todoString ,setTodoString] = useState("");
    const {dispatch } = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") {
      return alert("Enter a Task");
        }
        
        const todo = {
            todoString,
            id: v4()
            }
        
        dispatch({
            type:ADD_TODO,
            payload:todo,
        })

        setTodoString("");
    };

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"                    
                        id="todo"
                        placeholder = "Enter a task"
                        value = {todoString}
                        onChange = { e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button color="dark">Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
    
};

export default TodoForm;