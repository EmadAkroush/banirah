import axios from "axios";


export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;
  
  const {
    public: { apiBase },
  } = useRuntimeConfig();

  try {
  const data = await axios.post(
    `${apiBase}/oauth/token`,
    new URLSearchParams({
      grant_type: "password",
      client_id: 5,
      client_secret: "Dbg8FuRbMeuG4mwKWdBnBUY5UwiL4yn55zvfa19Q",
      username: username,
      password: password,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
    // Log the full response to inspect it
    console.log("dddd", data.data.access_token);
    console.log("refresh", data.data.refresh_token);

    setCookie(event, "tokennew", data.data.access_token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    setCookie(event, "refresh", data.data.refresh_token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return data.data.access_token;
  } catch (error) {
    return error;
  }
});
