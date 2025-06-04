// src/core/authGuard.js

export function requireAuth(user, navigation) {
  if (!user) {
    navigation.replace('Login');
  }
}