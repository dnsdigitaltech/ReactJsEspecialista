export default function HelloWorld () {

    const name = 'Davi'

    return <div>
        <h1>Hello, { name === 'Davi' ? 'Davi' : name }!</h1>
    </div>
}