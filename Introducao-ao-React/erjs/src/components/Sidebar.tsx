import { ProstObject } from "./Post"

interface SidebarProps{
    post: ProstObject
}

export default function Sidebar (props: SidebarProps) {
    return <div>
        <p>
            O post do momento é {props.post.title}
        </p>
    </div>
}