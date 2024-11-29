import React, { Component } from 'react'
import {
  Button,
  Dropdown,
  DropdownButton,
  Carousel,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class MyMain extends Component {
  state = {
    trendingFilms: [],
    watchItAgainFilms: [],
    newReleasesFilms: [],
    loading: true,
    error: null,
  }

  getTrendingFilms = () => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=73079481&s=Animation')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella chiamata API')
        }
      })
      .then((data) => {
        this.setState({ trendingFilms: data.Search || [], loading: false })
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false })
      })
  }

  getWatchItAgainFilms = () => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=73079481&s=Hetalia')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella chiamata API')
        }
      })
      .then((data) => {
        this.setState({ watchItAgainFilms: data.Search || [], loading: false })
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false })
      })
  }

  getNewReleasesFilms = () => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=73079481&s=meow')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella chiamata API')
        }
      })
      .then((data) => {
        this.setState({ newReleasesFilms: data.Search || [], loading: false })
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false })
      })
  }

  componentDidMount() {
    this.getTrendingFilms()
    this.getWatchItAgainFilms()
    this.getNewReleasesFilms()
  }

  chunkFilms = (films, size) => {
    const result = []
    for (let i = 0; i < films.length; i += size) {
      result.push(films.slice(i, i + size))
    }
    return result
  }

  render() {
    const {
      trendingFilms,
      watchItAgainFilms,
      newReleasesFilms,
      loading,
      error,
    } = this.state

    const groupedTrendingFilms = this.chunkFilms(trendingFilms, 4)
    const groupedWatchItAgainFilms = this.chunkFilms(watchItAgainFilms, 4)
    const groupedNewReleasesFilms = this.chunkFilms(newReleasesFilms, 4)

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error: {error}</div>
    }

    return (
      <main>
        <Container className="p-5 d-flex align-items-center">
          <h1 className="text-light">TV Shows</h1>
          <DropdownButton
            id="dropdown-basic-button"
            title="Generi"
            variant="secondary"
            className="ms-5 bg-transparent pe-4"
          >
            <Dropdown.Item href="#">Horror</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Anime</Dropdown.Item>
          </DropdownButton>
        </Container>

        <Container className="text-light px-5">
          <h2 className="d-block ">Trending Now</h2>
          <Carousel
            id="netflixCarousel"
            className="mt-5 d-block "
            indicators={false}
            controls={true}
          >
            {groupedTrendingFilms.length > 0 &&
              groupedTrendingFilms.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex">
                    {group.map((film, i) => (
                      <img
                        key={i}
                        src={film.Poster}
                        className="d-block w-25 mx-2"
                        alt={film.Title}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>

          <h2 className="d-block ">Watch It Again</h2>
          <Carousel
            id="netflixCarousel2"
            className="mt-5 d-block  "
            indicators={false}
            controls={true}
          >
            {groupedWatchItAgainFilms.length > 0 &&
              groupedWatchItAgainFilms.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex">
                    {group.map((film, i) => (
                      <img
                        key={i}
                        src={film.Poster}
                        className="d-block w-25 mx-2"
                        alt={film.Title}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>

          <h2 className="d-block">New Releases</h2>
          <Carousel
            id="netflixCarousel3"
            className="mt-5 d-block "
            indicators={false}
            controls={true}
          >
            {groupedNewReleasesFilms.length > 0 &&
              groupedNewReleasesFilms.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex">
                    {group.map((film, i) => (
                      <img
                        key={i}
                        src={film.Poster}
                        className="d-block w-25 mx-2"
                        alt={film.Title}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
        </Container>

        <Container className="d-flex justify-content-center mt-5">
          <Button className="text-light bg-transparent border border-white">
            Show More
          </Button>
        </Container>
      </main>
    )
  }
}

export default MyMain
