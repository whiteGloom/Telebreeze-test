const faviconsContext = require.context(
  '!!file-loader?name=static/favicons/[name].[ext]!.',
  true,
  /\/static\/favicons\/.+\.(svg|png|ico|xml)$/,
);

faviconsContext.keys().forEach(faviconsContext);