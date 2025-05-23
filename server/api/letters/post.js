export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const tokennew = getCookie(event, 'tokennew')
    const body = await readBody(event)

    try {
        const data = await $fetch(`${apiBase}/api/1.0/process_events/2?event=StartEvent_1`, {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokennew}`
            }
        });
    
console.log("data" , data);

        return data;
    } catch (error) {
  
        return error
    }
})