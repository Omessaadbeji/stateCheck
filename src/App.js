import React, { useState } from "react";
import "./App.css";
import DisplayPeople from "./components/DisplayPeople";
import Modal from "./components/Modal";
import myImage from "./profile.png";
function App() {
  const [show, setShow] = useState(false);
  const [peoples, setPeoples] = useState([]);
  const [people, setPeople] = useState({ name: "", image: "" });
  return (
    <div className="app">
      <div className="exemple3">
        <button  onClick={() => setShow(true)}>Click to Show</button>
        {show && (
          <Modal title="Profile" setShow={setShow}>
            <img width="300px" src={myImage} alt="profile" />,
            <div>
              <h1>FullName: "Omessaad ELBEJI"</h1>
              <h1>
                Bio: "I'm an electrical engineerin, I'm passionate with web
                developpement"
              </h1>
              <h1>Profession: "Ingeneer",</h1>
            </div>
          </Modal>
        )}
      </div>
      <div className="finalExemple">
        <div className="form">
          <input
            type="text"
            value={people.name}
            placeholder="write your name"
            onChange={(e) => setPeople({ ...people, name: e.target.value })}
          />
          <input
            type="text"
            value={people.image}
            placeholder="your image"
            onChange={(e) => setPeople({ ...people, image: e.target.value })}
          />
          <button
            onClick={() => {
              if (!people.name.length || !people.image.length) {
                alert("fill the form");
              } else {
                setPeoples([people, ...peoples]);
                setPeople({ name: "", image: "" });
              }
            }}
          >
            Submit
          </button>
        </div>
        <DisplayPeople peoples={peoples} />
      </div>
    </div>
  );
}

export default App;
