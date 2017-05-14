export default function auth () {
  return new Promise((resolve, reject) => {
    const resolvePromise = true

    if (resolvePromise) {
      setTimeout(() => {
        resolve({
          name: 'Glenn Espinosa',
          avatar: 'http://gespinosa.org/assets/images/avatar@2x.png',
          uid: 'glennespinosa',
        })
      }, 2000)
    } else {
      reject({
        msg: 'Something went wrong with authentication!'
      })
    }
  })
}

export function checkIfAuthed (store) {
  // ignore Firebase
  return store.getState().isAuthed
}

export function logout () {
  console.log('LOGGED OUT!')
}
