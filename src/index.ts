import { Response, Request, Handler } from 'express'
import { app } from './application/web'

type ApiResponse<T> = {
    message: string
    data: T
}

type PagingResponse<T> = {}

type UserResponse = {
    name: string
    age: number
}

app.get('/', (req: Request, res: Response) => {
    return res.json({
        message: 'Success',
        data: [
            {
                name: 'Garda Arraniri',
                age: 20,
            },
        ],
    })
})

app.listen(8000, () => {
    console.log('Application running on port 8000')
})
