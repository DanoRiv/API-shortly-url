import { Router } from 'express'
const router = Router()
import shortenUrl from '../controllers/shortenController.js'

//Shorten url
router.post('/', shortenUrl)

// //Retrieve url
// router.get('/:shortCode', getUrl)

export default router
