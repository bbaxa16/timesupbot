const Twit = require('twit');
const config = require('./config');

const bot = new Twit(config);



function resign() {
  let d = new Date();
  let n = d.getHours();
  let m = d.getMinutes();
  bot.post('statuses/update', {
  status: 'It is ' + n + ':' + m + '. Time for @RepLebsock to resign #timesup #coleg #copolitics'
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweeted!`)
  }
})
}

setInterval(resign, 1000*60*45)
