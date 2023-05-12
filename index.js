const express= require('express');
const exphbs = require('express-handlebars')
const app=express();
const hbs= exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
    const posts=[{
        title: "Senhor dos Aneis",
        category: "Fantasia",
        body: "Teste",
        comments:4
    },
    {
        title: "A cabana",
        category: "Contos",
        body: "Teste",
        comments:4
    },
    {
        title: "A anatomia do estado",
        category: "Politica",
        body: "Teste",
        comments:4
    }
      ];
    res.render('home',{posts})
})



app.listen(5000,()=>{
    console.log("app funcionando")
})