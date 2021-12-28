import React from "react";
import "./ReactTable.scss";
import { useTable, useFilters, usePagination } from 'react-table';

function ReactTable({ columns, data, isDisabled }) {
    const {
        page,
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        setFilter
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 3 },
        },
        useFilters,
        usePagination,
    );
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <table className="table table-light" {...getTableProps()}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>

                            {page.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <tr className={isDisabled && `data_disable`} {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}

                                            </td>

                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div className="pagination" >
                        <div className="react_table_pagination">
                            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} style={{ backgroundColor: '#8B3496', color: '#fff', border: 'unset', borderBottomLeftRadius: 26, borderTopLeftRadius: 30, padding: 10, }}>
                                {'First'}
                            </button>{' '}
                            <button onClick={() => previousPage()} disabled={!canPreviousPage} style={{ backgroundColor: '#66276e', color: '#fff', border: 'unset' }}>
                                {'<'}
                            </button>{' '}
                            <button onClick={() => nextPage()} disabled={!canNextPage} style={{ backgroundColor: '#66276e', color: '#fff', border: 'unset' }}>
                                {'>'}
                            </button>{' '}
                            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} style={{ backgroundColor: '#8B3496', color: '#fff', border: 'unset', borderBottomRightRadius: 26, borderTopRightRadius: 30, padding: 10, }}>
                                {'Last'}
                            </button>{' '}
                            <span style={{ backgroundColor: '#66276e', color: '#fff' }}>
                                Page{' '}
                                <strong>
                                    {pageIndex + 1} of {pageOptions.length}
                                </strong>{' '}
                            </span>
                            <select style={{ backgroundColor: '#66276e', color: '#fff', borderBottomRightRadius: 26, borderTopRightRadius: 30, border: 'unset', outline: 'none', }}
                                value={pageSize}
                                onChange={e => {
                                    setPageSize(Number(e.target.value))
                                }}
                            >
                                {[5, 3, 6].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default ReactTable;

