var app = module.exports = require('derby').createApp('hello', __filename);
app.loadViews(__dirname);
var moment = require('moment');
var util = require('racer/lib/util');

app.proto.date = function () { return moment().format('LLL'); };

app.on("model", function(model) {
  if (!util.isServer)
    model.root.set('_session.tz', (new Date()).getTimezoneOffset());
});

app.get('/', function(page, model) {
  page.render();
});
