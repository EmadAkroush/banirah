<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<style>
html {
  direction: rtl;
  font-family: numregular;
}

@font-face {
  font-family: numregular;
  src: url(./public/font/Farsinumerals/Webfonts/Woff2/IRANSansXFaNum-Regular.woff2);
}

.vpd-input-group {
  height: 42px;
  border-radius: 8px;
}
</style>
<script>
export default {
  data() {
    return {
      data: null,
     
 
    };
  },

  methods: {
    async getapi() {
      try {
        this.data = await $fetch("/api/token", {
          method: "POST",
          body: { grant_type: "client_credentials", client_secret: "1372906256718bf3c3d0d16047067389" , client_id: "LABXQQKFVNSAOKMFAYIWZARFNUCAHHZV"  },
        });
      } catch (error) {
        // errors.value = Object.values(error.data.data.message).flat();
        console.log(error);
      } finally {
        console.log("ddd", this.data);
      }
    },

   
  },
  beforeMount() {
    this.getapi();
  },
};
</script>
