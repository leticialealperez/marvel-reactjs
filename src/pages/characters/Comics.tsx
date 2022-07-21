/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { marvel } from '../../services'
import {
  dispararRequisicao,
  inserirPersonagensAPI,
  registrarErroAPI,
} from '../../store/modules/characters/characterSlice'

const ComicsName: React.FC = () => {
  // useDispatch = set(cria ou atualiza) as infos do store
  const dispatch = useDispatch()

  // useSeletor = get(busca e traz) as infos do store
  // tem loading, personagens e erro
  const storePersonagens = useSelector((state: any) => state.personagem)

  useEffect(() => {
    dispatch(dispararRequisicao())
    marvel
      .get('/character')
      .then((resposta) => {
        const dados = JSON.parse(resposta.data)
        const personagens = dados.data.results
        console.log(personagens)

        const aux = []

        for (let personagem of personagens) {
          aux.push({
            id: personagem.id,
            nome: personagem.name,
            descricao: personagem.description,
            imgUrl: `${personagem.thumbnail.path}.jpg`,
          })
        }

        dispatch(inserirPersonagensAPI(aux))
        console.log(aux)
      })
      .catch((erro) => {
        dispatch(registrarErroAPI(erro.message))
      })
  }, [])

  return (
    <React.Fragment>
      <h1>Growdev</h1>
      <p>Hellow</p>
    </React.Fragment>
  )
}

export default ComicsName
