import './index.css'

const TodoItem = props => {
  const {title, id, deleteTodo} = props
  const helperDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="cont-4">
      <p className="sometext">{title}</p>
      <button className="deleteButton" type="button" onClick={helperDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
