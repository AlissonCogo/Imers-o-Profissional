import express, {Request, Response} from 'express'

const app = express();
app.use(express.json())

const people = {}

app.get('/pessoa', function (req: Request, res: Response): Response{
    return res;
})

