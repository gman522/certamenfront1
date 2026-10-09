
import { useState } from "react";
import AppHeader from "./components/AppHeader";
import WarriorForm from "./components/WarriorForm";
import WarriorTable from "./components/WarriorTable";
import "./App.css";

function App() {
  const [warriors, setWarriors] = useState([]);

  const handleAddWarrior = (warrior) => {
    setWarriors((previousWarriors) => [
      ...previousWarriors,
      { ...warrior, id: crypto.randomUUID() },
    ]);
  };

  const handleDeleteWarrior = (id) => {
    setWarriors((previousWarriors) =>
      previousWarriors.filter((warrior) => warrior.id !== id)
    );
  };

  return (
    <>
      <AppHeader />

      <main className="container py-4">
        <h1 className="text-center mb-4">Ejército de Mordor</h1>

        <div className="row g-4">
          <section className="col-12">
            <WarriorForm onAddWarrior={handleAddWarrior} />
          </section>

          <section className="col-12">
            <WarriorTable
              warriors={warriors}
              onDeleteWarrior={handleDeleteWarrior}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
