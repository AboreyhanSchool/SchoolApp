import api from "src/api/baseApi";

const get = async function (nationalCode) {
  return await api.get(`/student/${nationalCode}`);
};

const put = async function (nationalCode, data) {
  return await api.put(`/student/${nationalCode}`, data);
};

const post = async function (data) {
  return await api.post("/student", data);
};

const remove = async function (nationalCode) {
  return await api.remove(`/student/${nationalCode}`);
};

const getAll = async function () {
  return await api.get("/students");
};

export default {
  get,
  post,
  put,
  remove,
  getAll,
};
