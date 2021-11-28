const getPath = (path, page) => {
  return page === 0 ? path : `${path}/${page + 1}`
}

module.exports = {
  getPath,
}
