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
                style="
                  border: 1px solid #d1d5db;
                  border-radius: 16px;
                  height: 237px;
                "
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
                style="
                  border: 1px solid #d1d5db;
                  border-radius: 16px;
                  height: 237px;
                "
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
          <div
            class="card"
            style="
              background-color: #ffffff;
              border-radius: 16px;
              box-shadow: 0px 0px 12px 0px #0000000f;
            "
          >
            <div class="p-6 mx-auto">
              <h2 class="text-2xl font-bold mb-4 text-right">
                سفر های درحال انجام
              </h2>
              <Chart
                type="bar"
                :data="chartData"
                :options="chartOptions"
                class="w-full"
                style="height: 250px"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 mt-4">
        <div class="col-span-4">
          <div
            class="card"
            style="
              background-color: #ffffff;
              border-radius: 16px;
              box-shadow: 0px 0px 12px 0px #0000000f;
            "
          >
            <div class="mx-auto p-6">
              <h2 class="font-bold mb-4 text-right">سفر های انجام شده</h2>
              <div>
                <span> سفر های داخلی </span>
                <span class="mr-6"> سفر های خارجی </span>
              </div>
              <Chart
                type="line"
                :data="chartData1"
                :options="chartOptions1"
                class="w-full mt-16"
                style="height: 245px"
              />
            </div>
          </div>
        </div>
        <div class="col-span-8">
          <div
            class="card"
            style="
              background-color: #ffffff;
              border-radius: 16px;
              box-shadow: 0px 0px 12px 0px #0000000f;
            "
          >
            <div class="mx-auto mt-10 p-4 bg-white rounded-lg">
              <h3 class="text-right font-bold text-lg mb-6">جزئیات سفر</h3>

              <TabView>
                <TabPanel header="اطلاعات مشتری">
                  <div class="grid grid-cols-2">
                    <div>
                      <img
                        src="/public/dashboard/comiun.png"
                        class="mt-12"
                        alt=""
                      />
                    </div>
                    <div class="mx-auto mt-10 p-6 bg-white rounded-lg">
                      <div
                        class="flex justify-between items-center text-right mb-4"
                      >
                      
                        <div class="flex space-x-2">
                          <i
                            class="pi pi-star-fill text-yellow-400 text-lg"
                          ></i>
                        
                          <img src="/public/dashboard/Star 1.png" alt="" />
                          <span class="text-lg font-semibold text-center"
                            >۴.۹</span
                          >
                        </div>
                      </div>

                      <div class="flex text-gray-700 text-sm">
                     
                        <div class="mb-2" style="line-height: 40px">
                          <p class="font-medium">
                            <span style="color: #9ca3af" class="ml-2">
                              مدل فلان </span
                            ><span> مدل ۴۵۳۲۳۴۶ </span>
                          </p>
                          <p class="text-right">
                            <span style="color: #9ca3af" class="ml-2">
                              حجم بار
                            </span>
                            ۳۷۲۴۰ اینچ
                          </p>
                        </div>

                        <div class="mr-8" style="line-height: 40px">
                          <p class="font-medium">
                            <span style="color: #9ca3af" class="ml-2">فضا</span>
                            ۱۰۰٪ / ۷۱٪
                          </p>
                          <p class="text-right">
                            <span style="color: #9ca3af" class="ml-2">وزن</span>
                            ۱۲۶۰ کیلوگرم
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="جزئیات سفارش">

                </TabPanel>
                <TabPanel header="اطلاعات ارسال">
       
                </TabPanel>
                <TabPanel header="اطلاعات بارگیری">
   
                </TabPanel>
                <TabPanel header="اطلاعات راننده">
          
                </TabPanel>
              </TabView>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row">
        <Card class="card-bar mt-4">
          <template #title> <h2>درخواست های تحویل بار</h2> </template>
          <template #content>
            <div class="flex flex-row gap-3 mt-2">
              <Card
                class="w-1/2"
                style="box-shadow: none; background-color: #f3f6f3"
              >
                <template #title>
                  <div class="flex flex-row justify-between mb-12">
                    <div>
                      <span class="one"> شماره سفارش: </span>
                      <span class="two"> ۹۸۷۶۵۵۴۴۳۳ </span>
                    </div>

                    <div
                      class="right flex items-center justify-center"
                      style="width: 150px"
                    >
                      <span class="ml-2"> تحویل داده شده </span>
                      <span>
                        <img
                          src="/public/opration/icons-Line-tick-circle.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </template>
                <template #content>
                  <Stepper value="1">
                    <StepList>
                      <Step value="1">
                        <p>
                          در انتظار بارگیری <br />
                          <span class="down-date"> ۲۵ اردیبهشت ۱۴۰۳ </span>
                        </p>
                      </Step>
                      <Step value="2">
                        <p>
                          در حال حمل <br />
                          <span class="down-date"> ۲۵ اردیبهشت ۱۴۰۳ </span>
                        </p>
                      </Step>
                      <Step value="3">
                        <p>
                          تحویل داده شد <br />
                          <span class="down-date"> ۲۵ اردیبهشت ۱۴۰۳ </span>
                        </p>
                      </Step>
                    </StepList>
                  </Stepper>
                </template>
              </Card>
              <Card
                class="w-1/2"
                style="box-shadow: none; border: 1px solid #e5e7eb"
              >
                <template #title>
                  <div class="flex flex-row justify-between mb-12">
                    <div>
                      <span class="one"> شماره سفارش: </span>
                      <span class="two"> ۹۸۷۶۵۵۴۴۳۳ </span>
                    </div>
                    <div class="left flex items-center justify-center">
                      <span class="ml-1">در انتظار تایید اداری</span>
                      <span>
                        <img
                          src="/public/opration/icons-Line-Line-arrow-up.svg"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </template>
                <template #content>
                  <Stepper value="1">
                    <StepList>
                      <Step value="1" class="flex flex-row flex-wrap">
                        <p>
                          در انتظار بارگیری <br />
                          <span class="down-date"> ۲۵ اردیبهشت ۱۴۰۳ </span>
                        </p>
                      </Step>
                      <Step value="2">
                        <p>
                          در حال حمل <br />
                          <span class="down-date"> ۲۵ اردیبهشت ۱۴۰۳ </span>
                        </p>
                      </Step>
                      <Step value="3">
                        <p>
                          تحویل داده شد <br />
                          <span class="down-date"> ۲۵ اردیبهشت ۱۴۰۳ </span>
                        </p>
                      </Step>
                    </StepList>
                  </Stepper>
                </template>
              </Card>
            </div>
          </template>
        </Card>
      </div>
      <div class="grid grid-cols-12 gap-4 mt-4">
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
            <div class="flex justify-around items-center space-x-4 p-6 mx-auto">
              <!-- Repeat this block for each progress indicator -->
              <div
                v-for="n in 3"
                :key="n"
                class="flex flex-col items-center space-y-2"
              >
                <!-- Percentage Display -->
                <div class="bg-white p-2 rounded shadow text-center">
                  <span class="text-lg font-bold">۱۵٪</span>
                </div>
                <!-- Progress Bar -->
                <div
                  class="relative w-full h-2 bg-gradient-to-r from-indigo-100 to-indigo-400 rounded-full"
                >
                  <div
                    class="absolute top-0 left-0 h-full bg-indigo-500 rounded-full"
                    style="width: 15%"
                  ></div>
                </div>
                <!-- Label -->
                <div class="flex items-center space-x-2">
                  <span class="w-3 h-3 bg-indigo-300 rounded-full"></span>
                  <span class="text-xs text-gray-600">در انتظار بارگیری</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <div class="down mb-16" style="margin-right: 76px">
              <h1 style="font-size: 40px; color: #1f2937; font-weight: 700">
                193
              </h1>
              <div class="flex">
                <span
                  class="ml-3 mb-5"
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
                  <span style="font-size: 12px; color: #22c55e"> +۱۲.۰۸٪ </span>
                </div>
              </div>
            </div>
            <div>
              <div class="btn mt-16">
                <img src="" alt="" />
                <span style="color: #6d956a; font-size: 10px">
                  اطلاعات بیشتر
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-4">
          
          <div
            class="card"
            style="
              background-color: #ffffff;
              border-radius: 16px;
              box-shadow: 0px 0px 12px 0px #0000000f;
            "
          >
          <div class=" bg-white rounded-lg p-4">
              <h3 class="text-lg text-gray-800 font-semibold text-right mb-4">
                عنوان پیش فرض
              </h3>
              <Chart
                type="pie"
                :data="pieChartData"
                :options="chartOptions3"
                style="height: 192px"
              />
            </div>
            <!-- <div class="flex items-center">
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
                  پرداختی های بارگیری 
              </p>
            </div> -->
            <!-- <DataTable :value="products" class="mt-6">
              <Column field="code" header="ردیف"></Column>
              <Column field="name" header="نام راننده"></Column>
              <Column field="category" header="تاریخ درخواست	"></Column>
              <Column field="price" header="وضعیت"></Column>
            </DataTable> -->
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
            <div class="flex items-center">
              <div
                class="ml-3 flex justify-center items-center"
                style="
                  background-color: #e7f6fd;
                  border-radius: 50%;
                  width: 48px;
                  height: 48px;
                "
              >
                <img
                  src="/public/dashboard/1.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
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
      <div class="mt-4">
        <div
          class="card"
          style="
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0px 0px 12px 0px #0000000f;
          "
        >
          <div class="flex space-x-4">
            <div class="w-full bg-white rounded-lg shadow-md p-4">
              <h3 class="text-lg text-gray-800 font-semibold text-right mb-4">
                عنوان پیش فرض
              </h3>
              <Chart
                type="bar"
                :data="barChartData"
                :options="chartOptions2"
                style="height: 300px"
              />
            </div>

          
          </div>
        </div>
      </div>
      <!-- <div class="mt-4">
        <div
          class="card"
          style="
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0px 0px 12px 0px #0000000f;
          "
        >
          <div class="flex space-x-4">
          
            <div class="w-1/3 bg-white rounded-lg p-4">
              <h3 class="text-lg text-gray-800 font-semibold text-right mb-4">
                عنوان پیش فرض
              </h3>
              <Chart
                type="pie"
                :data="pieChartData"
                :options="chartOptions3"
                style="height: 300px"
              />
            </div>

           
            <div class="w-1/3 bg-white rounded-lg p-4">
              <h3 class="text-lg text-gray-800 font-semibold text-right mb-4">
                عنوان پیش فرض
              </h3>
              <Chart
                type="doughnut"
                :data="doughnutChartData"
                :options="chartOptions3"
                style="height: 300px"
              />
            </div>

       
          </div>
        </div>
      </div> -->
      <div class="mt-4">
        <div
          class="card"
          style="
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0px 0px 12px 0px #0000000f;
          "
        >
          <div class="flex space-x-4">
            <!-- نمودار خطی -->
            <div class="w-1/2 bg-white rounded-lg shadow-md p-4">
              <h3 class="text-lg text-gray-800 font-semibold text-right mb-4">
                درخواست‌های پیش‌فرض
              </h3>
              <Chart
                type="line"
                :data="lineChartData"
                :options="chartOptions4"
                style="height: 300px;"
              />
            </div>

            <!-- نمودار ترکیبی (ستونی و خطی) -->
            <div class="w-1/2 bg-white rounded-lg shadow-md p-4">
              <h3 class="text-lg text-gray-800 font-semibold text-right mb-4">
                عنوان پیش فرض
              </h3>
              <Chart
                type="bar"
                :data="barLineChartData"
                :options="mixedChartOptions"
                style="height: 300px;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

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
          driverName: "فربد رضایی زرگر",
          driverAvatar: "path/to/avatar1.png",
          code: "۵۵۵۵۵۵۵",
          requestDate: "۱۴۰۳ رجب",
          serialNumber: "POFDFADF",
          carType: "پراید",
          accountNumber: "۷۲۳۴۵۶۷۸۹۱۲۳۴",
          status: "پرداخت شد",
        },
        {
          id: 2,
          index: 2,
          driverName: "فربد رضایی زرگر",
          driverAvatar: "path/to/avatar2.png",
          code: "۵۵۵۵۵۵۵",
          requestDate: "۱۴۰۳ رجب",
          serialNumber: "POFDFADF",
          carType: "پراید",
          accountNumber: "۷۲۳۴۵۶۷۸۹۱۲۳۴",
          status: "پرداخت شد",
        },
      ],
      chartData: {
        labels: [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذز",
          "دی",
          "بهمن",
          "اسفند",
        ],
        datasets: [
          {
            label: "در انتظار بارگیری",
            backgroundColor: "rgba(34, 197, 94, 0.6)",
            data: [65, 59, 80, 81, 56, 55, 40, 65, 80, 35, 40, 85],
          },
          {
            label: "در انتظار بارگیری",
            backgroundColor: "rgba(34, 197, 94, 0.4)",
            data: [28, 48, 40, 19, 86, 27, 90, 80, 100, 96, 45, 65],
          },
          {
            label: "در انتظار بارگیری",
            backgroundColor: "rgba(34, 197, 94, 0.2)",
            data: [18, 48, 77, 9, 100, 27, 40, 90, 20, 85, 96, 75],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
      // Chart Data
      chartData1: {
        labels: ["۰۰", "۰۴", "۰۸", "۱۲", "۱۶", "۲۰", "24"],
        datasets: [
          {
            label: "عنوان پیش فرض",
            data: [2, 4, 6, 8, 7, 9, 10],
            fill: false,
            borderColor: "#6366F1", // Blue Line
            backgroundColor: "#6366F1",
            tension: 0.4,
          },
          {
            label: "عنوان پیش فرض",
            data: [1, 3, 5, 5, 6, 8, 12],
            fill: false,
            borderColor: "#10B981", // Green Line
            backgroundColor: "#10B981",
            tension: 0.4,
          },
        ],
      },
      // Chart Options
      chartOptions1: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: false,
            },
          },
          y: {
            display: false,
          },
        },
      },
      barChartData: {
        labels: [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند",
        ],
        datasets: [
          {
            label: "نمونه ارسال شده",
            backgroundColor: "#4CAF50",
            data: [65, 59, 80, 81, 56, 55, 40, 72, 65, 50, 66, 75],
          },
          {
            label: "اشتراک باقی‌مانده",
            backgroundColor: "#C8E6C9",
            data: [28, 48, 40, 19, 86, 27, 90, 72, 44, 33, 68, 85],
          },
        ],
      },
      horizontalBarChartData: {
        labels: ["A", "B", "C", "D", "E", "F", "G"],
        datasets: [
          {
            label: "نمونه ارسال شده",
            backgroundColor: "#4CAF50",
            data: [75, 89, 60, 71, 96, 45, 50],
          },
          {
            label: "اشتراک باقی‌مانده",
            backgroundColor: "#C8E6C9",
            data: [58, 68, 90, 29, 76, 37, 30],
          },
        ],
      },
      chartOptions2: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "",
        },
      },
      pieChartData: {
        labels: ["قرمز", "آبی", "زرد"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
      doughnutChartData: {
        labels: ["قرمز", "آبی", "زرد"],
        datasets: [
          {
            data: [200, 150, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
      radarChartData: {
        labels: ["آیتم 1", "آیتم 2", "آیتم 3", "آیتم 4", "آیتم 5"],
        datasets: [
          {
            label: "سری 1",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56],
          },
          {
            label: "سری 2",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96],
          },
        ],
      },
      chartOptions3: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "top",
        },
        title: {
          display: false,
        },
      },
      lineChartData: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [
          {
            label: 'سری 1',
            data: [30, 70, 80, 40, 85, 100],
            borderColor: '#42A5F5',
            fill: false,
            tension: 0.4
          },
          {
            label: 'سری 2',
            data: [20, 60, 55, 90, 95, 40],
            borderColor: '#FFA726',
            fill: false,
            tension: 0.4
          },
          {
            label: 'سری 3',
            data: [40, 40, 60, 100, 30, 80],
            borderColor: '#66BB6A',
            fill: false,
            tension: 0.4
          }
        ]
      },
      barLineChartData: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [
          {
            type: 'bar',
            label: 'اشتراک فروش',
            backgroundColor: '#66BB6A',
            data: [60, 40, 80, 50, 70, 50]
          },
          {
            type: 'line',
            label: 'اشتراک افزایشی',
            borderColor: '#FFA726',
            backgroundColor: '#FFA726',
            fill: false,
            tension: 0.4,
            data: [70, 45, 75, 60, 80, 55]
          }
        ]
      },
      chartOptions4: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom'
        },
        title: {
          display: false
        }
      },
      mixedChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        },
        legend: {
          position: 'bottom'
        },
        title: {
          display: false
        }
      }
      
      

    };
  },
};
</script>

