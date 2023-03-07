import { api } from "src/boot/axios";

const get = async function (url) {
  return await api
    .get(url)
    .then((req) => {
      if (req.status == 200) {
        return req.data;
      } else {
        return req.status;
      }
    })
    .catch((err) => {
      return err;
    });
};

const post = async function (url, data) {
  return await api
    .post(url, data)
    .then((req) => {
      if (req.status == 200) {
        return req.data;
      } else {
        return req.status;
      }
    })
    .catch((err) => {
      return err;
    });
};

const put = async function (url, data) {
  return await api
    .put(url, data)
    .then((req) => {
      if (req.status == 200) {
        return req.data;
      } else {
        return req.status;
      }
    })
    .catch((err) => {
      return err;
    });
};

const remove = async function (url) {
  return await api
    .delete(url)
    .then((req) => {
      if (req.status == 200) {
        return req.data;
      } else {
        return req.status;
      }
    })
    .catch((err) => {
      return err;
    });
};

export default {
  get,
  post,
  put,
  remove,
};
