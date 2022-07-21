import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../index'

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppDispatch, useAppSelector }

// 3 infos pro slice - sempre estará estruturada em um objeto {}
// 1 - nome do slice - propriedade name do createSlice
// 2 - estado inicial da store - propriedade initialState do createSlice
// 3 - reducers e os métodos de manipulação da store - propriedade reducers do createSlice

// name - string com o nome do slice
// initialState - recebe a const com o estado inicial da store
// reducers - recebe um novo objeto {} <- dentro desse objeto deve conter as funções
// (que serão disparadas dentro do dispatch ) de manipulação da store (estado global)
// essas funções precisam de um parametro obrigatório (STATE) <- esse cara vai ter o mesmo tipo
// do nosso estado inicial
// o segundo parametro (ACTION - payload) será obrigatório apenas se precisar passar uma nova informação
// para modificação do estado global

/*
1

contador = 10
...
reducers: {
    adiciona(){
        contador = contador + 1
    }

    remover(action.payload){
        contador = contador - action.payload
    }

    limparCarrinho(){
        produtos = []
    }

    ordenarAlfabetica(){
        const ordenado = produtos.map(() => {

        })

        ordenadoAlfabetica = ordenado

    }

    
}



*/
