import { useHistory } from 'react-router-dom'
import { Box, IconButton } from '@material-ui/core'
import { ArrowBackIosRounded } from '@material-ui/icons'

export default function LayoutPrincipal({ children }) {
  const nav = useHistory()

  const handleNavigation = () => nav.push('/')
  return (
    <>
      <IconButton
        aria-label="arrow-back"
        color="secondary"
        onClick={handleNavigation}
      >
        <ArrowBackIosRounded fontSize="default" />
      </IconButton>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
      >
        {children}
      </Box>
    </>
  )
}
