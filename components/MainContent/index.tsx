import { Chart } from '../Chart'
import { WeekNav } from '../WeekNav'
import { MainContentContainer } from './styeles'

export function MainContent() {
  return (
    <MainContentContainer>
      <WeekNav />
      <Chart />
    </MainContentContainer>
  )
}
