import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import SignIn from "./SignIn.jsx";
import {Card, CardActions, CardContent, CardHeader, CardMedia, Container, Divider, Grid, Grid2} from "@mui/material";

export default function ResponsiveDialog(props) {
    console.log(props.children)
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid2>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    {props.name}
                </Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                    back
                    PaperProps={{
                        style: {
                            boxShadow: 'none',
                        }
                    }}
                    slotProps={{
                        backdrop: {
                            style:{
                                background:'whitesmoke'
                            }
                        }
                    }}

                >

                    <DialogTitle id="responsive-dialog-title">
                        {props.name}
                    </DialogTitle>
                    <DialogContent>
                        {props.children}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </Grid2>
    );
}
