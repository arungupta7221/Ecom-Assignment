const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api', // Specify the API routes you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5000', // Replace with your backend URL
      changeOrigin: true,
    }),
  )
}
