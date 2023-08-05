const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const {username} = req.body;
  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "e7a8bf36-5067-464c-b63f-ff5204a15c97" } }
    );
      return res.status(r.status).json(r.data);
  }
  
  catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
    
});

app.listen(3001);
// Project ID:
// 0aa493cb-5b03-4b82-a8b0-325ef4393497 
// Private Key:
// e7a8bf36-5067-464c-b63f-ff5204a15c97 