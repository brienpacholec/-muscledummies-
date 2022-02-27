import React from "react"
import { useEffect, useState } from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import {getCurrentStatus} from "../utils/interact.js"
import Minter from "./minter"



const Status = () => {

    const [status, setStatus] = useState("");
    const [totalMinted, setTotalMinted] = useState("");

    useEffect(() => {
        async function fetchData(){
          const {status, totalMinted} = await getCurrentStatus();
          setStatus(status);
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
          xs={12}
          sm={6}
          sx={{
            textAlign: "center",
            backgroundColor: "background.paper",
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
                 {!status ? (
                    <>
                    <span style={{color: "green"}}>MINT NOW!</span>
                    <br/>
                    <Minter/>
                    </>
                ) : (
                    <span style={{color: "red"}}>MINTING CLOSED!</span>
                )}
            </Typography>

            <Typography
                sx={{
                color: "black",
                fontFamily: "Cooper Hewitt",
                }}
            >
                <span>Minted {totalMinted} Dummie's out of 3,333</span>
            </Typography>
        </Grid>

      </Grid>

    </Container>
    );
}

export default Status;