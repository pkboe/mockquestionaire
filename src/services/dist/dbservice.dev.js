"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var saveResponse = function saveResponse(response) {
  /*
  {
   }
  */
  _axios["default"].post("http://localhost:8080/api/responses", response);
};