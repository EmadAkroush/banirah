<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">درخواست بارگیری</p>
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

    <div>
      <div class="card">
        <div class="p-4">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center">
              <!-- <img class="w-10 h-10 rounded-full ml-4" src="path/to/avatar.png" alt="User Avatar"> -->
              <div class="relative">
                <img
                  src="/public/listbargiry/icons-Line-search.png"
                  alt=""
                  style="position: absolute; top: 8px; left: 10px"
                />
                <input
                  type="text"
                  placeholder="جستجوی پیشرفته"
                  class="border rounded-lg px-8 py-2"
                />
              </div>
            </div>
            <nuxt-link to="/operation/newrequest">
              <button
                class="border border-green-600 text-green-600 px-4 py-2 rounded"
              >
                درخواست جدید
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
       
            <DataTable :value="tableData" class="p-datatable-gridlines">
              <Column field="index" header="ردیف" sortable></Column>
              <Column field="task" header="وظیفه" sortable></Column>
              <Column field="sender" header="ارسال از طرف" sortable>
                <template #body="slotProps">
                  <div class="flex items-center">
                    <img
                      src="/public/listbargiry/Mask group.png"
                      alt="Sender Avatar"
                      class="w-8 h-8 rounded-full ml-2"
                    />
                    {{ slotProps.data.senderName }}
                  </div>
                </template>
              </Column>
              <Column field="priority" header="اولویت" sortable></Column>
              <Column header="حذف" class="text-center">
                <template #body>
                  <button class="text-red-600">
                    <img
                      src="/public/listbargiry/icons-Line-Trash.png"
                      alt="Sender Avatar"
                      class="w-8 h-8 rounded-full ml-2"
                    />
                  </button>
                </template>
              </Column>
            </DataTable>
          </div>
          <div class="flex justify-between items-center mt-4">
            <Paginator
              :rows="10"
              :totalRecords="120"
              :rowsPerPageOptions="[10, 20, 30]"
            ></Paginator>

            <span>صفحه شماره ۲</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main {
  background-color: #f3f4f6;
  .p-datatable-tbody > tr > td {
    text-align: right;
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
      tableData: [
        {
          index: 1,
          task: "عنوان وظیفه پیش فرض",
          senderAvatar: "path/to/avatar.png",
          senderName: "نام فرستنده",
          priority: "اولویت",
        },
        {
          index: 1,
          task: "عنوان وظیفه پیش فرض",
          senderAvatar: "path/to/avatar.png",
          senderName: "نام فرستنده",
          priority: "اولویت",
        },
        {
          index: 1,
          task: "عنوان وظیفه پیش فرض",
          senderAvatar: "path/to/avatar.png",
          senderName: "نام فرستنده",
          priority: "اولویت",
        },
        {
          index: 1,
          task: "عنوان وظیفه پیش فرض",
          senderAvatar: "path/to/avatar.png",
          senderName: "نام فرستنده",
          priority: "اولویت",
        },
        {
          index: 1,
          task: "عنوان وظیفه پیش فرض",
          senderAvatar: "path/to/avatar.png",
          senderName: "نام فرستنده",
          priority: "اولویت",
        },
        {
          index: 1,
          task: "عنوان وظیفه پیش فرض",
          senderAvatar: "path/to/avatar.png",
          senderName: "نام فرستنده",
          priority: "اولویت",
        },
        {
          index: 1,
          task: "عنوان وظیفه پیش فرض",
          senderAvatar: "path/to/avatar.png",
          senderName: "نام فرستنده",
          priority: "اولویت",
        },

        // Repeat as needed...
      ],
    };
  },
};
</script>
 