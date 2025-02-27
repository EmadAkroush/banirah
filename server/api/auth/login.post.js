export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { public: { apiBase } } = useRuntimeConfig()
    
    try {
        const data = await $fetch(`http://85.198.21.72:81/workflow/oauth2/token` , {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'application/json',
            }
        })
        
        setCookie(event, 'token', data, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/'
        })

        
        return data.data.user;
    } catch (error) {
        return error
    }
})