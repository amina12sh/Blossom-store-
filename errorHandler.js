// src/core/errorHandler.js

export function logError(error, context = '') {
  console.error(`[${context}]`, error?.message || error);
}