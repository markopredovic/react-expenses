import axiosInstance, { addAuthorizationHeader } from "../axiosInstance";

const api = {
  login: async (credentials) => {
    try {
      addAuthorizationHeader("login");
      const res = await axiosInstance.post("/auth/local", credentials);
      return res.data;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  register: async (data) => {
    try {
      addAuthorizationHeader("register");
      const res = await axiosInstance.post("/auth/local/register", data);
      return res.data;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  getExpenses: async () => {
    try {
      addAuthorizationHeader("getExpenses");
      const res = await axiosInstance.get("/expenses");
      return res.data;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  addExpense: (data) => {
    try {
      addAuthorizationHeader("addExpense");
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
