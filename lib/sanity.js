import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_TOKEN,
  apiVersion: 'v1',
  dataset: 'production',
  useCdn: false
})