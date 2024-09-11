import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";
import { useState } from "react";
import bgImage from "./assets/image/bgImage.jpg";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  const handleEditClick = (id) => {
    setEditTaskId(id);
    setEditMode(true);
  };

  const handleEditCancel = () => {
    setEditMode(false);
    setEditTaskId(null);
  };
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.5),       
            rgba(0, 0, 0, 0.5)       
          ), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md">
          <AddTodo
            editMode={editMode}
            editTaskId={editTaskId}
            setEditMode={setEditMode}
            handleEditCancel={handleEditCancel}
          />
          <Todo handleEditClick={handleEditClick} />
        </div>
      </div>
    </>
  );
}

export default App;
