import React, { useState } from 'react'
import { Button, CircularProgress, Grid, TextField, Typography } from '@material-ui/core'

const centerGrid = {
    position: "absolute",
    left: '50%',
    top: '50%',
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)'
} as React.CSSProperties

const centerItem = {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
};

export default function ServiceWorkerTab() {
    const [value, setValue] = useState(5);
    const [loading, setLoading] = useState(true);
    const [fibonacciValue, setFibonacciValue] = useState<number| undefined>(undefined);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+event.target.value);
    };

    const handleClick = () => {
        setLoading(true);
        // TODO: Implement Fibonacci Sequence:
        // TODO: Await Service Worker Implementation
    }

    return (
        <Grid 
            container 
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid xs={6} item>
                <Typography>
                    This section is demonstating service workers. It offloads the fibonacci calculation in another thread. This results in the main event loop not being affected.
                    You can view this by comparing the loading "spinning animation" between this implementation & the default one.
                </Typography>
            </Grid>
            <Grid container style={centerGrid} direction="column"
            justify="center"
            alignItems="center">
                <Grid xs={6} item style={centerItem}>
                    <TextField value={value} onChange={handleChange} fullWidth/>
                </Grid>
                <Grid xs={6} item style={centerItem}>
                    <Button onClick={handleClick}  variant="contained">
                        Calculate Fibonacci!
                    </Button>
                </Grid>
                <Grid xs={6} item style={centerItem}>
                    <Typography>
                        The Fibonacci value is: {fibonacciValue}
                    </Typography>
                </Grid>
                <Grid xs={6} item style={centerItem}>
                    {loading ? <CircularProgress /> : null}
                </Grid>
            </Grid>
            
        </Grid>
    )
}
