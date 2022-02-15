import * as React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { StaticImage } from "gatsby-plugin-image"

const DummieHero = () => {
    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>

            
           <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                <StaticImage
                    src="../images/mainDummie.png"
                    alt="Muscle Shaker"
                    placeholder="blurred"
                    layout="constrained"
                    imgStyle={{
                        marginTop: 30
                    }}
                />
                <StaticImage
                    src="../images/keeper.png"
                    alt="Muscle Shaker"
                    placeholder="blurred"
                    layout="constrained"
                />
                <StaticImage
                    src="../images/mainDummie.png"
                    alt="Muscle Shaker"
                    placeholder="blurred"
                    layout="constrained"
                    imgStyle={{
                        marginTop: 30
                    }}
                />
            </Box>

            <Box sx={{display: {xs: 'flex', md: 'none'}, }}>
                
                <StaticImage
                    src="../images/mainDummie.png"
                    alt="Muscle Shaker"
                    placeholder="blurred"
                    layout="constrained"
                />
            </Box>
           
                

        </Container>
    );
}
export default DummieHero