const Twit = require('twit');
const congig = require('./config');

const bot = new Twit(config);

bot.post('statuses/update', {
  status:
  'test'
}, (err, data, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log('${data.text} tweeted!');
  }
})
