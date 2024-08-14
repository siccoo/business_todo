import './App.css';
import TodoForm from './components/TodoForm';

const App: React.FC = () => {
  return (
    <div className="todo-app">
      <h1>Business Consult Todo App</h1>
      <TodoForm />
    </div>
  );
}

export default App;
