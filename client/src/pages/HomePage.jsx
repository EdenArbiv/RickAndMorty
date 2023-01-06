import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import TabsTable from '../components/TabsTable';
import { baseUrl, getRequest } from '../services/get_api';
import { StyledDiv } from './styles';

const HomePage = () => {

  const [getData, setGetData] = useState(false)
  const [characters, setCharacters] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [locations, setLocations] = useState([])

  const FirstgetData = async () => {
    return getRequest(baseUrl+'character').then(res => {
      setCharacters(res)
      return  getRequest(baseUrl+'episode').then(res => {
        setEpisodes(res)
        return  getRequest(baseUrl+'location').then(res => {
          setLocations(res)
          setGetData(true)
        })
      })
    })
  }
console.log(episodes)
console.log(locations)
  useEffect(() => {
    if(!getData){
      FirstgetData()
    }
  }, [])
  
  return (
    <>
    <Header/>
    <TabsTable characters={characters} episodes={episodes} locations={locations}/>
    </>
  )
}

export default HomePage;