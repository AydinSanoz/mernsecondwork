const express = require('express')
const router = express.Router()

// end point /api/category

router.post('/addCategory' , categoryController.addcategory)

router.get('/getCategory/:id', categoryController.getCategory)

router.post('/updateCategory/:id' , categoryController.updateCategory)

router.get('/deleteCategory', categoryController.deleteCategory)

router.get('/', categoryController.getAllCategories)