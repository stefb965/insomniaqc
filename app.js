{
  "version": "0.1.0",
  "configurations": [
      {
          "name": "Launch localhost",
          "type": "chrome",
          "request": "launch",
          "url": "http://localhost/mypage.html",
          "webRoot": "${workspaceRoot}/wwwroot"
      },
      {
          "name": "Launch index.html (disable sourcemaps)",
          "type": "chrome",
          "request": "launch",
          "sourceMaps": false,
          "file": "${workspaceRoot}/index.html"
      },
  ]
}