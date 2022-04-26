export const getError = (err) => {
  console.log(err)
  return err.res && err.res.data.message
    ? err.res.data.message
    : err.message

}
