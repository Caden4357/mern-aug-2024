import {Router} from 'express'
import { albumController } from '../controllers/album.controller.js'

const router = Router()

router.route('/album')
    .post(albumController.createAlbum)
    .get(albumController.getAllAlbums)
router.route('/album/:id')
    .get(albumController.getOneAlbum)
    .delete(albumController.deleteAlbum)
    .put(albumController.updateAlbum)

export default router;