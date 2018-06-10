const functions = require('firebase-functions');
const { Nuxt, Builder } = require('nuxt');
const express = require('express');

const app = express();
//extract config and use here and publicPath also in src/nuxt.config.js
const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: ''
  }
};

const nuxt = new Nuxt(config);

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render);

function handleRequest(res, res) {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  nuxt.renderRoute('/')
  .then(result => {
    res.send(result.html);
  })
  .catch(e => {
    res.send(e);
  });
}
app.get('*', handleRequest);

exports.ssrapp = functions.https.onRequest(app);
