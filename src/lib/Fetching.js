// eslint-disable-next-line import/prefer-default-export
export const getFullMenu = async () => {
  const urlFullMenu = 'http://localhost:3000/FullMenu';
  const fetchFullMenu = await fetch(urlFullMenu).then((response) => response.json());
  return fetchFullMenu;
};
