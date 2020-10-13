import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'

export default function ServiceWorkerTab() {
    return (
        <Grid 
            container 
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid xs={6} item>
                <TextField />
                <Button />
            </Grid>
        </Grid>
    )
}
