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
            <h3>How Python Code is Executed</h3>
          </div>
          <div id="Answer">
            <ol type="A">
              <li>
                <h4>Interpreters</h4>{" "}
              </li>
              <li>
                <h4>Compilers</h4>
              </li>
              <li>
                <h4>Engines</h4>
              </li>
              <li>
                <h4>None Of These</h4>
              </li>
            </ol>
          </div>
          <div className="Buttoncontainer">
            <button className="Panelbutton">Prev</button>
            <button className="Panelbutton">Mark</button>
            <button className="Panelbutton">Next</button>
          </div>
        </div>
        <div id="Rightcontainer" className="Panelcontainer">
          <div>Cam and Info</div>
          <div>Other Panel</div>
        </div>
      </div>
    </div>
  );
};
