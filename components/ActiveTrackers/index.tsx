import React from 'react'
import { ActiveTrackersContainer } from './styles'

export function ActiveTrackers() {
  return (
    <ActiveTrackersContainer>
      <h2>Active Trackers</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Minutes</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Study</td>
            <td>30</td>
            <td>#00ff00</td>
          </tr>
        </tbody>
      </table>
    </ActiveTrackersContainer>
  )
}
