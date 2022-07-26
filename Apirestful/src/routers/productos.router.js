import { Router } from "express";
import Manager from "../Manager/contenedor.js"
const manager  = new Manager();
const router = Router();

///GET '/api/productos' -> devuelve todos los productos.

router.get('/:id',async(req,res)=>{
    let obtenerTodo = await manager.getAll()
    res.send(obtenerTodo);
})

//GET '/api/productos/:id' -> devuelve un producto según su id.

router.get('/:id',async(req,res)=>{
    let id= req.params.id
    let Lista = await manager.getAll()
    if (id >Lista.length) {
        res.send("404 El valor pedido no existe")
    } else {
        let obtenerId = await manager.getById(id)
        res.send(obtenerId)
    }
}) 
//POST '/api/productos' -> recibe y agrega un producto.

router.post('/:id',async(req,res)=>{
    let producto = req.body
    await manager.save(producto)
    res.send({status:"succes", message:"Product Added"})
})

//PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

router.put('/:id',async(req,res)=>{
    let producto = req.body
   await manager.actualizar(producto)
})


//DELETE '/api/productos/:id' -> elimina un producto según su id.
router.delete('/:id',async(req,res)=>{
    let id = req.body
    await manager.deleteById(id.delete)
    res.send("Eliminado")
})





export default router;