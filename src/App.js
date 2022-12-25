import { MeiliSearch } from 'meilisearch'
import { useState } from 'react';
import ResultLink from './components/ResultLink'
import SearchBox from './components/SearchBox'
import '@fontsource/roboto/300.css';




function App() {
  const client = new MeiliSearch({ host: 'http://localhost:7700' })
  const [searchResult, setSearchResult] = useState([])
  const [responseTime, setResponseTime] = useState(0)
  function searchQuery(event){
    const query = event.target.value
    client.index('link-search').search(query).then((res) =>{
      setResponseTime(res.processingTimeMs)
      setSearchResult(res.hits)
      console.log(searchResult)
    })
  }

  
  return (

    <div className="App">
      <h1 style ={{"textAlign":"center","marginBottom":"35px"}}>Link Retriever</h1>
      <SearchBox responsetime = {responseTime} function= {searchQuery} />
      {searchResult.map((item) => {
        return <ResultLink domain = {item.domain} url = {item.url} keywords = {item.keywords} />
      })}
    </div>
  )
}
export default App
