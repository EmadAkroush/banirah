export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const tokennew = getCookie(event, 'tokennew');
    const body = await readBody(event);

    // Extract the `id` parameter from the URL
    const { id } = getRouterParams(event);

    try {
        const data = await $fetch(`${apiBase}/api/1.0/users/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokennew}`
            }
        });
        console.log("ffff", data);

        return data;
    } catch (error) {
        return error;
    }
});