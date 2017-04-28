import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        Written by <strong>{config.authorName}</strong> who lives and works in Austin with his girlfriend and their dog.
      </p>
    )
  }
}

export default Bio
