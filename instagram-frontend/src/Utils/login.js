export default function saveUserInfoOnLocalStorage(response) {
    const { data } = response
    const userId = data.data._id
    const userName = data.data.username

    localStorage.setItem('InstagramUserId', userId)
    localStorage.setItem('InstagramUserName', userName)
}