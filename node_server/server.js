var app = require("./app");
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Start, express server on port " + port);
});
