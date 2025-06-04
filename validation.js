// src/core/validation.js

export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function isValidPassword(password) {
  return password.length >= 6;
}