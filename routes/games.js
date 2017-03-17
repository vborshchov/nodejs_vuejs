const games = {
  getAll: function (req, res, next) {
    // User.find().select("-password").exec(function (err, games) {
    //   if (err) return next(err);
    //   res.json({
    //     success: true,
    //     games: games
    //   });
    // })
    var games = [
      {
        _id: 1
      },
      {
        _id: 2
      }
    ];
    res.send({
      games: games
    });
  }
};


module.exports = games;