export const useTransformBase64 = () => {
  const getBase64FromFile = (img, callback) => {
    const fileReader = new FileReader()
    fileReader.addEventListener('load', () => {
      callback(fileReader.result)
    })
    fileReader.readAsDataURL(img)
  }

  return getBase64FromFile
}
