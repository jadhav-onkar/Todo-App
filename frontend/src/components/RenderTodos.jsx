
import axios from 'axios'


export default function RenderTodo({ todoId, td, completed, refreshtodos }) {
  const handleOnClick = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    try {
      await axios.put(`${import.meta.env.VITE_TODO_URL}/todo`, {
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
      await axios.delete(`${import.meta.env.VITE_TODO_URL}/todo`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            id: todoId
        }
      })
      refreshtodos(); 
    } catch (e) {
      console.error(e);
      alert("Error deleting todo");
    }
  };

  return (
    <div className={`${completed ? 'bg-[#21284A]' : 'bg-red-400' } flex justify-between mx-auto mb-2 rounded-md w-[350px] sm:w-[600px] p-2`}>
          <div className='text-white font-semibold'>{td}</div>
          <div>
              <button className='text-gray-300 mr-2 bg-[#444c74] hover:bg-[#363d5c] p-1 rounded-lg' onClick={handleOnClick}>{completed ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>}
              </button>
              <button className='text-gray-300 mr-2 bg-[#444c74] hover:bg-[#363d5c] p-1 rounded-lg' onClick={deleteonetodo}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
            </button>
          </div>
    </div>
  );
}
