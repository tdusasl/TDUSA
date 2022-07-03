import { useState } from "react";
import Modal from "react-modal";
import ".//Results.css";

const Results = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "500px",
      width: "500px",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>Results works</h1>
      <button onClick={() => setIsOpen(true)}>open</button>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <form>
          <input type="text" name="firstName" defaultValue={"Hello"} />
        </form>
      </Modal>
    </div>
  );
};

export default Results;
