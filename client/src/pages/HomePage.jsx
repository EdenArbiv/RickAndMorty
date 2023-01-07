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
  const [page, setPage] = useState(1)
  const [update, setUpdate] = useState(false)
  const [loading, setLoading] = useState(false)

  const FirstgetData = async () => {
    setPage(1)
    return getRequest(baseUrl+`character?page=${page}`).then(res => {
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

  const LoadMoreCharacters = () => {
    setLoading(true)
    return getRequest(baseUrl+`character?page=${page + 1}`).then(res => {
      setPage(page + 1)
      let newCharacters = [...characters]
      newCharacters.push(...res)
      setCharacters(newCharacters)
      setUpdate(!update)
      setLoading(false)
    })
  }

  const LoadMoreEpisodes = () => {
    setLoading(true)
    return getRequest(baseUrl+`episode?page=${page + 1}`).then(res => {
      setPage(page + 1)
      let newEpisodes = [...episodes]
      newEpisodes.push(...res)
      setEpisodes(newEpisodes)
      setUpdate(!update)
      setLoading(false)
    })
  }

  const LoadMoreLocations = () => {
    setLoading(true)
    return getRequest(baseUrl+`location?page=${page + 1}`).then(res => {
      setPage(page + 1)
      let newLocations = [...locations]
      newLocations.push(...res)
      setLocations(newLocations)
      setUpdate(!update)
      setLoading(false)
    })
  }

  useEffect(() => {
    if(!getData){
      FirstgetData()
    }
  }, [update])
  
  return (
    <>
    <Header/>
    <TabsTable characters={characters} episodes={episodes} locations={locations} LoadMoreCharacters={LoadMoreCharacters} LoadMoreEpisodes={LoadMoreEpisodes} LoadMoreLocations={LoadMoreLocations} loading={loading}/>
    </>
  )
}

export default HomePage;