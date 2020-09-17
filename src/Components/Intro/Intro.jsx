import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './Intro.module.css'

function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.inside}>
            <Typography className={styles.name} variant={'h1'}>
                Gemry Bulante
            </Typography>
            <Typography className={styles.subName} variant="h5">
                Web Developer
            </Typography>
            </div>
        </div>
    )
}

export default Intro
