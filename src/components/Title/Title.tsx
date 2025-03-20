import { FunctionComponent } from 'react'

const Title: FunctionComponent = () => (
  <h1 className="text-5xl font-bold" data-testid="title">
    <span className="text-blue-500">SkyConnect</span>{' '}
    <span className="text-cyan-500">Explorer</span>
  </h1>
)

export default Title
