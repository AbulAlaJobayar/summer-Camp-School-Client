// save a user to mongodb
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name:user.displayName,
    image:user.photoURL,
    role:"student"
  };

  fetch(`https://assinment-12-server-ten.vercel.app/users/${user.email}`, {
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

  return fetch(`https://assinment-12-server-ten.vercel.app/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// Get role
export const getRole = async (email) => {
  const response = await fetch(`https://assinment-12-server-ten.vercel.app/users/${email}`);
  const user = await response.json();
  return user?.role;
};
