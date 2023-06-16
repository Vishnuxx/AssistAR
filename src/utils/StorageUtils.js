


export function saveToken(token) {
    localStorage.setItem("token", token);
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function getToken() {
    return localStorage.getItem("token")
}


export function savetUid(uid) {
  localStorage.setItem("uid", uid);
}

export function removeUid() {
  localStorage.removeItem("uid");
}

export function getUid() {
  return localStorage.getItem("uid");
}