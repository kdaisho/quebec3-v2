const getPostsPath = page => {
  return page === 0 ? '/posts' : `/posts/${page + 1}`
}

module.exports = {
  getPostsPath,
}
