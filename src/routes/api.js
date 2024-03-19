const express =require('express')
const router = express.Router()

const {GetAllCategory, GetSubCategory, GetDua} = require('../controllers/DuaController')

// Routing endpoints for the application
router.get('/categories', GetAllCategory)
router.get('/sub_cat/:categoryId', GetSubCategory)
router.get('/dua/:categoryId', GetDua)

module.exports = router;
