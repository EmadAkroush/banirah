export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase } } = useRuntimeConfig()
    // const token = getCookie(event, 'token');

  
    try {
        const data = await $fetch(`${apiBase}/workflow/oauth2/token`, {
            method: 'POST',
            body: body,
            headers: {
              'Accept': 'application/json'
            }
        })

        
        setCookie(event, 'tokenbanirah', data.access_token, {
          httpOnly: true,
          secure: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: '/'
      })
     
      
      


      

       console.log("dgg" , data.access_token );
       

       
        
        return data;
    } catch (error) {
        console.log("go" , error);
        
        return error
    }
})