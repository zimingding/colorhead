const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  post("/", textarea.value, function (err, data) {
    if (err) throw err;
    console.log(data);
  });
});

function post(url, value, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", "/");
  req.onreadystatechange = function (evt) {
    if (req.readyState !== 4) return;
    if (req.status !== 200) {
      return callback(new Error("Oh Noes!"));
    }
    var data;
    try {
      data = JSON.parse(req.responseText);
    } catch (err) {
      return callback(err);
    }
    callback(null, data);
  };
  req.send(value);
}