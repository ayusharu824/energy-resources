import { UserDetails } from "../models/models";

// src/api/api.ts
const BASE_URL = process.env.REACT_APP_FUNCTION_URL!;

export async function AddUserDetails(userDetails: UserDetails) {
    debugger;
  const res = await fetch(`${BASE_URL}/AddUserDetails`, {
    method: "POST",
    body: JSON.stringify(userDetails),
  });

  if (!res.ok) {
    throw new Error("Failed to submit form");
  }

  return {
    statusCode: res.status,
    message: res.statusText,
    isSuccess: res.ok,
    data: await res.json(),
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
  }
}