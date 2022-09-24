import { useRef , useState , useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
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
  ImageListItem,
  Modal,
  Stack
} from "@mui/material";
import ModalAdd from "../../admin/ModalAdd";
import ModalEdit from "../../admin/ModalEdit";
import { useFetch } from "../../admin/UseFetch";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Managementcommodity() {
    const [id , setid] = useState(null);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const limit = useRef(3);
    const { data, loading, error } = useFetch(
        `/products?_page=${activePage}&_limit=${limit.current}}`
    );


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClose1 = () => setOpen1(false);

  
    if (error) {
      return (
        <>
          <Typography variant="body1">ERROR - Typography Body1</Typography>
          <Typography variant="body2">ERROR - Typography Body2</Typography>
        </>
      );
    }
    
    return (
      <>
      <Box>
      <Stack direction="row" sx={{pt:5 , pl:1.5}}>
        <Button sx={{backgroundColor: '#90EE90'}} onClick={handleOpen}>Add Commodity</Button>
      </Stack>  
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ModalAdd/>
          </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginInline: 2,
          pt:5
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
                <TableCell>Picture</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>price</TableCell>
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
                  {data.data.map((record , index) => (
                    <TableRow key={record.id}>
                      <TableCell>
                          <ImageListItem sx={{ width: 100, height: 100 }}>
                            <img
                              src={`http://localhost:3002/files/${record.image}`}
                            />
                          </ImageListItem>
                      </TableCell>
                      <TableCell>{record.title}</TableCell>
                      <TableCell>{record.price}</TableCell>
                      <TableCell>
                          <Button 
                            onClick={() => {
                              setid(record.id)
                              setOpen1(true)
                              }
                            }
                            >
                            Edit
                          </Button>
                          <Button
                            onClick={(e) => {
                              e.target.parentNode.parentNode.parentNode.deleteRow(index)
                              axios.delete(
                                `http://localhost:3002/products/${record.id}`
                              )
                            }}
                          >
                            Delete
                          </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <ModalEdit id={id}/>
        </Box>
        </Modal>
        
        <Pagination
          variant="outlined"
          defaultPage={1}
          page={activePage}
          count={Math.ceil(data?.headers["x-total-count"] / limit)}
          onChange={(_, page) => {
            setActivePage(page);
          }}
        />
      </Box>
      </Box>
      </>
    );
}