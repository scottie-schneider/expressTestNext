import React from 'react'
import Link from 'next/link'
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <link rel="manifest" href="/static/manifest.json" />
    </Head>
    <ul>
      <li><Link href='/b' as='/a'><a>a</a></Link></li>
      <li><Link href='/a' as='/b'><a>b</a></Link></li>
    </ul>
  </div>
  
)
