var skip = !!process.env.SLOW_INSTALL_DISABLE
if (skip) return

var silent = !!process.env.SLOW_INSTALL_SILENT
var seconds = process.env.SLOW_INSTALL_TIME || 10


var minutes = seconds / 60
if (minutes > 1) {
  if (!silent) console.log("Installing for %d minutes, %d seconds...", Math.floor(minutes), seconds % 60)
} else {
  if (!silent) console.log("Installing for %d seconds...", seconds);
}

var counter = setInterval(function() {
  if (silent) return
  if (--seconds > 0) console.log('%d seconds left.', seconds)
}, 1000)

setTimeout(function() {
  clearInterval(counter)
  if (silent) return
  console.log('0 seconds left.')
  console.log('Done.')
}, 1000 * seconds)
