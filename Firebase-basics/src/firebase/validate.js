export function validateEmailAndPassword(email, password, name) {
  const isValidName = /^[a-zA-Z]+$/.test(name);
  if (!isValidName) return "Name is not valid";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailPattern) return "Email is not a valid";

  const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password);
  if (!passwordPattern) return "Password is not valid";
  
  return null;
}
