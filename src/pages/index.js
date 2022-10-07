import * as React from "react"
import { Script } from "gatsby"

const IndexPage = () => {
  
  return (
    <main>
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=key"
        strategy='off-main-thread'
      />
      Script should load but it doesn't as the key param isnt parsed
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
