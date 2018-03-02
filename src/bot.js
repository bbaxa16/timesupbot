const Twit = require('twit');
const config = require('./config');

const bot = new Twit(config);

let d = new Date();
let n = d.getHours();
let m = d.getMinutes();

function resign() {
  bot.post('statuses/update', {
  status: 'It is ' + n + ':' + m + '. Time for @RepLebsock to resign #timesup'
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweeted!`)
  }
})
}
resign();
setInterval(resign, 1000*60*60)
