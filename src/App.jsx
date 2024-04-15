import { useState, useEffect } from 'react'
import './App.css'
import { Title } from './components/Title'
import { Searcher } from './components/Searcher'
import { useFetch } from './components/useFetch'
import { ChampionTable } from './components/ChampionTable'

function App() {
const url = 'https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json'

const { champions, loading } = useFetch(url)


return (
    <>
      <Title text='Lista de campeones'></Title>
      <Searcher></Searcher>
      <ChampionTable champions={champions} loading={loading}></ChampionTable>
    </>
  )
}

export default App
