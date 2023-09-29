import express from 'express';

const router = express.Router()

// Community
import CommunityByIdController from '../controllers/CommunityById.controller.js'
import CommunityCreateController from '../controllers/CommunityCreate.controller.js'
import CommunityDeleteController from '../controllers/CommunityDeleteById.controller.js'
import CommunitySearchController from '../controllers/CommunitySearch.controller.js'
import CommunityUpdateController from '../controllers/CommunityUpdate.controller.js'
import CommunityGlobalSearchController from '../controllers/CommunityGlobalSearch.controller.js';
router.get('/community/:id', CommunityByIdController)
router.post('/community', CommunityCreateController)
router.delete('/community', CommunityDeleteController)
router.post('/community/search', CommunitySearchController)
router.put('/community', CommunityUpdateController)
router.post('/community/global/search', CommunityGlobalSearchController)

// User
import UserByIdController from '../controllers/UserById.controller.js'
import UserCreateController from '../controllers/UserCreate.controller.js'
import UserDeleteController from '../controllers/UserDeleteById.controller.js'
import UserSearchController from '../controllers/UserSearch.controller.js'
import UserUpdateController from '../controllers/UserUpdate.controller.js'
import UserGlobalSearchController from '../controllers/UserGlobalSearch.controller.js';
router.get('/user/:id', UserByIdController)
router.post('/user', UserCreateController)
router.delete('/user', UserDeleteController)
router.post('/user/search', UserSearchController)
router.put('/user', UserUpdateController)
router.post('/user/global/search', UserGlobalSearchController)

import multer from "multer";
const storage = multer.memoryStorage()
const upload = multer({storage:storage})
    
// S3 Public
import S3PublicByIdController from '../controllers/S3PublicById.controller.js';
import S3PublicCreateController from '../controllers/S3PublicCreate.controller.js';
import S3PublicDeleteByIdController from '../controllers/S3PublicDeleteById.controller.js';
router.get('/s3_public/:id', S3PublicByIdController)
router.post('/s3_public', upload.single('image') , S3PublicCreateController)
router.delete('/s3_public/:id', S3PublicDeleteByIdController)

export default router