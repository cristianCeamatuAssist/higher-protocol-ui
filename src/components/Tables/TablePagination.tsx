import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { ReactComponent as CaretLeft } from 'assets/icons/CaretLeft.svg'
import { ReactComponent as CaretRight } from 'assets/icons/CaretRight.svg'
// components
import { IPagination } from 'components'
// utils
import { range } from 'utils'

interface IProps {
  pagination: IPagination
  hasResults: boolean
}

export const TablePagination = ({ pagination, hasResults }: IProps) => {
  const changePage = (page: string | number) => {
    pagination?.changePageHandler(page)
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    pagination.changeItemsPerPageHandler(e.target.value)
  }

  // variables
  const totalPages = hasResults ? Math.ceil(pagination.totalItems / pagination.itemsPerPage) : 0
  const { page, itemsPerPage, totalItems, changePageHandler } = pagination
  const lastOnPage = Math.min(itemsPerPage, totalItems)
  const firstOnPage = (page - 1) * itemsPerPage + 1
  const pageButtons = range(1, Math.min(3, totalPages))

  return (
    <StyledDiv>
      <p className="details">
        Showing {firstOnPage} to {lastOnPage} of {totalItems} entries
      </p>

      <CaretLeft width="12" height="12" onClick={() => page > 1 && changePage(page - 1)} />

      {pageButtons.map((pageNumber) => (
        <Button
          variant="secondary"
          className={pageNumber === page ? 'selected' : ''}
          disabled={pageNumber === page}
          key={pageNumber}
          onClick={() => changePageHandler(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}

      <CaretRight width="12" height="12"
        style={{ transform: 'rotate(180deg)' }}
        onClick={() => page < totalPages && changePageHandler(page + 1)}
      />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1em;

  > .details {
    color: #727279;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 0;
    margin-right: 1em;
  }

  > svg {
    cursor: pointer;
  }

  button {
    padding: 0;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    color: black;
    border: none;
    outline: none;
    background-color: transparent;
    box-shadow: none !important;

    &:not(.selected) {
      cursor: pointer;
    }

    &.selected {
      color: white;
      background-color: #4401d4;

      &:disabled {
        opacity: 1;
      }
    }
  }
`
