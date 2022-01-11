import styled from 'styled-components'
// components
import { TableHead, TableBody, TablePagination } from 'components'

export const Table = ({ tableHeaderComponent, tableFooterComponent, columns, rows, pagination }) => {
  return (
    <>
      {tableHeaderComponent}
      <StyledTable className="table table-light">
        <TableHead columns={columns} />
        <TableBody columns={columns} rows={rows} />
        {pagination && <TablePagination pagination={pagination} />}
      </StyledTable>
      {tableFooterComponent}
    </>
  )
}

const StyledTable = styled.table`
  --bs-table-bg: transparent;
  width: 100%;

  & > :not(caption) > * > * {
    border-bottom-width: 0;
  }

  & > :not(:first-child) {
    border: none;
  }

  th {
    /* font-family: Poppins; */
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    color: #808080;
    /* padding: 17px 10px 15px; */
  }

  td {
    height: 73px;
    //line-height: 73px;
    color: #0f0e0e;
  }

  tr {
    font-size: 16px;
    font-weight: 600;
    vertical-align: middle;
    color: #0f0e0e;
    justify-content: normal;

    th:first-child,
    td:first-child {
      padding-left: 2rem;
    }
  }

  tbody tr:hover {
    border-left: 4px solid #4501d4;
  }

  tbody tr:hover td {
    background-color: #f9f9f9;
  }
`
