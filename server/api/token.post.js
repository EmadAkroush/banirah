export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase } } = useRuntimeConfig()
    // const token = getCookie(event, 'token');
  console.log("dddddd" , body);
  
    try {
        const data = await $fetch(`${apiBase}/workflow/oauth2/token`, {
            method: 'POST',
            body: body,
            headers: {
              'Accept': 'application/json'
            }
        })
       
        
        return data;
    } catch (error) {
        console.log("go" , error);
        
        return error
    }
})