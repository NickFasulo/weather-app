const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  register: (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(403).json({
        message: 'All inputs must be filled'
      });
    }
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          return res.status(400).json({
            message: 'User already exists'
          });
        }
        const newUser = new User();
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = hash;
        newUser
          .save()
          .then(user => {
            return req.login(user, err => {
              if (err) {
                return res.status(500).json({
                  message: 'Server error',
                  err
                });
              } else {
                console.log('register...', req.session);
                return res.redirect('/weather');
              }
            });
          })
          .catch(err =>
            res.status(400).json({
              message: 'User not saved',
              err
            })
          );
      })
      .catch(err =>
        res.status(418).json({
          message: 'We messed up',
          err
        })
      );
  }
};
