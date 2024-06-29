import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {ListOfTodos: initialTodosList}

  deleteTodo = UniqueId => {
    this.setState(prevState => ({
      ListOfTodos: prevState.ListOfTodos.filter(x => x.id !== UniqueId),
    }))
  }

  render() {
    const {ListOfTodos} = this.state
    return (
      <div className="cont-1">
        <div className="cont-2">
          <h1 className="header">Simple Todos</h1>
          <ul className="cont-3">
            {ListOfTodos.map(x => (
              <TodoItem
                title={x.title}
                id={x.id}
                key={x.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
