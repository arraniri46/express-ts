import { Response, Request } from 'express'
import { app } from './application/web'

app.get('/', (_req: Request, res: Response) => {
    return res.json({
        message: 'Success',
        data: [
            {
                name: 'Garda Arraniri',
                age: 28
            }
        ]
    })
})

app.listen(8000, () => {
    console.log('Application running on http://localhost:8000')
})
