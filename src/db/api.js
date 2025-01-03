export const login = async (body) => {
  const { username, password } = body;
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    const response = {
      status: res.status || 500,
      data: data,
    };
    return response;
  } catch (err) {
    return err.error;
  }
};

export const registerUser = async (body) => {
  const { username, password } = body;
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();

    const response = {
      status: res.status,
      data: data,
    };

    // create a new error handler
    if (!res.ok) {
      throw new Error(`Failed to register: ${res.statusText}`);
    }

    console.log("here res", res);
    return response;
  } catch (err) {
    console.log(err);
    return err.error;
  }
};
