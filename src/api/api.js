import axiosInstance, { addAuthorizationHeader } from "../axiosInstance";

const api = {
  login: async (credentials) => {
    try {
      const res = await axiosInstance.post("/auth/local", credentials);
      return res.data;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  register: (data) => {
    try {
      return axiosInstance.post("/auth/local/register", data);
    } catch (e) {
      throw new Error(e.message);
    }
  },
  getExpenses: async () => {
    try {
      addAuthorizationHeader();
      const res = await axiosInstance.get("/expenses");
      return res.data;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  addExpense: (data) => {
    try {
      addAuthorizationHeader();
      return axiosInstance.post("/expenses", data);
    } catch (e) {
      throw new Error(e.message);
    }
  },
  deleteExpense: (id) => {
    try {
      return axiosInstance.delete(`/expenses/${id}`);
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

export { api as default };
