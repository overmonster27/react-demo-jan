import {useEffect, useState} from "react";
import {axiosService, todosService} from "../../services";
import {Todo} from "../Todo/Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        todosService.getAll().then(({data})=>setTodos([...data]))
    },[])

 return (
  <div className='Wrap'>
      {todos.map(todo=> <Todo key={todo.id} todo={todo}/>)}
  </div>
 );
};

export {Todos};