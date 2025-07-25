import { UserDetails } from "../models/models";

// src/api/api.ts
const BASE_URL = process.env.REACT_APP_FUNCTION_URL!;
//const BASE_URL = "http://localhost:7172/api";
export async function AddUserDetails(userDetails: UserDetails) {
    debugger;
  const res = await fetch(`${BASE_URL}/AddUserDetails`, {
    method: "POST",
    body: JSON.stringify(userDetails),
  });

  if (!res.ok) {
    throw new Error("Failed to submit form");
  }

  //return res.json(); // or .text(), depending on your API
  return {
    statusCode: res.status,
    message: res.statusText,
    isSuccess: res.ok,
    data: await res.json(), // Assuming the response is JSON
  }
}

export async function GetUserDetails() {
  const res = await fetch(`${BASE_URL}/GetUserDetails`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to get user details");
  }

  return {
    statusCode: res.status,
    message: res.statusText,
    isSuccess: res.ok,
    data: await res.json(), // Assuming the response is JSON
  } // or .text(), depending on your API
}