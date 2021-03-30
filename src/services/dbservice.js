// const axios = require("axios");
import axios from "axios";

const saveResponse = async (responseData) => {
  // const responseData = {
  //   id: "fdsfsdvvdsfsdff",
  //   answersheet: [
  //     {
  //       question: "what is mean by a class ?",
  //       answer: "Blueprint",
  //     },
  //   ],
  // };
  await axios
    .post("http://localhost:8080/api/responses", responseData)
    .catch((err) => {
      console.error(err.status);
      return false;
    })
    .then((res) => {
      console.log(res.status);
      return true;
    });
};

export { saveResponse };
