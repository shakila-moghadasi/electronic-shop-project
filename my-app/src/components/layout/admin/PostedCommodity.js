import { useRef, useState } from "react";
import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Modal
} from "@mui/material";
import { useFetch } from "../../admin/UseFetch";
import Link from '@mui/material/Link';
import ModalPostedOrders from "../../admin/ModalPostedOrders";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function PostedCommodity() {
    const limit = useRef(4);
    const [id , setid] = useState(null);
    const [open, setOpen] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const {data , loading , error } = useFetch(
        `/orders?orderStatus=1&_page=${activePage}&_limit=${limit.current}}`
    );
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    if (error) {
      return (
        <>
          <Typography variant="body1">ERROR - Typography Body1</Typography>
          <Typography variant="body2">ERROR - Typography Body2</Typography>
        </>
      );
    }


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginInline: 2,
        pt:3
      }}
    >
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, minHeight: 150 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>نام</TableCell>
              <TableCell>قیمت تمام شده</TableCell>
              <TableCell> زمان ارسال سفارش</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ position: "relative" }}>
            {loading ? (
              <Box
                sx={{
                  position: "absolute",
                  background: "#fafafa",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <>
                {data.data.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{`${record.customerDetail.firstName} ${record.customerDetail.lastName}`}</TableCell>
                    <TableCell>{`${record.amount}$`}</TableCell>
                    <TableCell>{record.orderDate}</TableCell>
                    <TableCell>
                      <Link                           
                        onClick={() => {
                          setid(record.id)
                          setOpen(true)
                          }
                        }
                      >
                        چک کردن سفارشات
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <ModalPostedOrders id={id}/>
      </Box>
      </Modal>

      <Pagination
        variant="outlined"
        defaultPage={1}
        page={activePage}
        count={Math.ceil(data?.headers["x-total-count"] / limit)}
        onChange={(_, page) => {
          console.log("page:", page);
          setActivePage(page);
        }}
      />
    </Box>
  );
}