import Post from '../../services/HttpsMethods/POST'
import Get from '../../services/HttpsMethods/GET'

import { AddItemStorage, FindItemStorage } from '../../services/SessionStorage';

const ApiLink = {
   logIn: 'api/token',
   getUserInfo: 'api/user'
}

//https://www.makeuseof.com/redirect-user-after-login-react/

//https://kosmicke.medium.com/reactjs-servi%C3%A7os-b90037e5790f

//https://www.youtube.com/watch?v=5KqP3Vx8Y4s

//https://stackoverflow.com/questions/57543575/asp-net-core-cors-configuration-not-working-for-firefox


/*
  "email": "annos-voldigoad@socialplayers.com",
  "password": "395029037465"

  "email": "rimuru-tempest@socialplayers.com",
  "password": "478040699448"

  "email": "chun-li@socialplayers.com",
  "password": "k8xKkPy57#%j"

  "email": "cammy@socialplayers.com",
  "password": "k8xKkPy57#%j"

  ""
*/

/*
 O PROBELMA É O SEGUINTE, NÃO É POSSIVEL UTILIZAR AS FUNÇÕES DO REDUX FORA DE UM CONTEXTO REACT
 OU SEJA, NECESSARIAMENTE AS FUNÇÕES DE CHAMADA DE ESTADO E ATUALIZAÇÕES DE ESTADO
 DEVEM ESTAR ATRELADAS AO ESCOPO DE UM METODO REACT, COMO A PAGINA DE LOGIN OU HOME POR EXEMPLO
*/

//const dispatch = useDispatch();

export const Request = async function (data) {
   const response = await Post(ApiLink.logIn, data)
   const sessionData = {
      key: "Token",
      value: response.token
   }

   if (response.token) {
      AddItemStorage(sessionData);
      return true;
      
   } else {
      if (response.slice(0, 4) === '0211' || response.slice(0, 4) === '0212') {
         alert("Não Autenticado!");
         return false;
      }
   }
}

export const GetInfoUser = async function () {
  
  const response = await Get(ApiLink.getUserInfo);

  //console.log(response);
 
   return response;
  
}
