import * as React from 'react'

import { AudioBlock } from 'notion-types'
import { useNotionContext } from '../context'
import { cs } from '../utils'

export const Audio: React.FC<{
  block: AudioBlock
  blockId: string
  className?: string
}> = ({ block, blockId, className }) => {
  const { recordMap } = useNotionContext()
  const source =
    recordMap.signed_urls[block.id] || block.properties?.source?.[0]?.[0]

  return (
    <div id={blockId} className={cs('notion-audio', className)}>
      <audio controls preload='none' src={source} />
    </div>
  )
}
