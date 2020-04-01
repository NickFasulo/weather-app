const Favorite = require('../models/Favorite');

module.exports = {
  getFavorites: (req, res) => {
    if (req.isAuthenticated()) {
      Favorite.find({ user: req.user.id })
        .populate('favorites')
        .exec((err, favorites) => {
          if (err) return next(err);
          let user = req.user;
          return res.render('favorites', { favorites, user });
        });
    } else {
      return res.redirect('/api/users/unauth');
    }
  },
  saveFavorite: (req, res) => {
    if (req.isAuthenticated()) {
      let newFavorite = new Favorite();
      newFavorite.location.city = req.body.city;
      newFavorite.location.state = req.body.state;
      newFavorite.user = req.user.id;
      newFavorite.save();
      res.status(204).send();
    } else {
      return res.redirect('/api/users/unauth');
    }
  },
  deleteFavorite: (req, res) => {}
};
