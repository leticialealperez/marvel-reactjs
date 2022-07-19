import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, Typography } from '@mui/material'
import { marvel } from '../../services'
import {
  Comics,
  createComic,
  requestComic,
  requestComicError,
} from '../../store/modules/comics/comicSlice'

const Characters: React.FC = () => {
  const dispatch = useDispatch()

  const comicRedux = useSelector((state: any) => state.comic)

  useEffect(() => {
    dispatch(requestComic())
    marvel
      .get('/comics')
      .then(({ data }) => {
        const res = JSON.parse(data)
        console.log(res)
        const id = res.data.results.map((dado: any) => dado.id)
        const title = res.data.results.map((dado: any) => dado.title)
        const foto = res.data.results.map((dado: any) => dado.thumbnail.path)

        const comics: Comics[] = []
        id.forEach((element: any, index: any) => {
          comics.push({
            id: element,
            name: title[index],
            imgPath: foto[index],
          })
        })

        dispatch(createComic(comics))
      })
      .catch((error) => {
        dispatch(requestComicError(error.message))
      })
  }, [])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Personagens
        </Typography>
        {comicRedux.loading && <div>Loading...</div>}
        {!comicRedux.loading && comicRedux.error ? (
          <div>Erro: {comicRedux.error}</div>
        ) : null}

        {comicRedux.comics.length > 0 && (
          <Box>
            {comicRedux.comics.map((dado: any) => (
              <div key={dado.id}>
                <Typography variant="h3" color="primary">
                  {dado.name}
                </Typography>
                <img src={`${dado.imgPath}.jpg`} alt="marvel-img" />
              </div>
            ))}
          </Box>
        )}
      </Grid>
    </Grid>
  )
}

export default Characters
