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

router.get('/search/:id', async (req , res)=> {
    try {
        const { id } = req.params 
        const { name } = req.query
        const dataApi = await axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/${id}?name=${name}`,
            });
        return res.status(200).json(dataApi.data)
    } catch (err) {
        return res.status(200).send({err: 'There is nothing here'})
    }
})



module.exports = router