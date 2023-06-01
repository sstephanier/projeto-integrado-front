export const goToLogin = (navigate) => {
    navigate("/")
}
export const goToSignup = (navigate) => {
    navigate("/signup")
}
export const goToPost = (navigate) => {
    navigate(`/posts`)
}
export const goToComments = (navigate, id) => {
    navigate(`/comments/${id}`)
}