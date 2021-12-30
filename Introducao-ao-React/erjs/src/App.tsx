import { useState } from 'react';
import './App.css';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

function App() {

  const [post, setPost] = useState({
    title: 'Título Maneiro',
    content: 'Lorem Ipsum dolor sit amet'
  })

  /*setTimeout(() => {
    setPost({
      title: 'Título Maneiro22',
      content: 'Lorem Ipsum dolor sit amet22'
    })
  }, 5000)*/

  return (
    <div className="App">
      <header className="App-header">
        <Sidebar post={post}/>
        <Post post={post} totalComments={12} />
      </header>
    </div>
  );
}

export default App;
