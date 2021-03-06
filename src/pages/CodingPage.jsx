import React, { useEffect, useState, useRef } from "react";
import "./codingpage.css";
// import { saveResponse } from "../services/dbservice.js";
import result from "../api/fetchQuestions.js";
import axios from "axios";
import swal from "@sweetalert/with-react";

// const OptionComponent = (value) => {
//   return (
//     <li className="Option" id="A">
//       <div className="OptionContainer">
//         {" "}
//         <input type="radio" name="answer" id="A" />
//         <h4>{value}</h4>
//       </div>
//     </li>
//   );
// };

export const CodingPage = () => {
  //Logic
  //Get Question From API
  //hard Coded Result.
  const [CurrentQuestion, setCurrentQuestion] = useState(result[0]);
  const [inputArray, setinputArray] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // console.log("UseEffect Called");
      const handleJudgement = () => {
        let x = inputArray[result.indexOf(CurrentQuestion)];
        if (x === undefined) setCurrentInput("");
        else setCurrentInput(x);
        // console.log("Judgement Called ");
      };
      handleJudgement();
      // Your useEffect code here to be run on update
    }
  }, [CurrentQuestion, inputArray]);

  const saveResponse = async (responseData) => {
    swal({
      icon: "info",
      title: "Please Wait...",
      text: "It May Take Sometime.Don't Worry, it wont use your test time.",
    });
    setIsLoading(true);
    await axios
      .post("http://localhost:8080/api/responses", responseData)
      .then((res) => {
        setIsLoading(false);
        console.log(res.status);
        swal({
          icon: "success",
          title: "Test Submitted Successfully!",
          text: "Random Id :" + responseData.id,
        });
        return res;
      })
      .catch((error) => {
        let reason;
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          reason = error;
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error);
          reason = error;
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
          reason = error;
        }
        // console.log(error.response.data);
        swal({
          icon: "error",
          title: reason,
          text: "Random Id :" + responseData.id.toString(),
        });
        setIsLoading(false);
        return error;
      });
  };

  const handleNext = () => {
    if (result.indexOf(CurrentQuestion) < result.length - 1)
      setCurrentQuestion(result[result.indexOf(CurrentQuestion) + 1]);
    setCurrentInput(inputArray[result.indexOf(CurrentQuestion)]);
    // handleJudgement();
  };

  const handlePrev = () => {
    if (result.indexOf(CurrentQuestion) > 0)
      setCurrentQuestion(result[result.indexOf(CurrentQuestion) - 1]);
    setCurrentInput(inputArray[result.indexOf(CurrentQuestion)]);
    // handleJudgement();
  };

  const handleMark = () => {
    let index = result.indexOf(CurrentQuestion);
    console.log(index);
  };

  // const tagClick = () => {};

  const handleSubmit = () => {
    setIsLoading(true);
    let answersheet = [];
    var candidateId = Math.floor(Math.random() * 10000000 + 1);
    for (let i = 0; i < result.length; i++) {
      let temp;
      if (inputArray[i] === undefined) temp = "";
      else temp = inputArray[i];

      answersheet.push({
        question: result[i].data.question,
        answer: temp,
      });
    }

    const responseData = { id: candidateId, answersheet: answersheet };
    saveResponse(responseData);
  };

  // const checkIfAllQuestionsAreSolved = () => {};
  // const handleTextInput = (e) => {
  //   let temp = inputArray
  //   if (temp[result.indexOf(CurrentQuestion)] !== undefined) {
  //     temp[result.indexOf(CurrentQuestion)] += e.key;
  //     setinputArray(temp);
  //   } else {
  //     temp[result.indexOf(CurrentQuestion)] = "";
  //     temp[result.indexOf(CurrentQuestion)] += e.key;
  //     setinputArray(temp);
  //   }
  //   console.log(inputArray[result.indexOf(CurrentQuestion)]);
  // };

  const handleTextInput = (e) => {
    setCurrentInput(e.target.value);
    let tempArray = inputArray;
    tempArray[result.indexOf(CurrentQuestion)] = e.target.value;
    setinputArray(tempArray);
  };

  return (
    <div className="CodingPage">
      <h1 style={{ fontSize: "20px" }}>
        ???? Under Developement : Added MongoDB + SweetAlert ????
      </h1>

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
            <h3>
              Q{result.indexOf(CurrentQuestion) + 1}.{" "}
              {CurrentQuestion && CurrentQuestion.data.question}
            </h3>
          </div>
          <div id="Answer">
            {/* MCQ  */}
            {/* <ol type="A">
              <form>
                {CurrentQuestion.data.answer.map((x) =>
                  // <OptionComponent value={x} />
                  console.log(CurrentQuestion.data.answer)
                )}
              </form>
            </ol> */}

            {/* Single Liner */}
            <div id="textinputcontainer">
              <h4 style={{ marginLeft: "5px" }}>Answer : </h4>
              <textarea
                id="textinput"
                name="roleExplanation"
                rows="2"
                placeholder="Type Answer Here..."
                value={currentInput}
                onChange={handleTextInput}
              ></textarea>
            </div>
          </div>
          <div
            style={{
              width: "70% !important",
              maxWidth: "500px",
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "10px",
            }}
          >
            <div className="Buttoncontainer">
              <button className="Panelbutton" onClick={handlePrev}>
                Prev
              </button>
              <button className="Panelbutton" onClick={handleMark}>
                Mark
              </button>
              <button className="Panelbutton" onClick={handleNext}>
                Next
              </button>
            </div>
            <button
              type="submit"
              id="submit"
              className="Panelbutton"
              onClick={() => {
                setIsLoading(true);
                handleSubmit();
              }}
              disabled={IsLoading}
            >
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
                  key={result.indexOf(x) + 1}
                >
                  <button
                    className="Panelbutton"
                    id="tagbutton"
                    style={{
                      width: "50px",
                      // backgroundColor: "#14b8e0",
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
