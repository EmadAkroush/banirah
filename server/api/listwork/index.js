export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const tokenbanirah = getCookie(event, 'tokenbanirah')

    try {
        const data = await $fetch(`${apiBase}/workflow/cases/participated/paged?start=1&limit=100`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenbanirah}`
            }
        });
        console.log("datam" , data );

        return data.data;
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