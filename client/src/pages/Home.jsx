import { Grid } from "@mui/material"
import HeaderImage from "../../componets/HeaderImage"
import SideBar from "../../componets/SideBar"
import Posts from "../../componets/Posts"

const Home = () => {
    return (
        <>
            <HeaderImage></HeaderImage>
            <Grid container>
                <Grid item lg={2} sm={2} xs={12}>
                    <SideBar></SideBar>
                </Grid>

                <Grid container item lg={10} sm={10} xs={12}>
                    <Posts></Posts>
                </Grid>
            </Grid>
        </>
    )
}

export default Home