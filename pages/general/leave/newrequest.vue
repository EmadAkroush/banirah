<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">مرخصی</p>
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
            <div class="bg-gray-100 flex items-center justify-center">
              <!-- کارت فرم -->
              <div class="bg-white rounded-lg p-6 w-full">
                <h2 class="text-gray-800 text-lg font-semibold text-right mb-4">
                  فرم درخواست مرخصی
                </h2>
                <div class="grid grid-cols-2 gap-6">
                  <!-- عنوان مرخصی -->
                  <div>
                    <label
                      for="leaveTitle"
                      class="block text-gray-600 mb-2 text-sm"
                      >عنوان مرخصی</label
                    >
                    <Dropdown
                      id="leaveTitle"
                      :options="leaveTitles"
                      optionLabel="name"
                      placeholder="یک مورد را انتخاب کنید"
                      class="w-full p-inputtext-sm"
                    />
                  </div>

                  <!-- نوع مرخصی -->
                  <div>
                    <label
                      for="leaveType"
                      class="block text-gray-600 mb-2 text-sm"
                      >نوع مرخصی</label
                    >
                    <Dropdown
                      id="leaveType"
                      :options="leaveTypes"
                      optionLabel="name"
                      placeholder="یک مورد را انتخاب کنید"
                      class="w-full p-inputtext-sm"
                    />
                  </div>

                  <!-- واحد مربوطه -->
                  <div>
                    <label for="unit" class="block text-gray-600 mb-2 text-sm"
                      >واحد مربوطه خدمت</label
                    >
                    <Dropdown
                      id="unit"
                      :options="units"
                      optionLabel="name"
                      placeholder="یک مورد را انتخاب کنید"
                      class="w-full p-inputtext-sm"
                    />
                  </div>

                  <!-- جایگزین -->
                  <div>
                    <label
                      for="replacement"
                      class="block text-gray-600 mb-2 text-sm"
                      >جایگزین</label
                    >
                    <InputText
                      id="replacement"
                      placeholder="نام و نام خانوادگی"
                      class="w-full p-inputtext-sm"
                      style="height: 52px"
                    />
                  </div>

                  <!-- تاریخ مرخصی  -->
                  <div>
                    <label
                      for="startTime"
                      class="block text-gray-600 mb-2 text-sm"
                    >
                      تاریخ مرخصی
                    </label>
                    <Calendar
                      id="startTime"
                      showIcon
                      placeholder="Placeholder"
                      class="w-full p-inputtext-sm"
                    />
                  </div>

                  <!-- ساعت شروع -->
                  <div>
                    <label
                      for="startTime"
                      class="block text-gray-600 mb-2 text-sm"
                      >ساعت شروع</label
                    >
                    <Calendar
                      id="startTime"
                      showIcon
                      placeholder="Placeholder"
                      class="w-full p-inputtext-sm"
                    />
                  </div>

                  <!-- ساعت پایان -->
                  <div>
                    <label
                      for="endTime"
                      class="block text-gray-600 mb-2 text-sm"
                      >ساعت پایان</label
                    >
                    <Calendar
                      id="endTime"
                      showIcon
                      placeholder="Placeholder"
                      class="w-full p-inputtext-sm"
                      style="height: 52px"
                    />
                  </div>

                  <!-- توضیحات -->
                  <!-- کارت فرم -->
                  <div class="bg-white rounded-lg p-6 w-full max-w-4xl">
                    <div class="grid grid-cols-2 gap-6">
                      <!-- ... سایر فیلدهای فرم ... -->

                      <!-- توضیحات -->
                      <div class="col-span-2">
                        <label
                          for="description"
                          class="block text-gray-600 mb-2 text-sm"
                          >توضیحات</label
                        >
                        <textarea
                          id="description"
                          v-model="description"
                          rows="5"
                          cols="30"
                          class="w-full p-2 border border-gray-300 rounded"
                          placeholder="توضیحات"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-full flex justify-end mt-4">
                    <nuxt-link to="/general/leave/status">
                      <Button
                        label="درخواست جدید"
                        class="p-button-outlined"
                        style="
                          width: 150px;
                          color: #246020;
                          border: 1px solid #246020;
                        "
                      />
                    </nuxt-link>
                    <Button
                      label="صفحه اصلی"
                      class="mr-2 bg-green-600 text-white"
                      style="width: 150px; background-color: #246020"
                    />
                  </div>
                </div>
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
        { name: "خدمت ۱", code: "1" },
        { name: "خدمت ۲", code: "2" },
        // Add more options as needed
      ],
      leaveTitles: [
        { name: "مرخصی استعلاجی" },
        { name: "مرخصی سالانه" },
        { name: "مرخصی بدون حقوق" },
      ],
      leaveTypes: [{ name: "روزانه" }, { name: "ساعتی" }],
      units: [
        { name: "واحد کسب و کار" },
        { name: "واحد منابع انسانی" },
        { name: "واحد مالی" },
      ],
    };
  },
};
</script>
