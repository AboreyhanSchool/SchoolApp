import {api} from "src/boot/axios"


const gets = async function  (url){
  let user = await api.get(`${url}`).then((req)=>{
   if (req.status == 200) {
     return req.data
   }else{

     return req.status
   }
 }).catch((err)=>{
   return err
 })

 return user
}



const get = async function  (url,NationalCode){
   let user = await api.get(`${url}/${NationalCode}`).then((req)=>{
    if (req.status == 200) {
      return req.data[0]
    }else{
      return req.status
    }
  }).catch((err)=>{
    return err
  })

  return user
}


const post = async function (url,data){
  let user = await api.post(`${url}/`,data).then((req)=>{
    if (req.status == 200) {
      return req.data
    }else{
      return req.status
    }
  }).catch((err)=>{

    return err
  })

  return user
}


const put = async function (url,NationalCode,data){
  let user = await api.put(`${url}/${NationalCode}`,data).then((req)=>{
    if (req.status == 200) {
      return req.data
    }else{
      return req.status
    }
  }).catch((err)=>{

    return err
  })

  return user
}

const rem = async function (url){
  let user = await api.delete(`${url}/${NationalCode}`).then((req)=>{
    if (req.status == 200) {
      return req.data
    }else{
      return req.status
    }
  }).catch((err)=>{

    return err
  })

  return user
}

export default {
  gets,
  get,
  post,
  put,
  rem
}


