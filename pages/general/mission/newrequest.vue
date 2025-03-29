<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">ماموریت</p>
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
          <div class="flex justify-between items-center mb-4"></div>

          <div
            style="
              background-color: white;
              width: 100%;
              height: 100%;
              padding: 20px;
              border-radius: 12px;
            "
          >
            <div class="flex items-center justify-center py-10">
              <div class="bg-white w-full p-8 rounded-lg">
                <h2 class="text-xl font-bold mb-6 text-right">
                  فرم درخواست ماموریت
                </h2>

                <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Personal Title -->
                  <div>
                    <label
                      class="block text-sm font-medium text-gray-700 mb-1"
                      for="personal-title"
                      >عنوان شخصی</label
                    >
                    <Dropdown
                      id="personal-title"
                      :options="personalTitleOptions"
                      v-model="selectedPersonalTitle"
                      optionLabel="name"
                      placeholder="یک مورد را انتخاب کنید"
                      class="w-full"
                    />
                  </div>

                  <!-- Related Service -->
                  <div>
                    <label
                      class="block text-sm font-medium text-gray-700 mb-1"
                      for="related-service"
                      >واحد مربوطه خدمت</label
                    >
                    <Dropdown
                      id="related-service"
                      :options="serviceOptions"
                      v-model="selectedService"
                      optionLabel="name"
                      placeholder="یک مورد را انتخاب کنید"
                      class="w-full"
                    />
                  </div>

                  <!-- Mission Destination -->
                  <div>
                    <label
                      class="block text-sm font-medium text-gray-700 mb-1"
                      for="mission-destination"
                      >مقصد ماموریت</label
                    >
                    <input
                      type="text"
                      id="mission-destination"
                      placeholder="نام شهر وارد کنید"
                      class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                    />
                  </div>

                  <!-- Date Picker -->
                  <div>
                    <label
                      class="block text-sm font-medium text-gray-700 mb-1"
                      for="select-date"
                      >انتخاب تاریخ</label
                    >
                    <PersianDatePicker v-model="selectedDate" range />
                  </div>

                  <!-- Description -->
                  <div class="col-span-full">
                    <label
                      class="block text-sm font-medium text-gray-700 mb-1"
                      for="description"
                      >توضیحات</label
                    >
                    <textarea
                      id="description"
                      rows="4"
                      placeholder="توضیحات"
                      class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                    ></textarea>
                  </div>
                  <div class="col-span-full flex justify-end mt-4">
                    <Button
                      label="انصراف"
                      class="p-button-outlined"
                      style="
                        width: 150px;
                        color: #246020;
                        border: 1px solid #246020;
                      "
                    />

                    <nuxt-link to="/general/mission/status">
                      <Button
                        label="ثبت"
                        class="mr-2 bg-green-600 text-white"
                        style="width: 150px; background-color: #246020"
                      />
                    </nuxt-link>
                  </div>
                </form>
              </div>
            </div>
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
          noemorakhasi: "روزانه",
          vahed: "واحد فلان",
          senderName: "نام فرستنده",
          priority: "اولویت",
          mabdae: "مشهد",
          maghsad: "رامسر",
          tarikhraft: "۳۰ اردیبهشت ۱۴۰۳",
          tarikhbargasht: "۳۰ اردیبهشت ۱۴۰۳",
        },
        {
          index: 1,
          noemorakhasi: "روزانه",
          vahed: "واحد فلان",
          senderName: "نام فرستنده",
          priority: "اولویت",
          mabdae: "مشهد",
          maghsad: "رامسر",
          tarikhraft: "۳۰ اردیبهشت ۱۴۰۳",
          tarikhbargasht: "۳۰ اردیبهشت ۱۴۰۳",
        },
        {
          index: 1,
          noemorakhasi: "روزانه",
          vahed: "واحد فلان",
          senderName: "نام فرستنده",
          priority: "اولویت",
          mabdae: "مشهد",
          maghsad: "رامسر",
          tarikhraft: "۳۰ اردیبهشت ۱۴۰۳",
          tarikhbargasht: "۳۰ اردیبهشت ۱۴۰۳",
        },
        {
          index: 1,
          noemorakhasi: "روزانه",
          vahed: "واحد فلان",
          senderName: "نام فرستنده",
          priority: "اولویت",
          mabdae: "مشهد",
          maghsad: "رامسر",
          tarikhraft: "۳۰ اردیبهشت ۱۴۰۳",
          tarikhbargasht: "۳۰ اردیبهشت ۱۴۰۳",
        },
        {
          index: 1,
          noemorakhasi: "روزانه",
          vahed: "واحد فلان",
          senderName: "نام فرستنده",
          priority: "اولویت",
          mabdae: "مشهد",
          maghsad: "رامسر",
          tarikhraft: "۳۰ اردیبهشت ۱۴۰۳",
          tarikhbargasht: "۳۰ اردیبهشت ۱۴۰۳",
        },
        {
          index: 1,
          noemorakhasi: "روزانه",
          vahed: "واحد فلان",
          senderName: "نام فرستنده",
          priority: "اولویت",
          mabdae: "مشهد",
          maghsad: "رامسر",
          tarikhraft: "۳۰ اردیبهشت ۱۴۰۳",
          tarikhbargasht: "۳۰ اردیبهشت ۱۴۰۳",
        },
        {
          index: 1,
          noemorakhasi: "روزانه",
          vahed: "واحد فلان",
          senderName: "نام فرستنده",
          priority: "اولویت",
          mabdae: "مشهد",
          maghsad: "رامسر",
          tarikhraft: "۳۰ اردیبهشت ۱۴۰۳",
          tarikhbargasht: "۳۰ اردیبهشت ۱۴۰۳",
        },

        // Repeat as needed...
      ],
      personalTitleOptions: [
        { name: "گزینه ۱", code: "1" },
        { name: "گزینه ۲", code: "2" },
        // Add more options as needed
      ],
      serviceOptions: [
        { name: " واحد کسب کار ", code: "1" },
        { name: " واحد منابع انسانی", code: "2" },
        { name: " واحد مالی", code: "3" },
        // Add more options as needed
      ],
    };
  },
};
</script>
