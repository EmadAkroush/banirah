export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const tokennew = getCookie(event, 'tokennew')

    try {
        const data = await $fetch(`${apiBase}/api/1.0/users?order_direction=asc&per_page=10`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokennew}`
            }
        });
        console.log("datam" , data );

        return data;
    } catch (error) {
        if (error.statusCode == 401) {
            setCookie(event, 'token', '', {
                httpOnly: true,
                secure: true,
                expires: new Date(0),
                path: '/'
            })
        }

        return error
    }
})