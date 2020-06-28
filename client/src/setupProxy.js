const { createProxyMiddleware } = require('http-proxy-middleware');

//changes need to happen here

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            // target: 'https://fathomless-sands-89545.herokuapp.com',
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};