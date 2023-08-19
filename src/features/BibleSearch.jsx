import React, {useState} from 'react'



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
  

  console.log(bookData)
  
  const endpointBooks =  `https://api.scripture.api.bible/v1/bibles/${version}/`

 //const fetchBible =async()=>{
  // await axios
  /////  .get(endpointBooks,options)
    //.then(response=>{
    //    setBookData(response.data)
   // })
   // .catch(console.log((response)=>response.error))}

    // Example POST method implementation:
const fetchBible =async()=> {
  // Default options are marked with *
  const response = await fetch(endpointBooks, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      'api-key': apiKey,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

   

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