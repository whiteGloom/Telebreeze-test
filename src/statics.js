const cache = {};
function importAll(r) {
  r.keys().forEach((key) => { cache[key] = r(key); });
}

importAll(require.context('./static/', true, /\.(jpe?g|gif|png|svg|ico)/)); // images
importAll(require.context('./static/styles/', true, /\.(less|css)/)); // styles
importAll(require.context('./blocks/', true, /\.(less|css)/)); // styles