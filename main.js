import express from 'express';
import livereload from 'livereload';
import connectLivereload from 'connect-livereload';

const liveServer = livereload.createServer();
liveServer.server.once('connection', () => {
  setTimeout(() => liveServer.refresh('/'), 100);
});

const app = express();
const port = 3000;

app.use(connectLivereload());

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
