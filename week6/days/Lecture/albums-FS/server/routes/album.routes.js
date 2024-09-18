import {Router} from 'express'
import { albumController } from '../controllers/album.controller.js'

const router = Router()

router.route('/albums')
    .post(albumController.createAlbum)
    .get(albumController.getAllAlbums)
router.route('/albums/:id')
    .get(albumController.getOneAlbum)
    .delete(albumController.deleteAlbum)
    .put(albumController.updateAlbum)

export default router;