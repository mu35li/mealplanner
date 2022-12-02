import {mdiRefresh} from '@mdi/js'
import Icon from '@mdi/react'

type Props = {
  variant?: String
  onClick?: () => void
  icon?: string
}

export function Button(props: Props) {
  return (
    <button onClick={props.onClick} className="border border-gray-400 rounded hover:border-gray-300">
      <Icon
        path={mdiRefresh}
        color="green"
        size={1.5} />
    </button>
  )
}