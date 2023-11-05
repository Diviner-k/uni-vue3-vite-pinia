// 主包
const mainPackage = {
  index: '/pages/index/index',
  user: '/pages/index/user',
  publishInfo: '/pages/publishInfo/index',
  petDetails: '/pages/petDetails/index',
}

// 分包
const subPackage = {
  subIndex: '/package-sub/pages/index/index',
}

const pages = {
  ...mainPackage,
  ...subPackage,
}

export default pages
