import { Data } from '@services/fetchAirports'

export const getAirportById = (id: string, data: Data[]): Data | undefined => {
  return data.find(e => e.id === id)
}
