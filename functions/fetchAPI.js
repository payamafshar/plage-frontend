import axios from "axios";

export const pitza = async () => {
  const response = await fetch(
    "http://0.0.0.0:3000/category/6331e259ace335fd459eca71"
  );
  const data = response.json();
  return data;
};

// export const sonnatiFood = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340b5859f20747bf6907ff"
//   );
//   const data = response.json();
//   return data;
// };
// export const teaHot = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340b6259f20747bf690801"
//   );
//   const data = response.json();
//   return data;
// };
// export const cakeAndDesser = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340b7159f20747bf690803"
//   );
//   const data = response.json();
//   return data;
// };
// export const mainFood = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340b7f59f20747bf690805"
//   );
//   const data = response.json();
//   return data;
// };
// export const esspersoDrink = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340b9a59f20747bf690807"
//   );
//   const data = response.json();
//   return data;
// };
// export const choclateDrink = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340ba359f20747bf690809"
//   );
//   const data = response.json();
//   return data;
// };
// export const mochtailAndJoice = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340bb159f20747bf69080b"
//   );
//   const data = response.json();
//   return data;
// };
// export const smooti = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340bb559f20747bf69080d"
//   );
//   const data = response.json();
//   return data;
// };
// export const pasta = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340bc459f20747bf69080f"
//   );
//   const data = response.json();
//   return data;
// };
// export const americanStyle = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340bd059f20747bf690811"
//   );
//   const data = response.json();
//   return data;
// };
// export const pishGhaza = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340bdb59f20747bf690813"
//   );
//   const data = response.json();
//   return data;
// };
// export const sobhane = async () => {
//   const response = await fetch(
//     "http://localhost:5000/category/63340be359f20747bf690815"
//   );
//   const data = response.json();
//   return data;
// };
