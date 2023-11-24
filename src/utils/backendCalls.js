import { request } from "./request";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "@env";

export const login = async (values) => {
  try {
    const response = await request({
      url: "/user/login",
      method: "post",
      data: values,
    });

    console.log("response : >>", response);

    if (response?.data?.token) {
      await AsyncStorage.setItem("auth_token", response?.data?.token);

      return response?.data?.token;
    }
  } catch (e) {
    console.log("e login :>> ", e);
  }
};

export const signup = async (values) => {
  try {
    const response = await request({
      url: "/user/register",
      method: "post",
      data: values,
    });

    if (response) {
      const { email, password } = values;
      const loginResponse = await login({ email, password });
      console.log("loginResponse :>> ", loginResponse);
      return loginResponse;
    }
  } catch (e) {
    console.log("e signup :>> ", e);
  }
};

export const getProfile = async () => {
  try {
    const response = await request({
      url: "/user/profile",
      method: "get",
    });

    if (response) {
      console.log("response :>> ", response);
      return response?.data;
    }
  } catch (e) {
    console.log("e profile :>> ", e);
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await request({
      url: "/user/profile",
      method: "patch",
      data,
    });

    if (response) {
      const profile = await getProfile();
      return profile;
    }
  } catch (e) {
    console.log("e profile :>> ", e);
  }
};

export const getServices = async () => {
  try {
    const response = await request({
      url: "/services",
      method: "get",
    });

    if (response) {
      return response?.data;
    }
  } catch (e) {
    console.log("e services :>> ", e.response);
  }
};
