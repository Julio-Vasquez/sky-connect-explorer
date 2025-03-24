import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
  },
  // coverageThreshold: {
  //   global: {
  //     branches: 90, // % mínimo de cobertura en branches (condiciones)
  //     functions: 90, // % mínimo de cobertura en funciones
  //     lines: 90, // % mínimo de cobertura en líneas
  //     statements: 90, // % mínimo de cobertura en declaraciones
  //   },
  // },
}

export default createJestConfig(config)
