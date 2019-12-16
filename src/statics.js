import './favicons';

const cache = {};
function importAll(r) {
  r.keys().forEach((key) => { cache[key] = r(key); });
}

importAll(require.context('./blocks/', true, /\.(jpe?g|gif|png|svg|ico)/)); // images
importAll(require.context('./static/images/', true, /\.(jpe?g|gif|png|svg|ico)/)); // images