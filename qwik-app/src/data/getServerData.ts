import { allArticlesSchema } from "~/utils/utils"

export async function getServerData(url: string, controller?: AbortController): Promise<allArticlesSchema> {

// console.log(url);

    const response = await fetch(url, {
      method: 'GET',
      // mode: 'cors',
      headers: {
  
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      signal: controller?.signal,
    })
      .then((res) => {
  
        return res.json()
      })
    // .catch((error) => {
    //   // return error
    //   console.log('gal',error);
  
    // })
  
  
    // console.log(response);
  
  
    // console.log('url',response);
  
    // console.log('galerry',response);
    // return Promise.resolve(response)
    return response.status == 'ok'
      ? Promise.resolve(response)
      : Promise.reject('Issue with data fetch: ' + response.code)
  
    // return
  }