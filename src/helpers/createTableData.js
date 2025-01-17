export const createTableData = (arr) => {
  const tableData = arr ? [...arr.results].reverse() : []

  return tableData
}