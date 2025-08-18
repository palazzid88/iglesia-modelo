// src/lib/sanity.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Cliente para lectura (puede usarse en el frontend)
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-08-17', // fecha actual para la API
  useCdn: true // true = más rápido para lectura
})

// Cliente para escritura (solo en el servidor)
export const serverClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-08-17',
  token: process.env.SANITY_API_TOKEN, // token para modificar datos
  useCdn: false
})

// Builder para generar URLs de imágenes
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
