const cache = {};
function importAll(r) {
  r.keys().forEach((key) => { cache[key] = r(key); });
}

importAll(require.context('./static/styles/', true, /\.mobile\.(less|css)/));
importAll(require.context('./blocks/', true, /\.mobile\.(less|css)/));