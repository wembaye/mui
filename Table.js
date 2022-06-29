import React, { useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridVisibleSortedRowIdsSelector } from "@mui/x-data-grid";
import FormComponent from './ModalForm';
import style from './main.module.css';

const TableComponent = (props) => {

  const [state, setState] = useState(props.rows);
  const [selectedIds, setSelectedIds] = useState([]);
  const [visibleRows, setVisibleRows] = useState([]);

  const handleRowSelection = (ids) => {
    setSelectedIds(ids);
  };

  const filteringHandler = (filteredObj) => {
    const {items} = filteredObj;
    const [item] = items;
    const {value} = item;
    const filteredValues = state.filter(elem=>elem.firstName.startsWith(value))
    console.log(filteredValues, 'filteredValues')  
  }

  const sortingHandler = (model) => {
    if (model.length > 0) {
      const obj = model[0]
      const { field, sort } = obj;
      const sortingElem = { field: field }
      const sortData = [...state]
      if (sort === 'asc') {
        const sortedArray = sortData.sort((a, b) => (a[sortingElem.field] > b[sortingElem.field] ? 1 : -1))
        setState(sortedArray)
      } else if (sort === 'desc') {
        const sortedArray = sortData.sort((a, b) => (a[sortingElem.field] < b[sortingElem.field] ? 1 : -1))
        setState(sortedArray)
      } else {
        setState(sortData)
      }
    } else {
      return ''
    }
  }
  console.log(visibleRows, 'visiblerows')
  return (
    <div className={style.main}>
      {selectedIds.length > 0 ?
        <FormComponent data={state} selectedIds={selectedIds} /> : null
      }
      <DataGrid
        onSortModelChange={sortingHandler}
        onFilterModelChange={filteringHandler}
        onSelectionModelChange={handleRowSelection}
        rows={state}
        columns={props.columns}
        pageSize={10}
        rowsPerPageOptions={[10, 15, 20, 25]}
        components={{
          Toolbar: () => {
            return (<GridToolbarContainer sx={{ justifyContent: 'flex-end' }}>
              <GridToolbarExport />
            </GridToolbarContainer>)
          }
        }}
        checkboxSelection
        disableSelectionOnClick
        aria-label='test data'
      />

    </div>
  );
}

export default TableComponent;