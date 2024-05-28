import { useEffect, useState } from 'react';
import Items from './components/Items/Items';
import './App.css'
import ItemsTable from './components/ItemsTable/ItemsTable';
import ItemDetail from './components/ItemDetail/ItemDetail';

export const postUrl = 'https://jsonplaceholder.typicode.com/posts'

function App() {
  const [items, setItems] = useState([])
  const [display, setDisplay] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = () => {
    fetch(postUrl)
    .then(res => res.json())
    .then(resjson => {
      setItems(resjson)
    })
  }
  return (
    <div>
      {
        display === 'detail' ?
        <ItemDetail setDisplay={setDisplay} item={selectedItem}/>
        : <ItemsTable 
          items={items} 
          setDisplay={setDisplay} 
          setSelectedItem={setSelectedItem} 
          refreshItems={getPosts}
        />
      }
    </div>
  );
}

export default App;
