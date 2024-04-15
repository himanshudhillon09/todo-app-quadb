import {useSelector,useDispatch} from 'react-redux';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { removeTodo } from '../redux/todoSlice';



function ViewTasks() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <div className='viewTask'>
    <div className='todoHeading'>TODOS-LIST</div>
    <ul className="list">
        {todos.map((todo) => (
          <li
            className="item"
            key={todo.id}
          >
            <div className='todo-item'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="removeButton"
            >
             <RemoveCircleOutlineIcon className='deleteIcon'/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewTasks;