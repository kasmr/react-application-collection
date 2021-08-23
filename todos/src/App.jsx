import './App.css';

import TodoList from './TodoList';

function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        <h1>Todo list!</h1>
        <p>Do it now you lazy...</p>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
