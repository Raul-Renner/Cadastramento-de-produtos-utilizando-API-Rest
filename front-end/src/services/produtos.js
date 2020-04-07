import { http } from './config';

export default {
    lista:() => {
        return http.get('produtos');
    },

    // eslint-disable-next-line no-unused-vars
    salvar:(produto) => {
        return http.post('produto', produto);
    },

    atualizar:(produto) =>{
        return http.put('produto', produto);
    },

    apagar:(produto) => {
        return http.delete('produto', {data: produto});
    }

}
