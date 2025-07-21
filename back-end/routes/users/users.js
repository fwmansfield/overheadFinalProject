import express from "express";
const router = express.Router();

router.get('/', async (req, res) => {
    res.send("GET called");    
});

router.post('/', async (req, res) => {
    res.send("POST called");  
});

router.delete('/', async (req, res) => {
    res.send("DELETE called");  
}); 

export default router;