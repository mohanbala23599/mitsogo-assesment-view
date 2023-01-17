import React from "react";
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import './sh-datagrid.css';
const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
        backgroundColor: theme.palette.grey[200],
        '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&.Mui-selected': {
            backgroundColor: alpha(
                theme.palette.primary.main,
                ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY +
                    theme.palette.action.selectedOpacity +
                    theme.palette.action.hoverOpacity,
                ),
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        ODD_OPACITY + theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
        '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
            borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
                }`,
        },
        '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
            borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
                }`,
        },
        '& .MuiDataGrid-cell': {
            color:
                theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
        },
        '& .MuiPaginationItem-root': {
            borderRadius: 0,
        },
    },
}));

const ShDataGrid = React.memo((props) => {
    const [pageSize, setPageSize] = React.useState(10);
    return (
        <>
            <Grid
                container
                justifyContent={{ xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'center' }}
                alignItems="center"
            >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className='grid-cmn-class' style={{ height: props.valueht === undefined ? props.normalgridheight === true ? '300px' : 'calc(100vh - 195px)' : props.valueht }}>
                        <StripedDataGrid
                            rows={props.rows}
                            className={props.hideHeader ? 'hide-header' : ''}
                            columns={props.columns}
                            pageSize={pageSize}
                            autoHeight={props.autoHeight}
                            headerHeight={props.hideHeader ? 1 : 56}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            rowsPerPageOptions={[5, 10, 15]}
                            pagination
                            hideFooter={props.hideFooter}
                            checkboxSelection={props.showCheckBox}
                            disableSelectionOnClick
                            onSelectionModelChange={(ids) => props.checkBoxSelected(ids)}
                            getRowClassName={(params) =>
                                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                            }
                            onRowClick={(params, event) => props.rowClick(params, event)
                            }
                            getRowHeight={() => {
                                if (props.rowHeightAuto) {
                                    return 'auto'
                                }
                            }}
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    )
})

export default ShDataGrid