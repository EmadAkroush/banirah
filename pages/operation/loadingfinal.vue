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
          <Card class="px-12 mb-4" style="height: 100px">
            <template #content>
              <Stepper value="2">
                <StepList>
                  <Step value="1"> درخواست کننده </Step>
                  <Step value="2"> تایید اداری </Step>
                  <Step value="3"> تایید مدیریت </Step>
                  <Step value="4"> مالی </Step>
                </StepList>
              </Stepper>
            </template>
          </Card>

          <div
            style="
              background-color: white;
              width: 100%;
              height: 100%;
              padding: 20px;
              border-radius: 12px;
            "
          >
            <div class="flex justify-between items-center py-4">
              <h1 class="text-lg font-semibold">لیست درخواست بارگیری</h1>
              <div class="flex gap-2">
                <button class="rounded-full p-2 bg-gray-100 hover:bg-gray-200">
                  <img src="/public/listbargiry/icons-Line-search.png" alt="" />
                </button>
                <button class="rounded-full p-2 bg-gray-100 hover:bg-gray-200">
                  <img
                    src="/public/listbargiry/icons-Line-Sharing.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <DataTable :value="tableData" class="p-datatable-gridlines">
              <Column field="index" header="ردیف" sortable></Column>
              <Column field="task" header="تاریخ" sortable></Column>
              <Column field="sender" header="مبداء" sortable>
           
              </Column>
              <Column field="priority" header="مقصد" sortable></Column>
              <Column field="priority" header="ترانزیت" sortable></Column>
              <Column field="priority" header="گمرک خروجی" sortable></Column>
              <Column field="priority" header="تناژ " sortable></Column>
              <Column field="priority" header="نوع فراورده " sortable></Column>
              <Column field="priority" header="نام راننده" sortable></Column>
              <Column field="priority" header="مبلغ " sortable></Column>



       
            </DataTable>
          </div>
          <div class="flex justify-end mt-4">
            <nuxt-link to="/operation/newrequest">
              <Button
                label="درخواست جدید"
                class="p-button-outlined"
                style="width: 150px; color: #246020; border: 1px solid #246020"
              />
            </nuxt-link>
            <nuxt-link to="/operation">
              <Button
                label="صفحه اصلی"
                class="mr-2 bg-green-600 text-white"
                style="width: 150px; background-color: #246020"
              />
            </nuxt-link>
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
