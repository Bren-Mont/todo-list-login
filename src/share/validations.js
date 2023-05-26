export const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return;
  }
  return "Correo electrónico invalido";
};

export const validatePassword = (password) => {
  if (/^[A-Za-z]\w{7,14}$/.test(password)) {
    return;
  }
  return "La contraseña debe ser alfanumérica y tener entre 8 y 14 caracteres.";
};
