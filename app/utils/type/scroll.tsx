export type PageType = Root2[]

export type Root2 = {
  data: Data
  status: number
  statusText: string
  headers: Headers
  config: Config
  request: Request
}

export type Data = {
  data: InsideData[]
  count: number
}

export type InsideData = {
  _id: string
  created_by: string
  name: string
  email: string
  masterEmail: string
  phone: string
  userId: string
  ein: string
  addressId: string
  clientId: string
  billingInfoId: string
  status: string
  created_at: string
  updated_at: string
  __v: number
  addresses: Addresses
}

export type Addresses = {
  _id: string
  created_by: string
  addressLine: string
  city: string
  state: string
  zipCode: string
  country: string
  status: string
  created_at: string
  updated_at: string
  __v: number
}

export type Headers = {
  "content-type": string
}

export type Config = {
  transitional: Transitional
  adapter: string[]
  transformRequest: any[]
  transformResponse: any[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  env: Env
  headers: Headers2
  baseURL: string
  method: string
  url: string
}

export type Transitional = {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

export type Env = {}

export type Headers2 = {
  Accept: string
  Authorization: string
}

export type Request = {}
