import {AppBar,Button,Stack,Toolbar,Typography} from "@mui/material"


const Navbar = () =>{
    return(
<AppBar >
    <Toolbar>
        <Typography  variant="h6"  sx={{flexGrow: 1, textAlign: "left" }} >Anitha</Typography>
        <Stack direction="row"  spacing={2}>
            <Button color="inherit">About</Button>
            <Button color="inherit">features</Button>
            <Button color="inherit">code</Button>
            <Button color="inherit">skills</Button>
        </Stack>
    </Toolbar>
</AppBar>
    )
}

export default Navbar