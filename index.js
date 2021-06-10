// absolution
function WaitWhat() {
  throw 'Hey you\'re not supposed to use javascript';
}

// objects to purge from evil
[
  document,
  window
]

// ceremony
.forEach(obj => {
  if(!obj) return;
  for (var key in obj) {
    try {
      window[obj].__defineGetter__(key, WaitWhat);
      window[obj].__defineSetter__(key, WaitWhat);
    } catch(e) {
      if (console) console.log(`cannot mutate ${obj}:`, e);
    }
  }
});
