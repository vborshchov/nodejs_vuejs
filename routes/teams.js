const teams = {
  getAll: function (req, res, next) {
    // User.find().select("-password").exec(function (err, teams) {
    //   if (err) return next(err);
    //   res.json({
    //     success: true,
    //     teams: teams
    //   });
    // })
    var teams = [
      {
        _id: 1
      },
      {
        _id: 2
      }
    ];
    res.send({
      teams: teams
    });
  }
};

module.exports = teams;