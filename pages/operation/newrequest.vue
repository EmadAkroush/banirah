<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">درخواست جدید</p>
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
            <div class="justify-between items-center py-4">
              <h1 class="text-lg font-semibold">فرم درخواست بازیابی</h1>
              <div class="p-6 mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex flex-col text-right">
                    <label for="date" class="mb-1">تاریخ</label>
                    <Calendar id="date" class="w-full" />
                  </div>
                  <div class="flex flex-col text-right">
                    <label for="source" class="mb-1"
                      >مبدا <span class="text-red-500">*</span></label
                    >
                    <InputText
                      id="source"
                      placeholder="نام شهر مبدا"
                      class="w-full"
                    />
                  </div>

                  <div class="flex flex-col text-right">
                    <label for="destination-name" class="mb-1"
                      >مقصد <span class="text-red-500">*</span></label
                    >
                    <InputText
                      id="destination-name"
                      placeholder="نام شهر مقصد"
                      class="w-full"
                    />
                  </div>

                  <div class="flex flex-col text-right">
                    <label for="destination" class="mb-1"
                      >گمرک خروجی <span class="text-red-500">*</span></label
                    >
                    <Dropdown
                      id="destination"
                      :options="dropdownOptions"
                      placeholder="یک مورد را انتخاب کنید"
                      class="w-full"
                      optionLabel="label"
                    />
                  </div>

                  <div class="flex flex-col text-right">
                    <label for="product-type" class="mb-1">نوع فرآورده</label>
                    <Dropdown
                      id="product-type"
                      :options="dropdownOptions"
                      optionLabel="label"
                      placeholder="یک مورد را انتخاب کنید"
                      class="w-full"
                    />
                  </div>

                  <div class="flex flex-col text-right">
                    <label for="load-type" class="mb-1"
                      >نوع حمل <span class="text-red-500">*</span></label
                    >
                    <Dropdown
                      id="load-type"
                      :options="dropdownOptions"
                      optionLabel="label"
                      placeholder="یک مورد را انتخاب کنید"
                      class="w-full"
                    />
                  </div>

                  <div class="flex flex-col text-right col-span-2">
                    <label for="amount" class="mb-1"
                      >مبلغ پرداختی به راننده
                      <span class="text-red-500">*</span></label
                    >
                    <InputText id="amount" placeholder="ریال" class="w-full" />
                  </div>
                </div>
              </div>
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
                    field="driverName"
                    header="نام راننده"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column
                    field="registrationNumber"
                    header="شماره انتظامی"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column
                    field="serial"
                    header="سریال"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column
                    field="teransit"
                    header="ترانزیت"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>

                  <Column
                    field="tonnage"
                    header="تناژ"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column
                    field="loadType"
                    header="نوع حمل"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column
                    field="peyman"
                    header="پیمانکار"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column
                    field="peyman"
                    header="تلفن"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column
                    field="name"
                    header="نام صاحب حساب"
                    :sortable="true"
                    bodyClass="text-right"
                  ></Column>
                  <Column
                    field="count"
                    header="شماره حساب"
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
                        >جمع کل تناژ</span
                      >
                      <span class="text-right text-lg font-semibold mr-8"
                        >8756</span
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
                  <nuxt-link to="/operation/loadingfinal">
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
          driverName: "بیژن بخشای زاده",
          registrationNumber: "5555555",
          serial: 1234,
          tonnage: 878,
          loadType: "حمل مستقیم",
          teransit: "نوع ترانزیت",
          peyman: "نام پیمانکار",
          name: "نام ونام خانوادگی",
          count: 454545,
        },
        {
          id: 1,
          driverName: "بیژن بخشای زاده",
          registrationNumber: "5555555",
          serial: 1234,
          tonnage: 878,
          loadType: "حمل مستقیم",
          teransit: "نوع ترانزیت",
          peyman: "نام پیمانکار",
          name: "نام ونام خانوادگی",
          count: 454545,
        },
        {
          id: 1,
          driverName: "بیژن بخشای زاده",
          registrationNumber: "5555555",
          serial: 1234,
          tonnage: 878,
          loadType: "حمل مستقیم",
          teransit: "نوع ترانزیت",
          peyman: "نام پیمانکار",
          name: "نام ونام خانوادگی",
          count: 454545,
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
