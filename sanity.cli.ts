import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'amqkfghc',
    dataset: 'production'
  },
  studioHost: 'https://studio.alabiraphael.com',
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'sbp3yhd08z3sfo3b8cdxsjut',
  },
})
