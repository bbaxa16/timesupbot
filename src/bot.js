const Twit = require('twit');
const congig = require('./config');

const bot = new Twit(config);
function resign(){}
  bot.post('statuses/update', {
    status:
    '@RebLebsock RESIGN'
  }, (err, data, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log('${data.text} tweeted!');
    }
  }
setInterval(resign(), 1000*60*60)
})
