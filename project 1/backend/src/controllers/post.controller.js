const express = require("express")
const postModel = require("../models/post.model")
const uploadFile = require("../services/storage.service")


async function CreatePost(req,res){

    const result =await  uploadFile(req.file.buffer)
    console.log(result)

    const post = await postModel.create({
        image: req.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "post created sucessfully",
        post
    })
}



async function  GetPost(req,res){
    const posts = await postModel.find()

    res.status(200).json({
        message: "post fetch sucessfully",
        posts
    })
}

module.exports = {CreatePost,GetPost}