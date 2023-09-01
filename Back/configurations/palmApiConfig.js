const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyBgwIEIym1m5ea6tY6xhCWeEGCjW2KfmgY";

module.exports = {
    TextServiceClient,
    GoogleAuth,
    MODEL_NAME,
    API_KEY        
}