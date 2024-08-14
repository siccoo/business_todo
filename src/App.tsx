import './App.css';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
};

export default App;
