import React from 'react'

export const TableBody = ({ rows, columns }) => {
  console.log(`rows`, rows)
  if (!rows) return null

  return rows?.map((row) => (
    <tr key={row.id}>
      {columns?.map((column, index) => {
        return React.isValidElement(row[column.prop]) ? (
          <React.Fragment key={`column-${index}`}>{row[column.prop]}</React.Fragment>
        ) : (
          <td key={`column-${index}`}>{column.format ? column.format(row[column.prop]) : row[column.prop]}</td>
        )
      })}
    </tr>
  ))
}
