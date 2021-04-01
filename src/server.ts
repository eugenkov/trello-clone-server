import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const port = 4000
const app = express();
let lists:any[] = [];

app.use(cors());
app.use(bodyParser.json());

app.post('/save', (req, res) => {
    console.log(req.body);
    lists = req.body.lists;
    return res.json({ success: true });
})

app.get('/load', (req, res) => res.json({ lists }));

app.listen(port, () =>
    console.log(`trello-clone server running on http://localhost:${port}!`)
);
