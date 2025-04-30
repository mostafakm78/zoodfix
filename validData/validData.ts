export function isValidIranianPhoneNumber(phone: string): boolean {
  const regex = /^(?:\+98|0)?9\d{9}$/;
  return regex.test(phone);
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
}
