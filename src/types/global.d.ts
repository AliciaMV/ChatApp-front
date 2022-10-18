type ChatState = {
    currentAuthor: string
    messages: IMessage[]
    newMessageContent: string
    login: {
            email: string
            password: string
        },
    isLogged: boolean
}

interface IMessage {
    id: number
    author: string
    textContent: string
}

type ChatActions = {
    type: string
    data: {
        author: string
        textContent: string
    }
    msgCtn: string
    pw: string
    email: string
    username: string
}

// middleware
interface MiddlewareAPI<S, E extends AnyAction> {
    dispatch: Dispatch<E>
    getState(): S
  }
  
type Middleware<S, E extends AnyAction> =
    (api: MiddlewareAPI<S, E>) =>
    (next: Dispatch<E>) =>
    (event: E) => ReturnType<Dispatch<E>>
