import { TabProps } from '../../typings/Tab'

export const Tab = ({ active, children }: TabProps) => {
  if (!children) {
    throw new Error('Tab has no children')
  }

  return <> {active ? children : <></>} </>
}
