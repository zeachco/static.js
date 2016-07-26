function WaitWhat() {
  throw 'Hey you\'re not supposed to use javascript';
}
['document', 'location'].forEach(node => {
  for (var key in window[node]) {
    window[node].__defineGetter__(key, WaitWhat);
    window[node].__defineSetter__(key, WaitWhat);
  }
});
