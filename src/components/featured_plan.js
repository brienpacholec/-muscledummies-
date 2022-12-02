import React from "react"
import PropTypes from "prop-types"
import {
    Card,
    CardMedia,
    CardActionArea
} from "@mui/material"

const FeaturedPlan = ({ imgPath, url }) => {
    return (
        <div style={{ textAlign: "center", margin: 5 }}>
            <Card>
                <CardActionArea href={url}>
                    <div style={{ position: "relative" }}>
                        <CardMedia
                            component="img"
                            src={`../${imgPath}`}
                            alt="An image of an individual working out"
                            sx={{
                                width: {xs: 200, sm:300, md:400},
                                height: {xs: 300, sm:400, md: 500},
                                objectFit: "fill"
                            }}
                        />
                    </div>
                </CardActionArea>
            </Card>
        </div>
    )
}

FeaturedPlan.propTypes = {
    imgPath: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default FeaturedPlan
