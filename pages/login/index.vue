<template>
  <div class="general p-6">
    <div class="flex items-center justify-center h-screen">
      <div class="p-8 bg-white rounded-lg w-full max-w-md">
        <div class="flex justify-center mb-6">
          <!-- Replace with your actual logo -->
          <img src="../../public/logo-12.png" alt="Logo" />
        </div>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
              >نام کاربری</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <InputText
                id="username"
                v-model="form.username"
                placeholder="نام کاربری"
                class="block w-full"
              />
            </div>
          </div>
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >رمز عبور</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <InputText
                id="password"
                v-model="form.password"
                type="password"
                placeholder="رمز عبور"
                class="block w-full"
              />
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <Button
              label="ورود"
              type="submit"
              class="mt-2 w-full"
              style="background-color: #246020; border: none"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false, // This will disable the layout
});
</script>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      data: null,
    };
  },
  methods: {
    async handleSubmit() {
      try {
       
        this.data = await $fetch("/api/auth/login" ,{
          method: "POST",
        });
        // داده‌ای که از API دریافت کردید
      } catch (error) {
        console.log(error);
      } finally {
       
        console.log("api", this.data);
      }
      // this.$router.push('/');
      // const data = await this.$axios.post(`${apiBase}/oauth/token`({
      //       grant_type: 'client_credentials', // OAuth2 grant type
      //       client_id: 6,
      //       client_secret: "UAY60FJqmWqkEc2ElQIC7cxo8AJ7h8gJBR4kKLe5",
      //   }), {
      //       headers: {
      //           'Content-Type': 'application/x-www-form-urlencoded',
      //       }
      //   });
    },
  },
  beforeMount() {
    this.handleSubmit();
  },
};
</script>

<style lang="scss">
.general {
  min-height: 100vh;

  .sec1 {
    display: flex;
    justify-content: space-between;
    .pic {
      width: 24px;
      height: 24px;
    }

    .text {
      font-size: 14px;
      color: #686f77;
    }
    .text-right {
      color: #1f2937;
      font-size: 20px;
      font-weight: 700px;
    }
  }
  .cardmy {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .cardout {
    box-shadow: 0px 0px 12px 0px #0000000f;
    // padding: 60px 0;
    .text-buttom {
      font-weight: 400;
      font-size: 16px;
      color: #1f2937;
    }
  }
  .in1 {
    background-color: #ffeded;
    border-radius: 50%;
  }
  .in2 {
    background-color: #f6fde7;
    border-radius: 50%;
  }
  .in3 {
    background-color: #fffaef;
    border-radius: 50%;
  }
  .in4 {
    background-color: #e5f8f9;
    border-radius: 50%;
  }
  .in5 {
    background-color: #eef2ff;
    border-radius: 50%;
  }
  .in6 {
    background-color: #f6fde7;
    border-radius: 50%;
  }

  .c2:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    background: linear-gradient(48.55deg, #fdfdfd -1.31%, #f2f8ff 106.19%);
    background: linear-gradient(48.55deg, #fdfdfd -1.31%, #f2f8ff 106.19%);
    background: linear-gradient(48.55deg, #fdfdfd -1.31%, #f2f8ff 106.19%);
    .in2 {
      background-color: #93cc1a;
      path {
        stroke: white;
      }
    }
  }
  .c3:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    .in3 {
      background-color: #f2a002;
      path {
        stroke: white;
      }
    }
  }
  .c4:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    .in4 {
      background-color: #3cafb6;
      path {
        stroke: white;
      }
    }
  }
  .c5:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    .in5 {
      background-color: #6366f1;
      path {
        stroke: white;
      }
    }
  }
  .c6:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    .in6 {
      background-color: #93cc1a;
      path {
        stroke: white;
      }
    }
  }
  .c7:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
  }
  .c8:hover {
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
  }
  .card-bar {
    width: 99%;
    .down-date {
      font-size: 12px;
      font-weight: 400;
    }
    .left {
      background: #f9fafb;
      color: #6b7280;
      width: 161px;
      height: 36px;
      font-size: 14px;
      font-weight: 400px;
      border-radius: 100px;
    }
    .right {
      background: #f9fafb;
      color: #22c55e;
      width: 102px;
      height: 36px;
      font-size: 14px;
      font-weight: 400px;
      border-radius: 100px;
    }
    .one {
      color: #1f2937;
      font-size: 18px;
      font-weight: 400;
    }
    .tow {
      color: #1f2937;
      font-size: 18px;
      font-weight: 400;
    }
  }
}
</style>
