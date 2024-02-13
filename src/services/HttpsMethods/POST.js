import __Request from "../axios";
import { FindItemStorage } from "../SessionStorage";

 async function Post(linkTo, params = {}){
    const secret = FindItemStorage("Token");

    try{
        const {data, status} = await __Request.post(linkTo, params, {
            headers: {
                Accept: 'application/json',
                'Authorization': `Bearer ${secret}` || '',  

            }  
        });

        //console.log(status);
        return data;

    } catch(errors) {
        return "Não foi possivel realizar a consultar, verifique o host está conectado e se os parametros estão corretos"

    }
}

export default Post;