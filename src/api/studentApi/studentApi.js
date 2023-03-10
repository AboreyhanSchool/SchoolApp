import api from "src/api/baseApi/api"


const studentGet = async function  (nationalCode) {
  const user =  await api.get("/student",nationalCode)

  return user
}

const studentPut = async function  (NationalCode,data) {
  const user =  await api.put("/student",NationalCode,data)



  return user
}

const studentPost = async function  (data) {
  const user =  await api.post("/student",data)



  return user
}

const studentRemove = async function  (NationalCode) {
  const user =  await api.rem("/student",NationalCode)



  return user
}

const studensGet = async function  () {
  const users =  await api.gets("/students")



  return users
}


export default {
  studentGet,
  studentPost,
  studentPut,
  studentRemove,
  studensGet
}
