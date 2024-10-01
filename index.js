const express = require("express")
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000
mongoose.connect('mongodb+srv://camiskrets:PPrFt3A6yu72tAU1@atividade2api.lfnxk.mongodb.net/?retryWrites=true&w=majority&appName=atividade2api');

const Valorant = mongoose.model('Valorant', { 
    title: String,
description: String,
image_url: String,
trailer_url: String
});

app.get("/", async (req, res) => {
    const valorant = await Valorant.find()
  return res.send(Valorant)  
})

app.delete("/:id", async(req, res) => {
    const film = await Valorant.findByIdAndRemove(req.params.id)
   return res.send(valorant)
})

app.put("/:id", async(req, res) => {
    const film = await Valorant.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    }, {
        new: true
    } )

    return res.send(valorant)
})

app.post("/", async (req, res) => {
    const valorant = new Valorant({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    })

    await valorant.save()
    return res.send(valorant)
})

app.listen(port, () =>{
    mongoose.connect('mongodb+srv://camiskrets:PPrFt3A6yu72tAU1@atividade2api.lfnxk.mongodb.net/?retryWrites=true&w=majority&appName=atividade2api');
    console.log('App running')
})