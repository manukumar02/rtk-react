import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchTodos } from './redux/slices/todo';

function App() {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todo);
  console.log({ todos });

  if (todos.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
        <div>
          {todos.data &&
            todos.data.map((todo) => {
              return (
                <div key={todo.id}>
                  <h4>{todo.title}</h4>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
