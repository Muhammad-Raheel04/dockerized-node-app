import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hello",
    })
})
app.listen(1234,'0.0.0.0',()=>{
    console.log(`app listening at http://localhost:1234`);
})