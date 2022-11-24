import type { ContentfulClientApi } from 'contentful'
import { createClient } from 'contentful'

export const buildClient = (): ContentfulClientApi => {
  const contentfulSpaceId = process.env.CONTENTFUL_SPACE_ID
  const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN

  if (!contentfulSpaceId || !contentfulAccessToken) {
    throw new Error('CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN is undifined.')
  }

  return createClient({
    space: contentfulSpaceId,
    accessToken: contentfulAccessToken,
  })
}
