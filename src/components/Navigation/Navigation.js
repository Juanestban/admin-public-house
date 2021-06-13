import { useHistory } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

export const Navigation = () => {
  const history = useHistory()
  const classes = useStyles()

  const navigation = (path) => history.push(path)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Public house - admin
          </Typography>
          <Button onClick={() => navigation('/')}>Inicio</Button>
          <Button onClick={() => navigation('/login')}>Login</Button>
          <Button onClick={() => navigation('/login')}>Cerrar sesión</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
