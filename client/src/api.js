export async function getVans(id) {
  const url = id ? `https://vanlife-backend.onrender.com/api/vans/${id}` : "https://vanlife-backend.onrender.com/api/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `https://vanlife-backend.onrender.com/api/host/vans/${id}` : "https://vanlife-backend.onrender.com/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("https://vanlife-backend.onrender.com/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
