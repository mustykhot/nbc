import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Pagination, PaginationItem, Stack } from "@mui/material";
function MarketPagination({ totalPages, currentPage, page, setPage }) {
  const Previous = () => (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ p: "0 0.5rem" }}
    >
      <ArrowBackIcon fontSize="small" />
    </Stack>
  );
  const Next = () => (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ p: "0 0.5rem" }}
    >
      <ArrowForwardIcon fontSize="small" />
    </Stack>
  );

  return (
    <>
      <div className="pagination-wrap">
        <Pagination
          color="primary"
          count={totalPages}
          page={page}
          onChange={(e, val) => setPage(val)}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: Previous,
                next: Next,
              }}
              {...item}
            />
          )}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
}

export default MarketPagination;
