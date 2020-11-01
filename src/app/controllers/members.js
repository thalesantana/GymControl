const { age, date} = require('../../lib/utils')

module.exports = {
    index(req,res){
        
        return res.render("members/index")   
    },
    create(req,res){
        return res.render("members/create")
    },
    post(req,res){
        const keys= Object.keys(req.body) // retorna chave de todos vetores
        
        for(key of keys){
            //req.body.key == ""
            if(req.body[key] == ""){ // Verifica se tem campos vazios
                return res.send("Por favor, preencha todos os campos!")
            }
        }

        return
    },
    show(req,res){
        return
    },
    edit(req,res){
        return
    },
    put(req,res){
        const keys= Object.keys(req.body) // retorna chave de todos vetores
        
        for(key of keys){
            //req.body.key == ""
            if(req.body[key] == ""){ // Verifica se tem campos vazios
                return res.send("Por favor, preencha todos os campos!")
            }
        }
    },
    delete(req, res){
        return
    },
}