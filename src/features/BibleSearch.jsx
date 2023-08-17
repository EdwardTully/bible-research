import React, {useState} from 'react'
import axios from 'axios'



function BibleSearch() {

const apiKey='07da560015da815745131ec07d5cc5cc'

  const  [version, setVersion]=useState('179568874c45066f-01')
  const [books, setBooks ] = useState('')
  const [chapter, setChapter]= useState('')
  const [bookData, setBookData]= useState()
  

  console.log(bookData)
  
  const endpointBooks =  `https://api.scripture.api.bible/v1/bibles/${version}/books/`

 const fetchBible =async()=>{
   await axios
    .get(endpointBooks,{headers:{
        'api-key':  apiKey,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    }})
    .then(response=>{
        setBookData(response.data)
    })
    .catch(console.log(response=>response.error.message))}

   

  return (
    <div className="body">
      <h1>Biblical Research</h1>
      <div className="formCont">
        <div className="bibleSel">
          <label for="bibleVersion">Select Bible Version</label>
          <select
            name="bibleVersion"
            id="bibleVersion"
            onChange={(e) => setVersion(e.target.value)}
          >
            <option value="179568874c45066f-01">
              Douay-Rheims American 1899
            </option>
            <option value=" 9879dbb7cfe39e4d-01">World English Bible</option>
            <option value="c315fa9f71d4af3a-01">Geneva Bible</option>
            <option value="06125adad2d5898a-01">
              The Holy Bible, American Standard Version
            </option>
          </select>
        </div>

        <button id="submit" onClick={() => fetchBible()}>
          Get Books
        </button>

        <label for="books">Select Bible Book</label>
        <select
          id="books"
          name="books"
          onChange={(e) => setBooks(e.target.value)}
        >
          {bookData && bookData.data.map((ea) => (
            <option value={ea.id}>{ea.name}</option>
          ))}
        </select>
       
      </div>
    </div>
  );
}

export default BibleSearch