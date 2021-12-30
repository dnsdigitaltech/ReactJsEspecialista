export default function HelloWorld () {

    const name = 'Davi'

    const title = <h1>Hello, { name }</h1>

    if (name === 'Davi') {
        return <div>
            <h2 style={{ background: 'red' }}>{ name }</h2>
        </div>
    }

    return <div>
        { title }
    </div>
}