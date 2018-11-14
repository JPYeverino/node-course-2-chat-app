import * as path from 'path';
import * as express from 'express';

const publicPath = path.join(__dirname, '/../../public');
const port = process.env.PORT || 3000;

const app: express.Application = express();


app.use(express.static(publicPath)); //It gets the static files.

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});