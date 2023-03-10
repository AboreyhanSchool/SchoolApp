import api from "src/api/baseApi/api"


const teachersGet = async function (){
    const users = await api.gets("/teachers")
    return users
}


const teacherGet = async function (NationalCode){
    const user = await api.get("/teacher",NationalCode)

    return user
}


const teacherPut = async function (NationalCode,data){
    const info = await api.put("/teacher",NationalCode,data)

    return info
}
const teacherRemove = async function (NationalCode){
    const info = await api.delete("/teacher",NationalCode)

    return info
}


const teacherPost = async function (data){
    const user = await api.post("/teacher",data)
}



export default {
  teachersGet,
  teacherGet,
  teacherRemove,
  teacherPut,
  teacherPost
}
