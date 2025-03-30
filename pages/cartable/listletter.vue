<template>
  <div class="finance p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">تعریف نامه ها</p>
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
    <div class="card">
      <div class="p-4">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <!-- <img class="w-10 h-10 rounded-full ml-4" src="path/to/avatar.png" alt="User Avatar"> -->
            <div
              class="flex justify-between items-center p-4 bg-gray-100 rounded-md"
            >
              <!-- جستجو -->
              <div class="flex items-center space-x-2">
                <!-- انتخاب تاریخ -->
              </div>

              <!-- تب‌ها -->
              <div
                class="flex bg-gray-100 p-2 rounded-md w-full md:w-auto justify-center"
              >
                <!-- نامه های دریافتی -->
                <button
                  class="px-4 py-2 rounded-md text-gray-600 bg-gray-200 hover:bg-gray-300"
                  :class="{
                    'bg-white text-gray-800 font-semibold shadow draft':
                      activeTab === 'draft',
                  }"
                  @click="setActiveTab('draft')"
                >
                  پیش نویس ها
                </button>
                <!-- نامه های دریافتی -->
                <button
                  class="px-4 py-2 rounded-md text-gray-600 bg-gray-200 hover:bg-gray-300"
                  :class="{
                    'bg-white text-gray-800 font-semibold shadow received':
                      activeTab === 'received',
                  }"
                  @click="setActiveTab('received')"
                >
                  نامه های دریافتـی
                </button>

                <!-- نامه های ارسالی -->
                <button
                  class="px-4 py-2 rounded-md text-gray-600 bg-gray-200 hover:bg-gray-300 ml-2"
                  :class="{
                    'bg-white text-gray-800 font-semibold shadow sent':
                      activeTab === 'sent',
                  }"
                  @click="setActiveTab('sent')"
                >
                  نامه های ارسالی
                </button>
              </div>
            </div>
            <div class="relative" style="margin-left: 8px">
              <img
                src="/public/listbargiry/icons-Line-search.png"
                alt=""
                style="position: absolute; top: 8px; left: 10px"
              />
              <input
                type="text"
                placeholder="جستجوی نامه"
                class="border rounded-lg px-8 py-2"
              />
            </div>
            <PersianDatePicker v-model="selectedDate" range />
          </div>
          <nuxt-link to="/cartable/newrequst">
            <button
              class="border border-green-600 text-green-600 px-4 py-2 rounded"
            >
              نامه جدید
            </button>
          </nuxt-link>
        </div>

        <div
          style="
            background-color: white;
            width: 100%;
            height: 100%;
            padding: 20px;
            border-radius: 12px;
          "
        >
          <DataTable
            :value="list"
            class="p-datatable-gridlines"
            style="text-align: right"
          >
            <Column field="id" style="text-align: right" header="ردیف" sortable>
              <template #body="slotProps">
                <div class="flex items-center">
                  <nuxt-link :to="`/cartable/${slotProps.data.id}`">
                    {{ slotProps.data.id }}
                  </nuxt-link>
                </div>
              </template>
            </Column>
            <Column
              field="from"
              style="text-align: right"
              header="ارسال از طرف"
              sortable
            >
              <template #body="slotProps">
                <div class="flex items-center">
                  <img
                    src="/public/listbargiry/Mask group.png"
                    alt="Sender Avatar"
                    class="w-8 h-8 rounded-full ml-2"
                  />
                  {{ slotProps.data.participants[0].fullname }}
                </div>
              </template>
            </Column>
            <Column
              field="case_title"
              style="text-align: right"
              header="عنوان نامه "
              sortable
            >
              <!-- <template #body="slotProps">
                <div class="flex items-center">
                 <nuxt-link to="/cartable/detailsletter">
                  {{ slotProps.data.from }}
                </nuxt-link>
                </div>
              </template> -->
            </Column>
            <Column
              field="status"
              style="text-align: right"
              header="وضعیت"
              sortable
            ></Column>
            <Column
              field="created_at"
              style="text-align: right"
              header="تاریخ"
              sortable
            ></Column>
          </DataTable>
        </div>
        <div class="flex justify-between items-center mt-4">
          <Paginator
            :rows="10"
            :totalRecords="120"
            :rowsPerPageOptions="[10, 20, 30]"
             @page="onPageChange"
          ></Paginator>

          <span>صفحه شماره {{ currentPage }}</span>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>
<style lang="scss">
.finance {
  background-color: #f3f4f6;
  min-height: 100vh;
  .received {
    background-color: white;
  }
  .draft {
    background-color: white;
  }
  .sent {
    background-color: white;
  }

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
<script>
export default {
  data() {
    return {
      activeTab: "received", // تب پیش‌فرض
      list: null,
      tableData: [
        {
          index: 1,
          vazife: "مهربان مهاجر جوان",
          from: "نام و نام خانوادگی ارسال کننده",
          olaviat: "نوع اولویت",
          onvan: "عنوان نامه",
          tarikh: "۱۸ مهر ۱۴۰۳",
        },
        {
          index: 1,
          vazife: "مهربان مهاجر جوان",
          from: "نام و نام خانوادگی ارسال کننده",
          olaviat: "نوع اولویت",
          onvan: "عنوان نامه",
          tarikh: "۱۸ مهر ۱۴۰۳",
        },
        {
          index: 1,
          vazife: "مهربان مهاجر جوان",
          from: "نام و نام خانوادگی ارسال کننده",
          olaviat: "نوع اولویت",
          onvan: "عنوان نامه",
          tarikh: "۱۸ مهر ۱۴۰۳",
        },
        {
          index: 1,
          vazife: "مهربان مهاجر جوان",
          from: "نام و نام خانوادگی ارسال کننده",
          olaviat: "نوع اولویت",
          onvan: "عنوان نامه",
          tarikh: "۱۸ مهر ۱۴۰۳",
        },
        {
          index: 1,
          vazife: "مهربان مهاجر جوان",
          from: "نام و نام خانوادگی ارسال کننده",
          olaviat: "نوع اولویت",
          onvan: "عنوان نامه",
          tarikh: "۱۸ مهر ۱۴۰۳",
        },
        {
          index: 1,
          vazife: "مهربان مهاجر جوان",
          from: "نام و نام خانوادگی ارسال کننده",
          olaviat: "نوع اولویت",
          onvan: "عنوان نامه",
          tarikh: "۱۸ مهر ۱۴۰۳",
        },

        // Repeat as needed...
      ],
      currentPage: 1,
    };
  },
  methods: {
    async getproduct(par) {
      try {
       
        this.list = await $fetch("/api/letters/list?page=1", {
          method: "GET",
          params : {
            page: par, // شماره صفحه
          },
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.list = toRaw(this.list?.data);
        console.log("list", toRaw(this.list));
      }
    },
    onPageChange(event) {
      this.currentPage = event?.page + 1;
      this.getproduct(this.currentPage);
      // console.log("event", this.currentPage);
    },
    async getproduct2() {
      try {
        this.user = await $fetch("/api/letters");
      } catch (error) {
        console.log(error);
      } finally {
        this.user = toRaw(this.user.data);
        console.log("let", toRaw(this.user));
      }
    },
  

    setActiveTab(tab) {
      this.activeTab = tab; // تنظیم تب فعال
    },
  },
  beforeMount() {
    this.getproduct();
    this.getproduct2();
  },
};
</script>
<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

