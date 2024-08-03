const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get('/calculateInterest', (req,res)=>{
    const principal = parseInt(req.query.p);
    const rate = parseFloat(req.query.r);
    const time = parseFloat(req.query.t);
    
    
    const ans = principal*rate*time
    res.send(ans.toString());
})

app.listen(3000);