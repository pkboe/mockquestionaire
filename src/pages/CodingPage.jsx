import React from "react";
import "./codingpage.css";
import result from "../api/fetchQuestions.js";

export const CodingPage = () => {
  //Logic
  //Get Question From API
  //hard Coded Result.
  const handleNext = () => {};

  const handlePrev = () => {};

  const handleMark = () => {};

  const tagClick = () => {};

  const handleSubmit = () => {};

  const checkIfAllQuestionsAreSolved = () => {};

  return (
    <div className="CodingPage">
      <div
        id="Appbar"
        style={{
          textAlign: "left",
          width: "100%",
        }}
      >
        <h2 style={{ marginLeft: "15px" }}>Coding Section - B</h2>
      </div>
      <div id="Pagecontainer">
        <div id="Leftcontainer" className="Panelcontainer">
          <div id="Question">
            <h3>Q{1}.How Python Code is Executed</h3>
          </div>
          <div id="Answer">
            <ol type="A">
              <form>
                <li className="Option" id="A">
                  <div className="OptionContainer">
                    {" "}
                    <input type="radio" name="answer" id="A" />
                    <h4>Interpreters</h4>
                  </div>
                </li>
                <li className="Option" id="B">
                  <div className="OptionContainer">
                    {" "}
                    <input type="radio" name="answer" id="B" />
                    <h4>Compilers</h4>
                  </div>
                </li>
                <li className="Option" id="C">
                  <div className="OptionContainer">
                    <input type="radio" name="answer" id="C" />
                    <h4>Engines</h4>
                  </div>
                </li>
                <li className="Option" id="D">
                  <div className="OptionContainer">
                    <input type="radio" name="answer" id="D" />
                    <h4>None Of These</h4>
                  </div>
                </li>
              </form>
            </ol>
          </div>
          <div
            style={{
              width: "70% !important",
              maxWidth: "500px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div className="Buttoncontainer">
              <button className="Panelbutton">Prev</button>
              <button className="Panelbutton">Mark</button>
              <button className="Panelbutton">Next</button>
            </div>
            <button type="submit" id="submit" className="Panelbutton">
              Submit
            </button>
          </div>
        </div>
        <div id="Rightcontainer" className="Panelcontainer">
          <div id="info">Cam and Info</div>
          <div id="questionpanel">
            <div className="grid-container">
              {result.map((x) => (
                <div
                  className="grid-item"
                  style={{ backgroundColor: "transparent" }}
                >
                  <button
                    className="Panelbutton"
                    id="tagButton"
                    style={{
                      width: "50px",
                      backgroundColor: "#14b8e0",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      outline: "none",
                    }}
                  >
                    {result.indexOf(x) + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
