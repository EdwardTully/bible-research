import React, {useState} from 'react'
import axios from 'axios'



function BibleSearch() {

const apiKey='a49ecda24d3670875bad7ee655eb71bb'

  const  [version, setVersion]=useState('179568874c45066f-01')
 const [books, setBooks ] = useState('')
  const [chapter, setChapter]= useState('')
  const [bookData, setBookData]= useState('')
  const options={headers:{
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'api-key': apiKey, 
}}
  


  
  const endpointBooks =  `https://cors-anywhere.herokuapp.com(https://bible-go-api.rkeplin.com/v1/translations/)`
  //https://cors-anywhere.herokuapp.com(

 const fetchBible =async()=>{
  await axios
  .get(endpointBooks,options)
    .then(response=>{
       setBookData(response.data)
    })
  .catch(console.log((error)=>error.message))}

    // Example POST method implementation:


   fetchBible()
   console.log(bookData)

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