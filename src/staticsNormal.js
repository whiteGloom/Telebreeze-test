const cache = {};
function importAll(r) {
  r.keys().forEach((key) => { cache[key] = r(key); });
}

importAll(require.context('./static/styles/', true, /\.normal\.(less|css)/));
importAll(require.context('./blocks/', true, /\.normal\.(less|css)/));