import axios from "axios";
export default defineEventHandler(async (event) => {
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const tokennew = getCookie(event, "tokennew");
  // const body = await readBody(event);
  const { page } = getQuery(event);

  try {
    // const data = await $fetch(`${apiBase}/api/1.0/requests?order_direction=asc&per_page=10`, {
    //     headers: {
    //         'Accept': 'application/json',
    //         'Authorization': `Bearer ${tokennew}`
    //     }
    // });
    console.log("page" , page );
    const data = await $fetch(`${apiBase}/api/1.0/requests`, {
      method: 'GET',
      params: {
      page: page,
      per_page: 10,
      include: "process,participants,activeTasks,data",
      // pmql: "(requester%20%3D%20%22khojaste%22)",
      // filter: "",
      // order_by: "id",
      // order_direction: "DESC",
      // advanced_filter: "%5B%7B%22subject%22%3A%7B%22type%22%3A%22Status%22%7D%2C%22operator%22%3A%22%3D%22%2C%22value%22%3A%22In%20Progress%22%7D%5D",
      // row_format: ""
      },
      headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${tokennew}`
      }
    });
  
    
    return data;
  } catch (error) {
  

    return error;
  }
});
