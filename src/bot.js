const Twit = require('twit');
const config = require('./config');

const bot = new Twit(config);



function resign() {
  let d = new Date();
  let n = d.getHours();
  let m = d.getMinutes();
  bot.post('statuses/update', {
  status: 'It is ' + n + ':' + m + '.'
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweeted!`)
  }
})
}
resign()
setInterval(resign, 1000*60*60)
