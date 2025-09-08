// src/lib/queries.js
import { client } from './sanity'

export async function getVerseOfTheDay() {
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD

  const query = `*[_type == "versiculo" && date == $today][0]{
    _id,
    reference,
    text,
    date
  }`

  const params = { today }

  return await client.fetch(query, params)
}


export async function getAnexos() {
  const query = `*[_type == "anexo"]{
    nombre,
    direccion,
    ciudad,
    telefono,
    redes
  }`;
  return await client.fetch(query);
}