import { Grid } from '@material-ui/core'
import React from 'react'

export default function DefaultTab() {
    return (
        <Grid 
            container 
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid xs={6} item>
                Default Tab:
            </Grid>
        </Grid>
    )
}
