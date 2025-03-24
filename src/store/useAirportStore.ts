import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { Data } from '@services/fetchAirports'

/**
 * @file Airport store using Zustand.
 * @description Manages the state for airport search terms and airport data.
 * The search history is persisted in the local storage, and functions
 * for setting and retrieving search terms and airport data are provided.
 */

/**
 * State for managing airport data and search history.
 */
interface AirportState {
  /**
   * List of search terms entered by the user.
   * This history is used to keep track of the airport search terms.
   */
  search: string[]

  /**
   * Function to update the search history.
   * Adds a new search term to the list if it doesn't already exist.
   *
   * @param value The search term entered by the user.
   */
  setSearch: (value: string) => void

  /**
   * List of airports fetched from the API.
   * Each item contains airport information, such as name, IATA code, ICAO code, etc.
   */
  airports: Data[]

  /**
   * Function to set the list of airports.
   *
   * @param airports The list of airports to be set in the state.
   */
  setAirports: (airports: Data[]) => void
}

export const useAirportStore = create<AirportState>()(
  persist(
    set => ({
      search: [],
      setSearch: value =>
        set(state => {
          const trimmed = value.trim()
          if (!trimmed) return state

          const alreadyExists = state.search.includes(trimmed)
          const updated = alreadyExists ? state.search : [trimmed, ...state.search]

          return { search: updated }
        }),

      airports: [],
      setAirports: airports => set({ airports }),
    }),
    {
      name: 'airport-storage', // Nombre en localStorage
      partialize: state => ({
        search: state.search,
        airports: state.airports,
      }),
    },
  ),
)
