import { Typography, Stack, Grid, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import { Container } from "@mui/material";

const Leaderboard = () => {
  return (
    <>
      <Container style={{marginTop:"10%"}}>
        <Grid item xs={12} sm={6}>
          <Stack direction="row" flexWrap="wrap" spacing={10}>
            <Box
              sx={{
                height: "190px",
                width: "230px",
                border: "2px solid #C4C4C4",
                background: "#FFFFFF",
                padding: "20px",
                ml: 10,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "94px",
                  width: "97px",
                  border: "2px solid #ffffff",
                  borderRadius: "50%",
                  background: "#C4C4C4",
                  p: 1,
                  m: 1,
                  ml: 6.6,
                }}
              ></Box>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Answers: 220 Question: 220
              </Typography>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Skills: Flutter | React Native{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "190px",
                width: "230px",
                border: "2px solid #C4C4C4",
                background: "#FFFFFF",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  height: "94px",
                  width: "97px",
                  border: "2px solid #ffffff",
                  borderRadius: "50%",
                  background: "#C4C4C4",
                  p: 1,
                  m: 1,
                  ml: 6.6,
                }}
              ></Box>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Answers: 220 Question: 220
              </Typography>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Skills: Flutter | React Native{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "190px",
                width: "230px",
                border: "2px solid #C4C4C4",
                background: "#FFFFFF",
                padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "94px",
                  width: "97px",
                  border: "2px solid #ffffff",
                  borderRadius: "50%",
                  background: "#C4C4C4",
                  p: 1,
                  m: 1,
                  ml: 6.6,
                }}
              ></Box>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Answers: 220 Question: 220
              </Typography>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Skills: Flutter | React Native{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "190px",
                width: "230px",
                border: "2px solid #C4C4C4",
                background: "#FFFFFF",
                padding: "20px",
                mt: 5,
              }}
            >
              <Box
                sx={{
                  height: "94px",
                  width: "97px",
                  border: "2px solid #ffffff",
                  borderRadius: "50%",
                  background: "#C4C4C4",
                  p: 1,
                  m: 1,
                  ml: 6.6,
                }}
              ></Box>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Answers: 220 Question: 220
              </Typography>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Skills: Flutter | React Native{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "190px",
                width: "230px",
                border: "2px solid #C4C4C4",
                background: "#FFFFFF",
                padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "94px",
                  width: "97px",
                  border: "2px solid #ffffff",
                  borderRadius: "50%",
                  background: "#C4C4C4",
                  p: 1,
                  m: 1,
                  ml: 6.6,
                }}
              ></Box>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Answers: 220 Question: 220
              </Typography>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Skills: Flutter | React Native{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "190px",
                width: "230px",
                border: "2px solid #C4C4C4",
                background: "#FFFFFF",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  height: "94px",
                  width: "97px",
                  border: "2px solid #ffffff",
                  borderRadius: "50%",
                  background: "#C4C4C4",
                  p: 1,
                  m: 1,
                  ml: 6.6,
                }}
              ></Box>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Answers: 220 Question: 220
              </Typography>
              <Typography variant="subtitle1" ml={1} mb={1} mt={1}>
                Skills: Flutter | React Native{" "}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Container>
    </>
  );
};

export default Leaderboard;

// import React from "react";
// import BountyWinners from "../components/BountyWinners";
// import { Container } from "@mui/material";

// export default function Leaderboard() {
//   return (
//     <div>
//       <Container>
//         <BountyWinners />
//       </Container>
//     </div>
//   );
// }
