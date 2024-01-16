export const validate = (email) => {
  if (!email) {
    return 'Email is a required field';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "That doesn't look like a valid email";
  }

  return '';
};

export const getUserInput = (e) => {
  const data = new FormData(e.target);
  return Object.fromEntries(data.entries());
};
