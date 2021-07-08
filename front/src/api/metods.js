import fetch from 'cross-fetch';

export async function postLogin(url, data) {
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
   return response.json()
  })
}

export async function getOrders(url, token) {
  return await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': token ? `Bearer ${token}` : null
    },
  }).then(response => {
    return response.json()
  } )
}
