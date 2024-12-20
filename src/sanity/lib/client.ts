import { createClient } from 'next-sanity'

//import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'v8c2sipj',
  dataset:'production',
  apiVersion: '2021-10-21',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
