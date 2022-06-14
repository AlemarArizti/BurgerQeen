const urlApi = 'http://localhost:3000';

export const getFullMenu = async () => {
  const urlFullMenu = `${urlApi}/FullMenu`;
  const fetchFullMenu = await fetch(urlFullMenu).then((response) => response.json());
  return fetchFullMenu;
};

export const getOrders = async () => {
  const urlGetOrders = `${urlApi}/Orders`;
  const fetchOrders = await fetch(urlGetOrders).then((response) => response.json());
  return fetchOrders;
};

export const createOrder = (client) => {
  const urlOrders = `${urlApi}/Orders`;
  return fetch(urlOrders, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ client }),
  });
};
