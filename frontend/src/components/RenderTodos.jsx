
import axios from 'axios'

export default function RenderTodo({ todoId, td, completed, refreshtodos }) {
  const handleOnClick = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    try {
      await axios.put("http://localhost:3000/api/v1/todo", {
        id: todoId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      refreshtodos(); 
    } catch (e) {
      console.error(e);
      alert("Error updating todo");
    }
  };

  const deleteonetodo = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    try {
      await axios.delete("http://localhost:3000/api/v1/todo",{
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            id: todoId
        }
      })
      alert("todo deleted")
      refreshtodos(); 
    } catch (e) {
      console.error(e);
      alert("Error deleting todo");
    }
  };

  

  return (
    <div>
      <div>{td}</div>
      <button onClick={handleOnClick}>
        {completed ? "completed" : "not completed"}
      </button>
      <button onClick={deleteonetodo}>delete todo</button>
    </div>
  );
}
