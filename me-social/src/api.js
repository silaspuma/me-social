// Simple localStorage "database"
const db = {
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  posts: JSON.parse(localStorage.getItem("posts") || "[]"),
  session: JSON.parse(localStorage.getItem("session") || "null"),
};

function save() {
  localStorage.setItem("users", JSON.stringify(db.users));
  localStorage.setItem("posts", JSON.stringify(db.posts));
  localStorage.setItem("session", JSON.stringify(db.session));
}

export function signup(user) {
  db.users.push(user);
  save();
  return user;
}

export function login(username, password) {
  const u = db.users.find(x => x.username === username && x.password === password);
  if (u) {
    db.session = u;
    save();
    return u;
  }
  return null;
}

export function logout() {
  db.session = null;
  save();
}

export function getSession() {
  return db.session;
}

export function addPost(post) {
  db.posts.unshift(post);
  save();
}

export function getPosts() {
  return db.posts;
}

export function verifyUser(username) {
  const u = db.users.find(x => x.username === username);
  if (u) {
    u.verified = true;
    save();
  }
}
