const router = require('express').Router()
const axios = require("axios");



router.get('/:id', async (req , res)=> {
    try {
        const { id } = req.params 
        const { page } = req.query
        const dataApi = await axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/${id}?page=${page || '1'}`,
          });
        return res.status(200).json(dataApi.data)
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})



router.get('/search', async (req , res)=>{
    // const { img } = req.body
    // const user = users.find(u=> u.username == req.session.username )

    // if(!img){
    //     return res.status(400).send({err:"img is required"})
    // }

    // user.img = img
    // res.send({msg:'cool pic!'})
})


module.exports = router