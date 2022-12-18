const express = require('express')

const router = express.Router()

const {createAdmin ,loginAdmin} = require('../controller/AdminController')
const {authenticate} = require('../middleware/auth')

const { createOrganization, getOrganization } = require('../controller/OrganizationController')
const { createProperty, getProperty } = require('../controller/PropertyController')
const { createRegion, getRegion } = require('../controller/RegionController')
const { createField ,getField } = require('../controller/FieldController')

const { createCropProperty } = require('../controller/CropPropertyController')
const { createCropField } = require('../controller/CropFieldController')
const { createCrop, getCrop } = require('../controller/CropController')

// POST API 
router.post('/createAdmin', createAdmin)
router.post('/login', loginAdmin)

router.post('/createOrganization',authenticate, createOrganization)
router.post('/createProperty',authenticate, createProperty)
router.post('/createRegion',authenticate, createRegion)
router.post('/createField',authenticate, createField)

router.post('/createCropProperty', createCropProperty)
router.post('/createCropField', createCropField)
router.post('/createCrop', createCrop)


// GET API 
router.get('/getOrganization', getOrganization)
router.get('/getProperty/:organisationId', getProperty)
router.get('/getRegion/:propertyId', getRegion)
router.get('/getField/property/:propertyId/region/:regionId', getField)

router.get('/getCrop', getCrop)

module.exports = router