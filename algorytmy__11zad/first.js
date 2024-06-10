onmessage = function(e) {
  let data = e.data;
  postMessage(data + 1);
}