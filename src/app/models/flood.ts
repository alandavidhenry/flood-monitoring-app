export interface Item {
  '@id': string
  description: string
  eaAreaName: string
  floodArea: {
    '@id': string
    county: string
    description: string
    eaAreaName: string
    lat: string
    long: string
    riverOrSea: string
  }
  floodAreaID: string
  message: string
  severity: string
  severityLevel: number
  timeRaised: Date
  [key: string]: any
}
