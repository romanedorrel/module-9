'use strict'
const axios = require('axios'); 
const API_URL = 'https://kitsu.io/api/edge/anime';

const getData = async(req,res) => {
try {
    const {id} = req.params || 1;
    const response = await axios.get(`${API_URL}/${id}`);
    res.status(200).json(response.data);
}catch(error){
    res.status(500).json({message: 'Error fetching posts', error: error.message});
}
}

const updateData = async (req,res) => {
try{
    const {id}=req.query;
    const response = await axios.put(`${API_URL}/${id}`, req.body)
    res.status(200).json(response.data);
}catch(error){
    res.status(500).json({message: 'Error updating posts', error: error.message});
}
}

module.exports = {
    getData, updateData
}