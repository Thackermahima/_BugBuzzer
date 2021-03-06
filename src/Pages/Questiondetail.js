import React from "react";
import { Box, Typography, Grid, Avatar, Button, Stack } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";
import ArrowDownwardTwoToneIcon from "@mui/icons-material/ArrowDownwardTwoTone";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Questiondetail = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid align="center" mt={20}>
        <Box
          sx={{
            height: "50%",
            width: "50%",
            border: "2px solid black",
          }}
        >
          <Box
            sx={{
              height: "94px",
              width: "97px",
              border: "2px solid #ffffff",
              borderRadius: "50%",
              background: "#C4C4C4",
              marginRight: "500px",
              mt: 2,
              p: 2,
            }}
          >
            {" "}
            <span style={{ marginLeft: "150px" }}>Jack</span>
          </Box>
          <Typography color="black" mt={2}>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Facing error in writing smart contracts and integrating in Hardhat{" "}
            </span>{" "}
            <br />
          </Typography>
          <Typography mt={2} mb={2}>
            You are trying to run Hardhat outside of a Hardhat project. You can
            learn how to use Hardhat by reading the Getting Started guide.
            Hardhat doesn't support your Node.js version. Please upgrade your
            version of Node.js and try again. You are tying to perform an
            unsupported operation. Unless you are creating a task or plugin,
            this is probably a bug. Please report it (opens new window)to help
            us improve Hardhat.
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "#D82148",
            color: "white",
            textTransform: "capitalize",
            border: "2px solid #D82148",
            marginLeft: "580px",
            marginTop: "10px",
            fontWeight: "bold",
          }}
          sx={{ borderRadius: 2 }}
          onClick={handleOpen}
        >
          Write answer
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid align="center">
            <Box sx={style}>
              <TextareaAutosize
                required
                aria-label="minimum height"
                fullwidth
                minRows={6}
                placeholder="Write your answer here!"
                style={{
                  width: 350,
                  marginTop: "60px",
                }}
              />
              <br />{" "}
              <Button
                variant="contained"
                size="small"
                style={{
                  backgroundColor: "#D82148",
                  textTransform: "capitalize",
                  border: "2px solid #D82148",
                  fontWeight: "bold",
                }}
                sx={{ borderRadius: 2, mt: 5 }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Modal>
        <Box
          sx={{
            height: "50%",
            width: "48%",
            border: "2px solid black",
            mt: 2,
            p: 2,
          }}
        >
          <Typography>Answer1</Typography>
          <Stack direction="row" spacing={1}>
            <IconButton style={{ background: "#D82148", color:'white'}}>
            <ArrowUpwardTwoToneIcon />

            </IconButton>
            <IconButton style={{ background: "#D82148", color:'white'}}>
            <ArrowDownwardTwoToneIcon />
            </IconButton>
            <IconButton style={{ background: "#D82148", color:'white'}}>
            <ModeCommentOutlinedIcon />
            </IconButton>
    
              <Button
              variant="outlined"
              size="small"
              style={{
                backgroundColor: "#D82148",
                color: "white",
                textTransform: "capitalize",
                border: "2px solid #D82148",
                fontWeight: "bold",
                marginLeft: "448px",
              }}
              sx={{ borderRadius: 2 }}
            >
              Support
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            height: "50%",
            width: "48%",
            border: "2px solid black",
            mt: 2,
            p: 2,
          }}
        >
          <Typography>Answer1</Typography>
          <Stack direction="row" spacing={1}>
            <IconButton style={{ background: "#D82148", color:'white'}}>
            <ArrowUpwardTwoToneIcon />

            </IconButton>
            <IconButton style={{ background: "#D82148", color:'white'}}>
            <ArrowDownwardTwoToneIcon />
            </IconButton>
            <IconButton style={{ background: "#D82148", color:'white'}}>
            <ModeCommentOutlinedIcon />
            </IconButton>
    
              <Button
              variant="outlined"
              size="small"
              style={{
                backgroundColor: "#D82148",
                color: "white",
                textTransform: "capitalize",
                border: "2px solid #D82148",
                fontWeight: "bold",
                marginLeft: "448px",
              }}
              sx={{ borderRadius: 2 }}
            >
              Support
            </Button>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default Questiondetail;

// import React from "react";

// export default function Questiondetail(){
//     return(
//         <h1>Questiondetail</h1>
//     )
// }
