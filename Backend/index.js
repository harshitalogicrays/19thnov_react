import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SK)

const port  =  process.env.PORT || 2000

const app =  express()
app.use(cors())
app.use(express.json())
//http://localhost:1000 
app.get('/' , (req,res) => {
    res.send("hello from server")
})
//http://localhost:1000/create-payment-intent
app.post('/create-payment-intent' ,async(req,res)=>{
    // console.log(req.body)
    try{
        const paymentIntents = await stripe.paymentIntents.create({
            amount:req.body.amount*100, 
            currency:"usd",
            payment_method_types:['card']
        })
        res.status(200).json({clientSecret :  paymentIntents.client_secret})
    }   
    catch(err){
        res.status(400).json({messge:err.message})
    }
})

app.listen(port , ()=>console.log(`server started at http://localhost:${port}`))