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
.forEach(node => {
  if(!node) return;
  for (var key in node) {
    try {
      window[node].__defineGetter__(key, WaitWhat);
      window[node].__defineSetter__(key, WaitWhat);
    } catch(e) {
      if (console) console.log(`cannot mutate ${node}:`, e);
    }
  }
});