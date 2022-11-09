import { twMerge } from 'tailwind-merge'
import { colors } from '../constants/color'

export default function Tag({ class: clazz, children }) {
  return (
    <span
      class="rounded-xl bg-gray-600 py-1 px-2 text-xs font-bold capitalize text-white"
      style={clazz}
    >
      {children}
    </span>
  )
}
