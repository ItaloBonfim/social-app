import __Request from "../axios";
import { FindItemStorage } from "../SessionStorage";

async function Put(linkTo, params = {}) {
    const secret = FindItemStorage("Token");
    
    try {
        const {data, status} = await __Request.put(linkTo, params, {
            headers: {
                'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${secret}` || '',  

              },   
        });

        console.log(status);
        return data


    } catch (errors) {
        console.log(errors)
        return
         "Não foi possivel realizar a consultar, verifique o host está conectado e se os parametros estão corretos"

    }
}

export default Put;