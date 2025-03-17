// export default defineEventHandler(async (event) => {
//     const { public: { apiBase } } = useRuntimeConfig()
//     const token = getCookie(event, 'token');

//     try {
//         const data = await $fetch(`${apiBase}/api/me`, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             }
//         })

//         return data.user;
//     } catch (error) {
//         if(error.statusCode == 401) {
//             setCookie(event, 'token', '', {
//                 httpOnly: true,
//                 secure: true,
//                 maxAge: new Date(0),
//                 path: '/'
//             })
//         }

//         return error
//     }
// })


import axios from 'axios';
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { public: { apiBase } } = useRuntimeConfig()
    const tokennew = getCookie(event, 'tokennew');
    try {
       
        const data = await axios.post(`${apiBase}/oauth/token`, 
            new URLSearchParams({
              grant_type: 'client_credentials',
              client_id: 6,
              refresh_token: `${newtoken}`,
              client_secret: 'UAY60FJqmWqkEc2ElQIC7cxo8AJ7h8gJBR4kKLe5',

            }), {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            });
          // Log the full response to inspect it
          console.log("me ", tokennew);
        
        
        // setCookie(event, 'tokennew', data.data.access_token, {
        //     httpOnly: true,
        //     secure: true,
        //     maxAge: 60 * 60 * 24 * 7, // 1 week
        //     path: '/'
        // })

        
        return data;
    } catch (error) {
        return error
    }
})












