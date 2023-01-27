import { useLexicalScope, useTask$ } from "@builder.io/qwik";
import type { RequestHandler, ResponseContext } from "@builder.io/qwik-city";
import { allArticlesSchema } from "~/utils/utils";

const allNews = await import('../build/dataFetch')

export let searchURL = {
  url: ''
}
export const controller = new AbortController()



export const onPost: RequestHandler = async (data) => {
  
// console.log(data);

  return data.request.json().then((res)=> {
    // console.log('newsCatId',res);
    
  // searchURL = new URL(res)

  searchURL.url = res

  // console.log(searchURL.url);
  return res


  // return 'Thanks'
  // console.log(res);
  
})


 
}



export const onGet: RequestHandler = async (res) => {
  // console.log(searchURL);
  // console.log('s',searchURL.url);

  //default URL to set for onload
  // searchURL.url = 'https://newsapi.org/v2/everything/language=en'

//   searchURL.url == '' ? console.count(searchURL.url) : console.log('serverURL',searchURL.url)
  
//   console.log('searchURL',searchURL.url);

  let tmp = searchURL.url
  
 let response =  await allNews.getData(searchURL.url,controller)
 .then((result: any)=>{ 
  return result
 }).catch((err: any)=>{
  // console.error('errorServer',err)
  return err
 })

//  let tmp = new WeakSet().add(response)

//  console.log('getResponse',response);
return  response
 
 
  // res.response = headLines
  // console.log('r',headLines);
  
  // console.log('s',headLines);

  // data.request.json().then((res) => {
  //     searchValue = res.value
  // // })
  // type newsDataType = [{
  //   source: object,
  //   autor:  string,
  //   title: string,
  //   url:string,
  //   urlToImage:string,
  //   publishedAt:string,
  //   content:string
  // }]
  // let tmp:newsDataType;
  // console.log('headLines',headLines);
  // return{
  //   value:headLines
  // }
  // return typeof headLines!== undefined ? res.response : Promise.reject('Error fetching Headlines')

}
