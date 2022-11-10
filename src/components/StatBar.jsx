export default function StatBar({ class: clazz }) {
  return (
    <div class="mx-4 h-1 bg-gray-200">
        <div
          class=" h-1 bg-red-600 "
          style={clazz}
        ></div>
      </div>
  )
}
