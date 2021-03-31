// const axios = require("axios");
import axios from "axios";
import swal from "@sweetalert/with-react";

const saveResponse = async (responseData) => {
  swal({
    icon: "info",
    title: "Please Wait...",
  });
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
    .then((res) => {
      console.log(res.status);
      swal({
        icon: "success",
        title: "Test Submitted Successfully!",
        text: "Random Id :" + responseData.id,
      });
      return res;
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the
        // browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      // console.log(error.response.data);
      swal({
        icon: "error",
        title: "Something Wrong Happened",
        text: "Random Id :" + responseData.id.toString(),
      });
      return error;
    });
};
