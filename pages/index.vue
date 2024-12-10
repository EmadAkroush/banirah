<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">داشبورد</p>
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
    <div class="body mt-4">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-4">
          <div
            class="card"
            style="
              background-color: #ffffff;
              border-radius: 16px;
              box-shadow: 0px 0px 12px 0px #0000000f;
            "
          >
            <div class="flex items-center">
              <div
                class="ml-3 flex items-center justify-center"
                style="
                  color: #e7f6fd;
                  border-radius: 50%;
                  width: 76px;
                  height: 76px;
                  background-color: #e7f6fd;
                "
              >
                <img src="/public/dashboard/1.png" alt="" />
              </div>
              <p class="" style="font-size: 18px; font-weight: 700">
                حضور و غیاب پرسنل
              </p>
            </div>
            <div class="flex gap-4 mt-8 justify-center">
              <div
                class="flex flex-col justify-center items-center box p-8"
                style="border: 1px solid #D1D5DB; border-radius: 16px"
              >
                <h1
                  class="items-center"
                  style="text-align: center; font-size: 45px; font-weight: 900"
                >
                  6
                </h1>
                <p
                  class="items-center"
                  style="text-align: center; color: #6b7280"
                >
                  نفر حضور
                </p>

                <img
                  class="items-center"
                  src="/public/dashboard/a.png"
                  alt=""
                  style="width: 35px; height: 35px; margin-top: 12px"
                />
              </div>
              <div
                class="box flex flex-col justify-center items-center p-8"
                style="border: 1px solid #D1D5DB; border-radius: 16px"
              >
                <h1
                  style="text-align: center; font-size: 45px; font-weight: 900"
                >
                  6
                </h1>
                <p style="text-align: center; color: #6b7280">نفر عدم حضور</p>
                <img
                  src="/public/dashboard/4.png"
                  alt=""
                  class=""
                  style="width: 35px; height: 35px; margin-top: 12px"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-8">
          <div class="flex gap-4">
            <div
              class="card"
              style="
                background-color: #ffffff;
                border-radius: 16px;
                box-shadow: 0px 0px 12px 0px #0000000f;
              "
            >
              <div class="flex items-center">
                <div
                  class="ml-3 flex justify-center items-center"
                  style="
                    color: #e7f6fd;
                    border-radius: 50%;
                    width: 76px;
                    height: 76px;
                    background-color: #e7f6fd;
                  "
                >
                  <img src="/public/dashboard/2.png" alt="" />
                </div>
                <p class="" style="font-size: 18px; font-weight: 700">
                  تعداد ماشین در صف بارگیری
                </p>
              </div>
              <div class="down" style="margin-right: 76px">
                <h1 style="font-size: 40px; color: #1f2937; font-weight: 700">
                  193
                </h1>
                <div class="flex">
                  <span
                    class="ml-3"
                    style="font-size: 16px; font-weight: 600; color: #1f2937"
                  >
                    +78
                  </span>
                  <span
                    class="ml-3"
                    style="font-size: 12px; font-weight: 400; color: #6b7280"
                  >
                    یک ماه اخیر
                  </span>
                  <div
                    class="flex justify-center items-center"
                    style="
                      border-radius: 12px;
                      width: 74px;
                      height: 22px;
                      background-color: #f0fdf4;
                    "
                  >
                    <img src="" alt="" />
                    <span style="font-size: 12px; color: #22c55e">
                      +۱۲.۰۸٪
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div class="btn">
                  <img src="" alt="" />
                  <span style="color: #6d956a; font-size: 10px">
                    اطلاعات بیشتر
                  </span>
                </div>
              </div>
            </div>
            <div
              class="card"
              style="
                background-color: #ffffff;
                border-radius: 16px;
                box-shadow: 0px 0px 12px 0px #0000000f;
              "
            >
              <div class="flex items-center">
                <div
                  class="ml-3 flex justify-center items-center"
                  style="
                    color: #e7f6fd;
                    border-radius: 50%;
                    width: 76px;
                    height: 76px;
                    background-color: #e7f6fd;
                  "
                >
                  <img src="/public/dashboard/3.png" alt="" />
                </div>
                <p class="" style="font-size: 18px; font-weight: 700">
                  تعداد ماشین در مسیر
                </p>
              </div>
              <div class="down" style="margin-right: 76px">
                <h1 style="font-size: 40px; color: #1f2937; font-weight: 700">
                  193
                </h1>
                <div class="flex">
                  <span
                    class="ml-3"
                    style="font-size: 16px; font-weight: 600; color: #1f2937"
                  >
                    +78
                  </span>
                  <span
                    class="ml-3"
                    style="font-size: 12px; font-weight: 400; color: #6b7280"
                  >
                    یک ماه اخیر
                  </span>
                  <div
                    class="flex justify-center items-center"
                    style="
                      border-radius: 12px;
                      width: 74px;
                      height: 22px;
                      background-color: #f0fdf4;
                    "
                  >
                    <img src="" alt="" />
                    <span style="font-size: 12px; color: #22c55e">
                      +۱۲.۰۸٪
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div
              class="card"
              style="
                background-color: #ffffff;
                border-radius: 16px;
                box-shadow: 0px 0px 12px 0px #0000000f;
              "
            >
              <div class="flex items-center">
                <div
                  class="ml-3 flex justify-center items-center"
                  style="
                    color: #e7f6fd;
                    border-radius: 50%;
                    width: 76px;
                    height: 76px;
                    background-color: #e7f6fd;
                  "
                >
                  <img src="/public/dashboard/5.png" alt="" />
                </div>
                <p class="" style="font-size: 18px; font-weight: 700">
                  آخرین وضعیت بارگیری
                </p>
              </div>
              <div class="down" style="margin-right: 76px">
                <h1 style="font-size: 40px; color: #1f2937; font-weight: 700">
                  193
                </h1>
              </div>
            </div>
            <div
              class="card"
              style="
                background-color: #ffffff;
                border-radius: 16px;
                box-shadow: 0px 0px 12px 0px #0000000f;
              "
            >
              <div class="flex items-center">
                <div
                  class="ml-3 flex justify-center items-center"
                  style="
                    color: #e7f6fd;
                    border-radius: 50%;
                    width: 46px;
                    height: 46px;
                    background-color: #e7f6fd;
                  "
                >
                  <img src="/public/dashboard/6.png" alt="" />
                </div>
                <p class="" style="font-size: 18px; font-weight: 700">
                  درخواست پیش فرض
                </p>
              </div>
              <DataTable :value="products" class="mt-4">
                <Column field="code" header="ردیف"></Column>
                <Column field="name" header="نام راننده"></Column>
                <Column field="category" header="تاریخ درخواست	"></Column>
                <Column field="price" header="وضعیت"></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div
          class="card"
          style="
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0px 0px 12px 0px #0000000f;
          "
        >
          <div class="flex justify-between">
            <div class="flex   items-center">
              <div
                class="ml-3 flex justify-center items-center"
                style="
                  background-color: #e7f6fd;
                  border-radius: 50%;
                  width: 48px;
                  height: 48px;
                "
              >
                <img src="/public/dashboard/1.png" alt="" style="width: 20px; height: 20px;" />
              </div>
              <h2 style="font-weight: 700; font-size: 16px">
                درخواست های پیش فرض    
              </h2>
            </div>
            <div
              class="btn p-4"
              style="
                border: 1px solid #246020;
                color: #246020;
                border-radius: 8px;
              "
            >
              <p>پیگیری واریزی</p>
            </div>
          </div>
          <div class="overflow-x-auto mt-2">
            <table class="min-w-full bg-white border rounded-lg">
              <thead class="bg-gray-100">
                <tr>
                  <th class="text-right p-3 border-b">ردیف</th>
                  <th class="text-right p-3 border-b">نام راننده</th>
                  <th class="text-right p-3 border-b">کد پیسنی</th>
                  <th class="text-right p-3 border-b">تاریخ درخواست</th>
                  <th class="text-right p-3 border-b">شماره سریال</th>
                  <th class="text-right p-3 border-b">نوع خودرو</th>
                  <th class="text-right p-3 border-b">شماره حساب</th>
                  <th class="text-right p-3 border-b">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in tableData"
                  :key="item.id"
                  class="hover:bg-gray-50"
                >
                  <td class="text-right p-3 border-b">{{ item.index }}</td>
                  <td class="flex items-center text-right p-3 border-b">
                    <img
                      src="/public/dashboard/5a.png"
                      alt="Avatar"
                      class="w-8 h-8 rounded-full ml-2"
                    />
                    {{ item.driverName }}
                  </td>
                  <td class="text-right p-3 border-b">{{ item.code }}</td>
                  <td class="text-right p-3 border-b">
                    {{ item.requestDate }}
                  </td>
                  <td class="text-right p-3 border-b">
                    {{ item.serialNumber }}
                  </td>
                  <td class="text-right p-3 border-b">{{ item.carType }}</td>
                  <td class="text-right p-3 border-b">
                    {{ item.accountNumber }}
                  </td>
                  <td class="text-right p-3 border-b text-green-600">
                    {{ item.status }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main {
  background-color: #f3f4f6;
  min-height: 100vh;
  .p-datatable-header-cell {
    background-color: #f5f5f5;
    color: #888888;
    text-align: center;
  }
  .card {
    padding: 24px;
    width: 100%;
  }
  .box {
    width: 100%;
    height: 182px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      products: [
        {
          code: "ردیف",
          name: "نام راننده",
          category: "تاریخ درخواست",
          price: "وضعیت",
        },
        {
          code: "ردیف",
          name: "نام راننده",
          category: "تاریخ درخواست",
          price: "وضعیت",
        },
        {
          code: "ردیف",
          name: "نام راننده",
          category: "تاریخ درخواست",
          price: "وضعیت",
        },
      ],
      tableData: [
        {
          id: 1,
          index: 1,
          driverName: 'فربد رضایی زرگر',
          driverAvatar: 'path/to/avatar1.png',
          code: '۵۵۵۵۵۵۵',
          requestDate: '۱۴۰۳ رجب',
          serialNumber: 'POFDFADF',
          carType: 'پراید',
          accountNumber: '۷۲۳۴۵۶۷۸۹۱۲۳۴',
          status: 'پرداخت شد',
        },
        {
          id: 2,
          index: 2,
          driverName: 'فربد رضایی زرگر',
          driverAvatar: 'path/to/avatar2.png',
          code: '۵۵۵۵۵۵۵',
          requestDate: '۱۴۰۳ رجب',
          serialNumber: 'POFDFADF',
          carType: 'پراید',
          accountNumber: '۷۲۳۴۵۶۷۸۹۱۲۳۴',
          status: 'پرداخت شد',
        },
      ],
    };
  },
};
</script>
