const express = require('express');
const { userMiddleware, kidneyMiddleware } = require('./middlewares/middlewares');

const zod = require('zod');

// ZOD INPUT VALIDATION
// Single input validation
// const schema = zod.array(zod.number());

// Object input validation
const schema  = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")), //  = either IN or US
    kidneys:  zod.array(zod.number())
})

const app = express();

app.use(express.json())
// app.use():- it takes middleware as input only and that middleware runs on every request 

app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res)=>{
    res.json('Healthy Heart')
})

app.post('/health-checkup', (req, res)=>{

    console.log(req.body);
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    const kidneyLength = kidneys.length;
    
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        });
        return;
    }

    console.log("your kidney length is "+kidneyLength);
    res.json(response)
})

app.get('/kidney-check', userMiddleware, kidneyMiddleware, (req, res)=>{
    res.json('Kidney is healthy')
})

// GLOBAL-CACHES:- Error handling middleware and It takes 4 args ( err, req, res, next )
app.use( function(err, req, res, next){
    console.log(err);
    res.json({
        msg:"Sorry something is up with our server"
    })
});

app.listen(9000, () => {
    console.log('server running on 9000');
})