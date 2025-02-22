<template>
  <div class="cartable p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">کارتابل</p>
        </div>
      </div>
      <div
        class="flex items-center justify-end align-center ml-4"
        style="width: 178px"
      >
        <div>
          <p class="ml-2">۱۷ اردیبهشت ۱۴۰۳</p>
        </div>
        <img src="/public/opration/Calender.svg" alt="" class="pic" />
      </div>
    </div>
    <div class="flex flex-row gap-x-3 mt-3">
      <div class="basis-1/6">
        <Card class="cardout c1" @click="showModal = true">
          <template #content>
            <div class="flex items-center justify-center cardmy">
              <div
                class="in1 in flex items-center justify-center"
                style="width: 76px; height: 76px"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1668 3.59375V10.1338C22.1668 11.0205 22.1668 11.4639 22.3393 11.8026C22.4911 12.1005 22.7334 12.3427 23.0313 12.4945C23.37 12.6671 23.8134 12.6671 24.7001 12.6671H31.2401M19.0001 28.5003V19.0003M14.2501 23.7503H23.7501M22.1668 3.16699H13.9334C11.2732 3.16699 9.94306 3.16699 8.92698 3.68471C8.03321 4.14011 7.30655 4.86677 6.85115 5.76054C6.33344 6.77662 6.33344 8.10674 6.33344 10.767V27.2337C6.33344 29.8939 6.33344 31.224 6.85115 32.2401C7.30655 33.1339 8.03321 33.8605 8.92698 34.3159C9.94306 34.8337 11.2732 34.8337 13.9334 34.8337H24.0668C26.727 34.8337 28.0571 34.8337 29.0732 34.3159C29.967 33.8605 30.6937 33.1339 31.1491 32.2401C31.6668 31.224 31.6668 29.8939 31.6668 27.2337V12.667L22.1668 3.16699Z"
                    stroke="#EA6940"
                    stroke-width="2.38771"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="m-0 pt-3 text-buttom">ایجاد نامه</p>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div>
      <div class="flex flex-row gap-3 mt-6"></div>
    </div>
    <Dialog
      v-model:visible="showModal"
      :modal="true"
      :dismissable-mask="false"
      class="rounded-lg"
      :style="{ width: '90%', maxWidth: '500px' }"
    >
      <!-- Close Button -->
      <button
        class="absolute -top-4 right-1/2 transform translate-x-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
        @click="showModal = false"
      >
        ✕
      </button>

      <!-- Card Grid -->
      <div class="grid grid-cols-2 gap-6 mt-4">
        <!-- Internal Letter Card -->
        <nuxt-link to="/cartable/listletter">
          <div
            class="flex flex-col items-center rounded-xl p-6 transition hover:scale-105 cursor-pointer shadow-md"

          >
            <!-- Icon -->
            <div
              class="w-20 h-20 flex items-center justify-center bg-green-200 rounded-full shadow text-green-600"
            >
              <img
                src="/public/cartable/icons-Line-document-download.png"
                alt=""
              />
            </div>
            <!-- Label -->
            <p class="mt-3 text-gray-600 font-medium">نامه داخلی</p>
          </div>
        </nuxt-link>

        <!-- External Letter Card -->
        <div
          class="flex flex-col items-center rounded-xl p-6 transition hover:scale-105 cursor-pointer shadow-md"
        >
          <!-- Icon -->
          <div
            class="w-20 h-20 flex items-center justify-center bg-purple-200 rounded-full shadow text-purple-600"
          >
            <img src="/public/cartable/icons-Line-document-upload.png" alt="" />
            <i class="pi pi-upload text-2xl"></i>
          </div>
          <!-- Label -->
          <p class="mt-3 text-gray-600 font-medium">نامه خارجی</p>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false, // Controls modal visibility
    };
  },
};
</script>

<style lang="scss">
  .p-dialog-header-actions {
    display: none;
  }
.cartable {
  background-color: #f3f4f6;
  min-height: 100vh;

  .p-datatable-header-cell {
    background-color: #f5f5f5;
    color: #888888;
    text-align: center;
  }

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
    background-color: #f6eeff;
    border-radius: 50%;
  }
  .in4 {
    background-color: #f0fdf4;
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
  .c1 {
    transition-delay: 20s;
    transition-duration: 5s;
  }
  .c1:hover {
    transition-delay: 20s;
    transition-duration: 5s;
    background-image: linear-gradient(
      48.55deg,
      #fdfdfd -1.31%,
      #f2f8ff 106.19%
    );
    .in1 {
      background-color: #ea6940;
      path {
        color: white;
        stroke: white;
      }
    }
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
      background-color: #9747ff;
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
      background-color: #02cd79;
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
