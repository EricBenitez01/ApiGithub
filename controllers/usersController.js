const fetch = require('node-fetch');
/* const res = await fetch(`${API}`);
const data = await res.json();
console.log(data); */

const API = "https://api.github.com/";
/* link: <https://api.github.com/repositories/1300192/issues?page=4>; rel="next", */
module.exports={
    
     show: function(req, res, next) {
        res.send('users');
      },
     List:  /* /api/users?since={number} */
          async (req, res) => {
          const respuesta = await fetch(`${API}users?since=0`);
          const data = await respuesta.json();
          res.send(data) 
       },
      paginado: 
          async (req, res) => {
          let number = req.params.number
          const respuesta = await fetch(`${API}users?since=${ number > 1 ?  number*30 : 0}`);
          const data = await respuesta.json();
          res.send(data)
      },
      details:  /* /api/users/:username/details */
          async (req, res) => {
          let {username} = req.params
          const respuesta = await fetch(`${API}users/${username}`);
          const data = await respuesta.json();
          res.send(data)
        },
      repos:  /* https://api.github.com/users/EricBenitez01/repos */
        async (req, res) => {
        let {username} = req.params
        const respuesta = await fetch(`${API}users/${username}/repos`);
        const data = await respuesta.json();
        res.send(data)
      }           
        
};
