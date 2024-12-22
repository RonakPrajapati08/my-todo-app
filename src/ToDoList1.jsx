//my own code not help with chat-gpt

// import React, { useState } from "react";

// function ToDoList1() {
//     const [todolist, setTodolist] = useState([]);

//   let saveToDoList = (event) => {
//       let toname = event.target.toname.value;

//       if (!todolist.includes(toname)) {

//           let finelToDolist =[...todolist, toname]
//           setTodolist(finelToDolist);

//       } else {
//           alert("To DO is already exixted")
//     }

//       event.preventDefault();
//       event.target.reset(); // Clear the input field

//     };

//     let list = todolist.map((value, index) => {
//         return (
//             <ToDoListItems value={value} key={index} indexNumber={index}
//                 todolist={todolist}
//                 setTodolist={setTodolist}
//             />
//         )
//     })

//   return (
//     <div className="container">
//       <h1 className="text-center fw-bold">ToDO List</h1>
//       <form  onSubmit={saveToDoList}>
//         <div className="d-flex gap-3">
//           <input
//             type="text"
//             name="toname"
//             className="form-control mt-0"

//             placeholder="Todo list add..."
//             required
//           />

//           <button className="btn btn-primary mt-0 text-nowrap" type="submit">
//             ToDo
//           </button>
//         </div>
//           </form>

//           <div className="d-flex justify-content-center mt-4">
//               <div className="col-md-3">
//                   {list}
//               </div>
//           </div>

//     </div>
//   );
// }

// export default ToDoList1;

// function ToDoListItems({value,indexNumber,todolist,setTodolist}) {

//     let deleteRow = () => {
//         let finalData = todolist.filter((v, i) => i !== indexNumber)
//         setTodolist(finalData);
//     }

//     return (
//         <div className="d-flex justify-content-between gap-3 ">
//             <p>{value}</p>
//             <button onClick={deleteRow} type="button" className="btn-close" aria-label="Close"></button>
//         </div>
//     )
// }

//help with chat-gpt code

// import React, { useState } from "react";
// import "./todo.css";

// function ToDoList1() {
//   const [todolist, setTodolist] = useState([]);
//   const [title, setTitle] = useState("");

//   const saveToDoList = (event) => {
//     event.preventDefault();

//     let toname = event.target.toname.value.trim();

//     if (title && toname) {
//       if (
//         !todolist.some((item) => item.title === title && item.todo === toname)
//       ) {
//         let finalToDoList = [...todolist, { title, todo: toname }];
//         setTodolist(finalToDoList);
//         setTitle("");
//         event.target.reset(); // Clear the input field
//       } else {
//         alert("To-Do is either empty or already exists");
//       }
//     } else {
//       alert("Please enter both Title and To-Do item.");
//     }
//   };

//   const list = todolist.map((item, index) => (
//     <ToDoListItems
//       value={item.todo}
//       title={item.title}
//       key={index}
//       indexNumber={index}
//       todolist={todolist}
//       setTodolist={setTodolist}
//     />
//   ));

//   return (
//     <div className="container bg-light py-5" style={{ minHeight: "100vh" }}>
//       <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
//         <div className="card-header text-white text-center" style={{backgroundColor: "#9395D3"}}>
//           <h2 className="fw-bold">TODO APP</h2>
//         </div>
//         <div className="card-body" style={{ backgroundColor: "#d1d2e93b" }}>
//           <form
//             className="form-container"
//             onSubmit={saveToDoList}
//             style={{
//               width: "100%",
//               maxWidth: "400px",
//               margin: "0 auto",
//               padding: "20px",
//               background: "#FFFFFF",
//               borderRadius: "15px",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <div style={{ marginBottom: "15px" }}>
//               <input
//                 type="text"
//                 name="title"
//                 className="form-control"
//                 placeholder="Title"
//                 required
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "5px",
//                   border: "1px solid #ccc",
//                   marginBottom: "10px",
//                   fontSize: "16px",
//                 }}
//               />
//             </div>
//             <div style={{ marginBottom: "15px" }}>
//               <input
//                 type="text"
//                 name="toname"
//                 className="form-control"
//                 placeholder="Detail"
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "5px",
//                   border: "1px solid #ccc",
//                   fontSize: "16px",
//                 }}
//               />
//             </div>
//             <button
//               className="btn"
//               type="submit"
//               style={{
//                 display: "block",
//                 width: "100%",
//                 padding: "10px",
//                 background: "#a39fda",
//                 color: "#FFFFFF",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 borderRadius: "8px",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               ADD TODO
//             </button>
//           </form>

//           <div className="list-group mt-3">{list}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ToDoList1;

// function ToDoListItems({ value, title, indexNumber, todolist, setTodolist }) {
//   const deleteRow = () => {
//     let finalData = todolist.filter((v, i) => i !== indexNumber);
//     setTodolist(finalData);
//   };

//   return (
//     <div
//       className="todo-item d-flex justify-content-between align-items-center p-3 shadow-sm"
//       style={{
//         background: "#FFFFFF",
//         borderRadius: "15px",
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.95)",
//         marginBottom: "15px",
//       }}
//     >
//       <div>
//         <h4 className="fw-bold text-primary mb-1" style={{ fontSize: "18px" }}>
//           {title.toUpperCase()}
//         </h4>
//         <p className="fs-6 text-muted mb-0" style={{ fontSize: "14px" }}>
//           {value}
//         </p>
//       </div>
//       <div className="d-flex gap-2">
//         <button
//           type="button"
//           className="btn btn-light btn-sm"
//           style={{
//             border: "none",
//             color: "#A39FDA",
//             fontSize: "18px",
//           }}
//         >
//           <i className="fas fa-edit"></i>
//         </button>
//         <button
//           onClick={deleteRow}
//           type="button"
//           className="btn btn-light btn-sm"
//           style={{
//             border: "none",
//             color: "#A39FDA",
//             fontSize: "18px",
//           }}
//         >
//           <i className="fas fa-trash"></i>
//         </button>
//       </div>
//     </div>
//   );
// }

//this code is without store in localstorage

// import React, { useState } from "react";
// import "./todo.css";

// function ToDoList1() {
//   const [todolist, setTodolist] = useState([]);
//   const [title, setTitle] = useState("");
//   const [toname, setToname] = useState(""); // State for the "Detail" field
//   const [editingIndex, setEditingIndex] = useState(null); // Track editing index

//   const saveToDoList = (event) => {
//     event.preventDefault();

//     if (title && toname) {
//       if (editingIndex !== null) {
//         // Update the to-do if editing
//         const updatedList = [...todolist];
//         updatedList[editingIndex] = { title, todo: toname };
//         setTodolist(updatedList);
//         setEditingIndex(null); // Reset editing state
//       } else {
//         // Add new to-do
//         if (
//           !todolist.some((item) => item.title === title && item.todo === toname)
//         ) {
//           let finalToDoList = [...todolist, { title, todo: toname }];
//           setTodolist(finalToDoList);
//         } else {
//           alert("To-Do is either empty or already exists");
//         }
//       }
//       setTitle("");
//       setToname("");
//       event.target.reset(); // Clear the input field
//     } else {
//       alert("Please enter both Title and To-Do item.");
//     }
//   };

//   const handleEdit = (index) => {
//     const itemToEdit = todolist[index];
//     setTitle(itemToEdit.title); // Set the title in the input field
//     setToname(itemToEdit.todo); // Set the detail in the input field
//     setEditingIndex(index); // Set the editing index
//   };

//   const handleCancel = () => {
//     // Cancel the editing operation
//     setTitle("");
//     setToname("");
//     setEditingIndex(null);
//   };

//   const list = todolist.map((item, index) => (
//     <ToDoListItems
//       value={item.todo}
//       title={item.title}
//       key={index}
//       indexNumber={index}
//       todolist={todolist}
//       setTodolist={setTodolist}
//       handleEdit={handleEdit}
//     />
//   ));

//   return (
//     <div className="container bg-light py-5" style={{ minHeight: "100vh" }}>
//       <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
//         <div
//           className="card-header text-white text-center"
//           style={{ backgroundColor: "#9395D3" }}
//         >
//           <h2 className="fw-bold">TODO APP</h2>
//         </div>
//         <div className="card-body" style={{ backgroundColor: "#d1d2e93b" }}>
//           <form
//             className="form-container"
//             onSubmit={saveToDoList}
//             style={{
//               width: "100%",
//               maxWidth: "400px",
//               margin: "0 auto",
//               padding: "20px",
//               background: "#FFFFFF",
//               borderRadius: "15px",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <div style={{ marginBottom: "15px" }}>
//               <input
//                 type="text"
//                 name="title"
//                 className="form-control"
//                 placeholder="Title"
//                 required
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "5px",
//                   border: "1px solid #ccc",
//                   marginBottom: "10px",
//                   fontSize: "16px",
//                 }}
//               />
//             </div>
//             <div style={{ marginBottom: "15px" }}>
//               <input
//                 type="text"
//                 name="toname"
//                 className="form-control"
//                 placeholder="Detail"
//                 required
//                 value={toname}
//                 onChange={(e) => setToname(e.target.value)}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "5px",
//                   border: "1px solid #ccc",
//                   fontSize: "16px",
//                 }}
//               />
//             </div>
//             <div style={{ display: "flex", gap: "10px" }}>
//               <button
//                 className="btn"
//                 type="submit"
//                 style={{
//                   flex: 1,
//                   padding: "10px",
//                   background: "#a39fda",
//                   color: "#FFFFFF",
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   borderRadius: "8px",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 {editingIndex !== null ? "Update TODO" : "ADD TODO"}
//               </button>
//               {editingIndex !== null && (
//                 <button
//                   type="button"
//                   onClick={handleCancel}
//                   style={{
//                     flex: 1,
//                     padding: "10px",
//                     background: "#FF6B6B",
//                     color: "#FFFFFF",
//                     fontSize: "16px",
//                     fontWeight: "bold",
//                     borderRadius: "8px",
//                     border: "none",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>

//           <div className="list-group mt-3">{list}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ToDoList1;

// function ToDoListItems({
//   value,
//   title,
//   indexNumber,
//   todolist,
//   setTodolist,
//   handleEdit,
// }) {
//   const deleteRow = () => {
//     let finalData = todolist.filter((v, i) => i !== indexNumber);
//     setTodolist(finalData);
//   };

//   return (
//     <div
//       className="todo-item d-flex justify-content-between align-items-center p-3 shadow-sm"
//       style={{
//         background: "#FFFFFF",
//         borderRadius: "15px",
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.95)",
//         marginBottom: "15px",
//       }}
//     >
//       <div>
//         <h4 className="fw-bold text-primary mb-1" style={{ fontSize: "18px" }}>
//           {title.toUpperCase()}
//         </h4>
//         <p className="fs-6 text-muted mb-0" style={{ fontSize: "14px" }}>
//           {value}
//         </p>
//       </div>
//       <div className="d-flex gap-2">
//         <button
//           onClick={() => handleEdit(indexNumber)}
//           type="button"
//           className="btn btn-light btn-sm"
//           style={{
//             border: "none",
//             color: "#A39FDA",
//             fontSize: "18px",
//           }}
//         >
//           <i className="fas fa-edit"></i>
//         </button>
//         <button
//           onClick={deleteRow}
//           type="button"
//           className="btn btn-light btn-sm"
//           style={{
//             border: "none",
//             color: "#A39FDA",
//             fontSize: "18px",
//           }}
//         >
//           <i className="fas fa-trash"></i>
//         </button>
//       </div>
//     </div>
//   );
// }


//this code is with store in localstorage 

import React, { useState, useEffect } from "react";
import "./todo.css";

function ToDoList1() {
  const [todolist, setTodolist] = useState([]);
  const [title, setTitle] = useState("");
  const [toname, setToname] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedTodolist = localStorage.getItem("todolist");
    if (savedTodolist) {
      setTodolist(JSON.parse(savedTodolist)); // Parse and load the saved data
    }
  }, []);

  // Save data to localStorage whenever todolist changes
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist)); // Save current to-do list
  }, [todolist]);

  const saveToDoList = (event) => {
    event.preventDefault();

    if (title && toname) {
      if (editingIndex !== null) {
        // Update the item if editing
        const updatedList = [...todolist];
        updatedList[editingIndex] = { title, todo: toname, completed: false };
        setTodolist(updatedList);
        setEditingIndex(null);
      } else {
        // Add a new to-do
        if (
          !todolist.some((item) => item.title === title && item.todo === toname)
        ) {
          const finalToDoList = [
            ...todolist,
            { title, todo: toname, completed: false },
          ];
          setTodolist(finalToDoList);
        } else {
          alert("To-Do is either empty or already exists");
        }
      }
      setTitle("");
      setToname("");
      event.target.reset();
    } else {
      alert("Please enter both Title and To-Do item.");
    }
  };

  const handleEdit = (index) => {
    const itemToEdit = todolist[index];
    setTitle(itemToEdit.title);
    setToname(itemToEdit.todo);
    setEditingIndex(index);
  };

  const handleCancel = () => {
    setTitle("");
    setToname("");
    setEditingIndex(null);
  };

  const toggleCompleted = (index) => {
    const updatedList = [...todolist];
    updatedList[index].completed = !updatedList[index].completed;
    setTodolist(updatedList);
  };

  const list = todolist.map((item, index) => (
    <ToDoListItems
      key={index}
      indexNumber={index}
      title={item.title}
      value={item.todo}
      completed={item.completed}
      todolist={todolist}
      setTodolist={setTodolist}
      handleEdit={handleEdit}
      toggleCompleted={toggleCompleted}
    />
  ));

  return (
    <div className="container bg-light py-5" style={{ minHeight: "100vh" }}>
      <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
        <div
          className="card-header text-white text-center"
          style={{ backgroundColor: "#9395D3" }}
        >
          <h2 className="fw-bold">TODO APP</h2>
        </div>
        <div className="card-body" style={{ backgroundColor: "#d1d2e93b" }}>
          <form
            className="form-container"
            onSubmit={saveToDoList}
            style={{
              width: "100%",
              maxWidth: "400px",
              margin: "0 auto",
              padding: "20px",
              background: "#FFFFFF",
              borderRadius: "15px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginBottom: "10px",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                name="toname"
                className="form-control"
                placeholder="Detail"
                required
                value={toname}
                onChange={(e) => setToname(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                className="btn"
                type="submit"
                style={{
                  flex: 1,
                  padding: "10px",
                  background: "#a39fda",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {editingIndex !== null ? "Update TODO" : "ADD TODO"}
              </button>
              {editingIndex !== null && (
                <button
                  type="button"
                  onClick={handleCancel}
                  style={{
                    flex: 1,
                    padding: "10px",
                    background: "#FF6B6B",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="list-group mt-3">{list}</div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList1;

function ToDoListItems({
  value,
  title,
  completed,
  indexNumber,
  toggleCompleted,
  todolist,
  setTodolist,
  handleEdit,
}) {
  const deleteRow = () => {
    const finalData = todolist.filter((v, i) => i !== indexNumber);
    setTodolist(finalData);
  };

  return (
    <div
      className="todo-item d-flex justify-content-between align-items-center p-3 shadow-sm"
      style={{
        background: completed ? "#d4edda" : "#FFFFFF",
        borderRadius: "15px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.95)",
        marginBottom: "15px",
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(indexNumber)}
          style={{ marginRight: "10px" }}
        />
        <div>
          <h4
            className="fw-bold text-primary mb-1"
            style={{ fontSize: "18px" }}
          >
            {title.toUpperCase()}
          </h4>
          <p className="fs-6 text-muted mb-0" style={{ fontSize: "14px" }}>
            {value}
          </p>
        </div>
      </div>
      <div className="d-flex gap-2">
        <button
          onClick={() => handleEdit(indexNumber)}
          type="button"
          className="btn btn-light btn-sm"
          style={{
            border: "none",
            color: "#A39FDA",
            fontSize: "18px",
          }}
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          onClick={deleteRow}
          type="button"
          className="btn btn-light btn-sm"
          style={{
            border: "none",
            color: "#A39FDA",
            fontSize: "18px",
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
