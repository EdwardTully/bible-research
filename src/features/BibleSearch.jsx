import React, {useState} from 'react'
import axios from 'axios'



function BibleSearch() {



  const  [version, setVersion]=useState('ASV')
  const [books, setBooks ] = useState('')
  const [chapter, setChapter]= useState('')
  const [bibleData, setBibleData]= useState({})

  console.log(bibleData)
  
  const endpoint =  `https://bible-go-api.rkeplin.com/v1/books/${books}/chapters/${chapter}/1001002?translation=${version}`

 const fetchBible =()=>{
    axios
    .get(endpoint)
    .then(response=>{
        setBibleData(response.data)
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
            <option value="ASV">American Standard Version</option>
            <option value="DARBY">Darby English Bible</option>
            <option value="WEB">World English Bible</option>
            <option value="YLT">Young's Literal Translation</option>
            <option value="NLT">New Living Translation</option>
          </select>
        </div>

        <label for="books">Select Bible Book</label>
        <select
          id="books"
          name="books"
          onChange={(e) => setBooks(e.target.value)}
        >
          <optgroup label="Old Testament">
            <option value="1">Genesis</option>
            <option value="2">Exodus</option>
            <option value="3">Leviticus</option>
            <option value="4">Numbers</option>
            <option value="5">Deuteronomy</option>
            <option value="6">Joshua</option>
            <option value="7">Judges</option>
            <option value="8">Ruth</option>
            <option value="9">1 Samuel</option>
            <option value="10">2 Samuel</option>
            <option value="11">1 Kings</option>
            <option value="12">2 Kings</option>
            <option value="13">1 Chronicles</option>
            <option value="14">2 Chronicles</option>
            <option value="15">Ezra</option>
            <option value="16">Nehemiah</option>
            <option value="17">Esther</option>
            <option value="18">Job</option>
            <option value="19">Psalms</option>
            <option value="20">Proverbs</option>
            <option value="21">Ecclesiastes</option>
            <option value="22">Song of Solomon</option>
            <option value="23">Isaiah</option>
            <option value="24">Jeremiah</option>
            <option value="25">Lamentations</option>
            <option value="26">Ezekiel</option>
            <option value="27">Daniel</option>
            <option value="28">Hosea</option>
            <option value="29">Joel</option>
            <option value="30">Amos</option>
            <option value="31">Obadiah</option>
            <option value="32">Jonah</option>
            <option value="33">Micah</option>
            <option value="34">Nahum</option>
            <option value="35">Habakkuk</option>
            <option value="36">Zephaniah</option>
            <option value="37">Haggai</option>
            <option value="38">Zechariah</option>
            <option value="39">Malachi</option>
          </optgroup>
          <optgroup label="New Testament">
            <option value="40">Matthew</option>
            <option value="40">Matthew</option>
            <option value="42">Luke</option>
            <option value="43">John</option>
            <option value="44">Acts</option>
            <option value="45">Romans</option>
            <option value="46">1 Corinthians</option>
            <option value="47">2 Corinthians</option>
            <option value="48">Galatians</option>
            <option value="49">Ephesians</option>
            <option value="50">Philippians</option>
            <option value="51">Colossians</option>
            <option value="52">1 Thessalonians</option>
            <option value="53">2 Thessalonians</option>
            <option value="54">1 Timothy</option>
            <option value="55">2 Timothy</option>
            <option value="56">Titus</option>
            <option value="57">Philemon</option>
            <option value="58">Hebrews</option>
            <option value="59">James</option>
            <option value="60">1 Peter</option>
            <option value="61">2 Peter</option>
            <option value="62">1 John</option>
            <option value="63">2 John</option>
            <option value="64">3 John</option>
            <option value="65">Jude</option>
            <option value="66">Revelation</option>
          </optgroup>
        </select>
        <label for='chapter'>Select Chapter</label>
            <select name='chapter' 
            id='chapter'
            onChange={(e)=>setChapter(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>12</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
                <option value='26'>26</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
                <option value='31'>31</option>
                <option value='32'>32</option>
                <option value='33'>33</option>
                <option value='34'>34</option>
                <option value='35'>35</option>
                <option value='36'>36</option>

            </select>
            <button id='submit' onClick={()=>fetchBible()}>Submit</button>
      </div>
    </div>
  );
}

export default BibleSearch