import { makeStyles } from '@material-ui/core'

export const useStyleForm = makeStyles({
  formControl: {
    display: 'flex',
  },
  formIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  iconButton: {
    fontSize: 15,
    borderRadius: 3,
  },
  input: {
    display: 'none',
  },
})

export const useStyleCard = makeStyles({
  buttonEditDelete: {
    borderRadius: 4,
    margin: '0 5px',
  },
})
