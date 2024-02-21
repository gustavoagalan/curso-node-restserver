const { response, request } = require('express');

const usuariosGET = (req = request, res = response) => {

      const query = req.query;
  //const { q, nombre, apellido = 'no name', pagina = 144, limite, apikey } = req.query;

    res.json({
      msg: 'get API - Controlller',
      query
    });
  }

const usuariosPUT =  (req, res = response) => {
  //const = { id } = req.params;
  const id = req.params.id;
    
   // Podemos tener acceso a las propiedades e.g.  res.status
    res.status(500).json({
      msg: 'put API - Controller',
      id
  })
  }

  const usuariosPOST = (req, res = response) => {
    const body = req.body;
    // Desestructurar el body
    //const {nombre, edad, id} = req.body;
    res.json({
      msg: 'post API - Controller',
      body
     /* nombre,
      edad,
      id*/
})
  }

  const usuariosDELETE = (req, res = response) => {
    res.json({
      msg: 'delete API - Controller'})
  }

 const usuariosPATCH = (req, res = response) => {
    res.json({
      msg: 'patch API - Controller'})
  }

  module.exports = {
    usuariosGET, usuariosPUT, usuariosPOST, usuariosDELETE, usuariosPATCH
  }

