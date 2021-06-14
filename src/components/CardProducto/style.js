import { makeStyles } from '@material-ui/core'

export const useStyleForm = makeStyles({
  formControl: {
    display: 'flex',
    marginBottom: 15,
  },
  formIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  iconButton: {
    fontSize: 15,
    borderRadius: 3,
    margin: '0 5px',
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
