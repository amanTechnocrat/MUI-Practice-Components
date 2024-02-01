import React, { useState } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button } from '@mui/material'

const Muidialog = () => {
    const [open, setopen] = useState(false);
    return (
        <>
            <Button onClick={() => setopen(true)}>Open Dialog</Button>
            <Dialog open={open} onClose={() => setopen(false)}>
                <DialogTitle>Submit Test?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are sure you wanna submit? You can't edit after once it submit
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setopen(false)}>Cancel</Button>
                    <Button onClick={() => setopen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Muidialog