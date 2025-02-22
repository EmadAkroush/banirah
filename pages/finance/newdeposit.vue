<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right"> تعریف لیست واریزی</p>
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
    
            </div>
          </div>

          <div
            style="
              background-color: white;
              width: 100%;
              height: 100%;
              padding: 0 20px;
              border-radius: 12px;
            "
          >
            <div class="justify-between items-center ">
             
              <div class="p-6 mx-auto">
                <button
                  style="
                    margin-right: auto;
                    color: #246020;
                    border: 1px solid #246020;
                  "
                  class="mb-4 px-4 py-2 text-white rounded flex items-center"
                >
                  <i class="pi pi-plus mr-2"></i> ردیف جدید
                </button>
                <DataTable
                  :value="items"
                  class="p-datatable-sm"
                  responsiveLayout="scroll"
                >
                  <Column field="actions" header="ردیف" bodyClass="text-right">
                    <template #body> 1 </template>
                  </Column>

                  <Column
                    field="pelak"
                    header="شماره پلاک"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>

                  <Column
                    field="serial"
                    header="سریال "
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>

                  <Column
                    field="namesaheb"
                    header="نام صاحب حساب"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column 
                    field="shomarekart"
                    header="شماره حساب / کارت"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column
                    field="mablagh"
                    header="مبلغ"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column
                    field="sharh"
                    header="شرح"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
            
                  <Column field="actions" :header="null" bodyClass="text-right">
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

                  <!-- Add more columns as needed -->
                  <template #footer >
                    <div
                    style="background-color: #F3F6F3;"
                      class="flex justify-start items-center  p-2"
                    >
                      <span class="text-right text-lg font-bold"
                        >جمع مبلغ کل</span
                      >
                      <span class="text-right text-lg font-semibold mr-8"
                        >20000 ریال</span
                      >
                    </div>
                  </template>
                </DataTable>

                <div class="flex justify-end mt-4">
                  <Button
                    label="انصراف"
                    class="p-button-outlined"
                    style="
                      width: 150px;
                      color: #246020;
                      border: 1px solid #246020;
                    "
                  />
                  <nuxt-link to="/finance/depositlistfinal">
                  <Button
                    label="ثبت"
                    class="mr-2 bg-green-600 text-white"
                    style="width: 150px; background-color: #246020"
                  />
                </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center mt-4"></div>
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
      items: [
        {
          id: 1,
          pelak: "۵۲ ب ۷۶۵ ایران ۲۲",
          serial : 5555555555,
          namesaheb: "ابوالفضل توسلیان شیرازی",
          shomarekart: 123445613275,
          mablagh: "0 ریال",
          sharh: "حقوق آبان",
        },
        {
          id: 1,
          pelak: "۵۲ ب ۷۶۵ ایران ۲۲",
          serial : 5555555555,
          namesaheb: "ابوالفضل توسلیان شیرازی",
          shomarekart: 123445613275,
          mablagh: "0 ریال",
          sharh: "حقوق آبان",
        },
        {
          id: 1,
          pelak: "۵۲ ب ۷۶۵ ایران ۲۲",
          serial : 5555555555,
          namesaheb: "ابوالفضل توسلیان شیرازی",
          shomarekart: 123445613275,
          mablagh: "0 ریال",
          sharh: "حقوق آبان",
        },
        {
          id: 1,
          pelak: "۵۲ ب ۷۶۵ ایران ۲۲",
          serial : 5555555555,
          namesaheb: "ابوالفضل توسلیان شیرازی",
          shomarekart: 123445613275,
          mablagh: "0 ریال",
          sharh: "حقوق آبان",
        },
        {
          id: 1,
          pelak: "۵۲ ب ۷۶۵ ایران ۲۲",
          serial : 5555555555,
          namesaheb: "ابوالفضل توسلیان شیرازی",
          shomarekart: 123445613275,
          mablagh: "0 ریال",
          sharh: "حقوق آبان",
        },
        {
          id: 1,
          pelak: "۵۲ ب ۷۶۵ ایران ۲۲",
          serial : 5555555555,
          namesaheb: "ابوالفضل توسلیان شیرازی",
          shomarekart: 123445613275,
          mablagh: "0 ریال",
          sharh: "حقوق آبان",
        },
   
        // Add more items as needed
      ],
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        // Add more options as needed
      ],
    };
  },
};
</script>
