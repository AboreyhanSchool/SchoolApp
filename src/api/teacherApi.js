import api from "src/api/baseApi";

const getAll = async function () {
  return await api.get("/teachers");
};

const get = async function (nationalCode) {
  return await api.get(`/teacher/${nationalCode}`);
};

const put = async function (nationalCode, data) {
  return await api.put(`/teacher/${nationalCode}`, data);
};

const remove = async function (nationalCode) {
  return await api.remove(`/teacher/${nationalCode}`);
};

const post = async function (data) {
  return await api.post("/teacher", data);
};

export default {
  getAll,
  get,
  remove,
  put,
  post,
};
