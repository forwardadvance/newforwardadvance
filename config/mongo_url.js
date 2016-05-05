app.configure('development', function(){
  module.exports = process.env.MONGODB
});
app.configure('production', function(){
  module.exports = process.env.MONGOLAB_URI
});
