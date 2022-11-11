export default function StatBar({
  class: clazz,
  value: value,
  color: color,
  children,
}) {
  return (
    <div class="mx-3 grid grid-cols-5 gap-x-2 text-right">
      <div class="col-span-1 grid  grid-cols-2 gap-x-2  divide-x text-right">
        <div class="text-bold col-span-1 text-xs" style={`color: ${color}; `}>
          {children}
        </div>
        <div class="col-span-1 text-center text-xs">{value}</div>
      </div>
      <div class="col-span-4 flex flex-col">
        <div class=" my-auto ">
          <div class="mx-4 h-1 rounded-md bg-gray-200">
            <div
              class=" h-1 rounded-l-md"
              style={`background-color: ${color}; width: ${
                (value * 100) / 255
              }%;`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
