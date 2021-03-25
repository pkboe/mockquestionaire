import React from "react";
import "./codingpage.css";

export const CodingPage = () => {
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
            <button type="submit" className="Panelbutton">
              Submit
            </button>
          </div>
        </div>
        <div id="Rightcontainer" className="Panelcontainer">
          <div id="info">Cam and Info</div>
          <div id="questionpanel">Other Panel</div>
        </div>
      </div>
    </div>
  );
};
