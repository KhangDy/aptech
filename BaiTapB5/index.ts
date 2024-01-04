import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
    res.send('Đây là bài tập buổi 5 của Kháng Dỹ');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
