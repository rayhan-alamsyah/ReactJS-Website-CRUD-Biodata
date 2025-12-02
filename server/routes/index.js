const route = require('express').Router();

route.get('/', (req,res) => {
    res.json({
        message: "Home"
    })
})

const profilRoutes = require ('./profil');
route.use('/profil',profilRoutes);

const projekRoutes = require ('./projek');
route.use('/projek',projekRoutes);

module.exports = route;