import express from 'express';

const Router = express.Router();

Router.get("/", (req, res) => {
        res.json({title: 'hello', content: 'note 1'})
})


export default Router;