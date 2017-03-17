const users = {
  getAll: function (req, res, next) {
    // User.find().select("-password").exec(function (err, users) {
    //   if (err) return next(err);
    //   res.json({
    //     success: true,
    //     users: users
    //   });
    // })
    var users = [
      {
        _id: 1
      },
      {
        _id: 2
      }
    ];
    res.send({
      users: users
    });
  }
}


module.exports = users;