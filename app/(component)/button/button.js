import Link from 'next/link'
import React from 'react'

export default function Button(proops) {
  return (
    <>
            <button   className={proops.CN}>{proops.title}</button>

    </>
  )
}
