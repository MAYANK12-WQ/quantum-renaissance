'use client'

import dynamic from 'next/dynamic'

const NeuralNetworkCanvas = dynamic(
  () => import('./NeuralNetworkCanvas'),
  { ssr: false }
)

export default function NeuralNetworkWrapper() {
  return <NeuralNetworkCanvas />
}
