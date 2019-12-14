const cache = {};
function importAll(r) {
  r.keys().forEach((key) => { cache[key] = r(key); });
}

importAll(require.context('./static/styles/', true, /\.tablet\.(less|css)/));
importAll(require.context('./blocks/', true, /\.tablet\.(less|css)/));