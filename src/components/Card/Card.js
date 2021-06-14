import { Link } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core'
import {
  CategoryOutlined,
  FastfoodOutlined,
  BallotRounded,
} from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    margin: '0 5px',
    minWidth: 250,
  },
  title: {
    fontSize: 20,
  },
})

export const CardDefault = ({ titulo = '', icon = 'Category', to = '/' }) => {
  const classes = useStyles()

  const switcherIcons = {
    Category: CategoryOutlined,
    Food: FastfoodOutlined,
    Ballot: BallotRounded,
  }

  const Icon = !switcherIcons[icon]
    ? switcherIcons['Category']
    : switcherIcons[icon]

  return (
    <Card variant="outlined" className={classes.root}>
      <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {titulo}
          </Typography>
          <Box display="flex" justifyContent="center" margin="10px 0">
            <Icon style={{ fontSize: 120 }} />
          </Box>
        </CardContent>
      </Link>
    </Card>
  )
}
