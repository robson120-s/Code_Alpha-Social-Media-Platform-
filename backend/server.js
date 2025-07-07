const exp= require('express');

const app=exp();

app.get('/',(req,res) => {
    res.send("the Media platform server running");
});

app.listen(3003, () => {
    console.log('Server is Running on Port 3003')
})