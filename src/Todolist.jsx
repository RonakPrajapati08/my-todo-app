// import React, { useState } from 'react'

// function Todolist() {

//     const [activity, setActivity] = useState("")
//     const [listData, setlistData] = useState([])

//     function addActivity(){
//         // setlistData([...listData, activity])
//         // console.log(listData);
//         setlistData((listData) => {
//             const updateList = [...listData, activity]
//             console.log(updateList);
//             return updateList
//         });
//     setActivity('');
//     }

//     function removeActivity(i){
//         const updatelistData = listData.filter((elem, id)=>{
//             return i!==id;
//         })

//         setlistData(updatelistData);
//     }

//     function removeAll(){
//         setlistData([])
//     }

//   return (
//     <>
//     <div className='container'>
//         <div className='header'>TODO LIST</div>
//         <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
//         <button onClick={addActivity}>Add</button>
//         <p className='list-heading'>Here is your list: {""}</p>

//         {
//             listData!=[] && listData.map((data, i)=>{
//                 return(
                
//                     <div key={i}>
//                             <p className='listData'>{data}</p>
//                             <div className='btn'>
//                                 <button onClick={()=>removeActivity(i)}>remove</button>
//                             </div>
//                     </div>
                
//                 )
//             })
//         }

//         {
//             listData.length>=1 &&
//             <button onClick={removeAll}>Remove All</button>
//         }
//     </div>
//     </>
//   )
// }

// export default Todolist


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  const [search, setSearch] = useState("");

  // Load todos from local storage on initial render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setlistData(savedTodos);
  }, []);

  // Save todos to local storage whenever listData changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listData));
  }, [listData]);

  // Add a new activity
  function addActivity() {
    if (activity.trim() === "") return; // Avoid adding empty activity
    const newActivity = { activity, completed: false };
    setlistData([...listData, newActivity]);
    setActivity("");
  }

  // Remove a specific activity
  function removeActivity(index) {
    const updatedList = listData.filter((_, i) => i !== index);
    setlistData(updatedList);
  }

  // Edit an activity
  function editActivity(index) {
    const updatedValue = prompt("Edit your activity:", listData[index].activity);
    if (updatedValue) {
      const updatedList = listData.map((item, i) =>
        i === index ? { ...item, activity: updatedValue } : item
      );
      setlistData(updatedList);
    }
  }

  // Toggle complete/incomplete status
  function toggleComplete(index) {
    const updatedList = listData.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setlistData(updatedList);
  }

  // Remove all activities
  function removeAll() {
    setlistData([]);
  }

  // Filter list by search query
  const filteredList = listData.filter((todo) =>
    todo.activity.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Todo List</h1>

      {/* Input Field */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addActivity}>
          Add
        </button>
      </div>

      {/* Search Field */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Todo List */}
      <div>
        {filteredList.length > 0 ? (
          filteredList.map((data, i) => (
            <div
              key={i}
              className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded"
              style={{
                backgroundColor: data.completed ? "#d4edda" : "#f8d7da",
              }}
            >
              <div>
                <span
                  className={`me-2 ${
                    data.completed ? "text-decoration-line-through" : ""
                  }`}
                  onClick={() => toggleComplete(i)}
                  style={{ cursor: "pointer" }}
                >
                  {data.activity}
                </span>
              </div>
              <div>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => editActivity(i)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeActivity(i)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-secondary">No activities found.</p>
        )}
      </div>

      {/* Remove All Button */}
      {listData.length > 0 && (
        <button className="btn btn-danger mt-3 w-100" onClick={removeAll}>
          Remove All
        </button>
      )}
    </div>
  );
}

export default Todolist;
