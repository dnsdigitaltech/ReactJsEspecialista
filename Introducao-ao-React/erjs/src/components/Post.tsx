export type ProstObject = {
    title: string
    content: string
}

interface PostProps {
    post: ProstObject
    totalComments?: number 
}

export default function Post (props:PostProps) {
    console.log('Post foi redenrizado')
    return <div>
        <h1>{ props.post.title }</h1>
        <p>{ props.post.content }</p>
        {
            props.totalComments &&
            <span>
                Comentários: {props.totalComments}
            </span>
        }
    </div>
}