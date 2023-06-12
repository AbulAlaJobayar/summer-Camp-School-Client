// save a user to mongodb
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name:user.displayName,
    image:user.photoURL,
    role:"student"
  };

  fetch(`http://localhost:5000/users/${user.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// become a moderator
export const moderator = (email) => {
  const currentUser = {
    role: "host",
  };

  return fetch(`http://localhost:5000/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// Get role
export const getRole = async (email) => {
  const response = await fetch(`http://localhost:5000/users/${email}`);
  const user = await response.json();
  return user?.role;
};
