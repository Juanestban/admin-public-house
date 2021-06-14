import { Card, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    margin: '0 5px',
    minWidth: '40%',
  },
})

export const CardSecondary = ({ children }) => {
  const classes = useStyles()

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
