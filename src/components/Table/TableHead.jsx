export const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.prop}>{column.label}</th>
        ))}
      </tr>
    </thead>
  )
}
