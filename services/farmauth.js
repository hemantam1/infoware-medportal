module.exports = function farmlogin(req, res, next) {
 
    if (req.isAuthenticated() && req.user.type === 'farmer')
     
        return next();
         
    res.redirect('/login');
 
}