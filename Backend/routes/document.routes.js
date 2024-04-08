import { Router } from 'express';
import { uploadDocument,getDocuments } from '../controllers/document.controller.js';
import upload from '../middlewares/multer.middlewares.js';

const router = Router();

// {{URL}}/api/v1/
router.
    route('/upload/:id')
    .post(
        upload.single('thumbnail'),
        uploadDocument
        );
router.get('/form/:id',(req,res)=>{
    let id=req.params.id;
    res.render('../views/upload.ejs',{id});
})

router.get('/allDocuments/:id',getDocuments);
    
export default router;