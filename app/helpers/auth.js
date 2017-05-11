export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Glenn Espinosa',
        avatar: 'http://gespinosa.org/assets/images/avatar@2x.png',
        uid: 'glennespinosa',
      })
    }, 2000)
  })
}
