import { TabProps } from '../../typings/Tab'

export const Tab = ({ active, children, label }: TabProps) => {
  if (!children || !label) {
    throw new Error('You must specify a label and a children for Tab')
  }

  return <> {active ? children : <></>} </>
}
