import React from "react"
import { useEffect, useState } from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import {getCurrentStatus} from "../utils/interact.js"
import Box from "@mui/material/Box"
import Minter from "./minter"



const Status = () => {

    const [isPaused, setIsPaused] = useState("");
    const [totalMinted, setTotalMinted] = useState("");

    useEffect(() => {
        async function fetchData(){
          const {isPaused, totalMinted} = await getCurrentStatus();
          setIsPaused(isPaused);
          setTotalMinted(totalMinted)
        }
        fetchData();
    },[]);


    return (
    <Container>
        <Grid
            container
            sx={{ 
                display: "flex", 
                justifyContent: "center",
                marginTop: { xs: 0, md: 3 }, 
            }}
        >

        <Grid
          item
          xs={8}
          sm={6}
          md={4}
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(150, 150, 150, 0.25)",
            border: "2px solid #000",
            borderRadius: 4,
          }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontFamily: "Gagalin",
                }}
            >
                 {!isPaused ? (
                    <>
                    <span style={{color: "white", textShadow: "2px 2px green"}}>MINT NOW!</span>
                    </>
                ) : (
                    <span style={{color: "white", textShadow: "2px 2px red"}}>MINTING CLOSED!</span>
                )}
            </Typography>


            <Box
                sx={{
                    marginY: 1
                }}
            >
                <Minter/>
            </Box>


            <Typography
                sx={{
                color: "white",
                fontFamily: "Cooper Hewitt",
                }}
            >
                <span style={{color: "white", textShadow: "2px 2px black"}}>Minted {totalMinted} Dummie's out of 3,333</span>
            </Typography>
        </Grid>

      </Grid>

    </Container>
    );
}

export default Status;