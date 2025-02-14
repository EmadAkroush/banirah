export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const tokenbanirah = getCookie(event, 'tokenbanirah')

    try {
        const data = await $fetch(`${apiBase}/workflow/cases?cat_uid=45678988166ddc589c48db6040626440`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenbanirah}`
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