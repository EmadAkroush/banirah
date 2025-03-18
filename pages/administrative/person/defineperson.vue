<template>
  <div class="finance p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">تعریف شخص</p>
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
          <div class="p-6 mx-auto">
            <h2 class="text-2xl font-bold mb-4 text-right">عنوان وظیفه</h2>
            <form class="grid grid-cols-2 gap-4">
              <!-- Date Picker -->
              <div>
                <label class="block text-right mb-2">نوع</label>
                <Dropdown
                  v-model="form.type"
                  :options="types"
                  optionLabel="label"
                  placeholder="یک مورد را انتخاب کنید"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-right mb-2">تاریخ</label>
                <PersianDatePicker v-model="selectedDate"    />
                
              </div>

              <!-- Full Name -->
              <div>
                <label class="block text-right mb-2">نام و نام خانوادگی</label>
                <InputText
                  v-model="form.fullName"
                  placeholder="نام و نام خانوادگی"
                  class="w-full"
                />
              </div>

              <!-- Father Name -->
              <div>
                <label class="block text-right mb-2">نام پدر</label>
                <InputText
                  v-model="form.fatherName"
                  placeholder="نام پدر"
                  class="w-full"
                />
              </div>
              <!-- Father Name -->
              <div>
                <label class="block text-right mb-2"> کد تفضیلی</label>
                <InputText
                  v-model="form.fatherName"
                  placeholder="کد تفضیلی"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-right mb-2">نوع تفضیلی</label>
                <Dropdown
                  v-model="form.type"
                  :options="types"
                  optionLabel="label"
                  placeholder="یک مورد را انتخاب کنید"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-right mb-2"> شماره شناسنامه </label>
                <InputText
                  v-model="form.fatherName"
                  placeholder="نام پدر"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-right mb-2"> کدملی </label>
                <InputText
                  v-model="form.fatherName"
                  placeholder="کد ملی"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-right mb-2"> کدشخص </label>
                <InputText
                  v-model="form.fatherName"
                  placeholder="کد شخص"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-right mb-2"> کدشخص </label>
                <InputText
                  v-model="form.fatherName"
                  placeholder="کد اقتصادی"
                  class="w-full"
                />
              </div>

              <!-- Gender Radio Buttons -->
              <div class="flex items-center gap-4">
                <label class="block text-right">جنسیت</label>
                <div class="flex items-center space-x-2">
                  <RadioButton
                    v-model="form.gender"
                    inputId="male"
                    value="مرد"
                  />
                  <label for="male" class="ml-2">مرد</label>
                </div>
                <div class="flex items-center space-x-2">
                  <RadioButton
                    v-model="form.gender"
                    inputId="female"
                    value="زن"
                  />
                  <label for="female" class="ml-2">زن</label>
                </div>
              </div>

              <!-- File Upload -->
              <div class="">
                <label class="block text-right mb-2">بارگذاری فایل</label>
                <FileUpload
                  mode="basic"
                  accept=".pdf,.doc,.png,.jpg"
                  class="w-full"
                />
                <ul>
                  <li
                    v-for="file in uploadedFiles"
                    :key="file.name"
                    class="flex justify-between items-center mt-2"
                  >
                    <span>{{ file.name }}</span>
                    <Button
                      icon="pi pi-times"
                      class="p-button-text p-button-rounded"
                      @click="removeFile(file)"
                    />
                  </li>
                </ul>
              </div>

              <!-- Action Buttons -->
              <div class="col-span-2 flex justify-end mt-4">
              <nuxt-link to="">
                <Button label="انصراف" class="p-button-outlined"  style="color: #246020; border: 1px solid #246020; width: 150px;"  />
              </nuxt-link>
              <nuxt-link to="/administrative/person/listpersonfinal">
                <Button
                  label="ثبت"
                  class=" text-white px-4 py-2 mr-3"
                  style="background-color: #246020; border: 1px solid #246020; width: 150px;"

                />
            </nuxt-link>
              </div>
            </form>
          </div>
        </div>
        <div class="flex justify-between items-center mt-4"></div>
      </div>
    </div>

    <div></div>
  </div>
</template>
<style lang="scss">

.finance {
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
      form: {
        date: null,
        type: null,
        fatherName: "",
        fullName: "",
        gender: "مرد",
      },
      types: [
        { label: "راننده", value: "type1" },
        { label: "صاحب ماشین ", value: "type2" },
        { label: "صاحب کالا ", value: "type3" },
        { label: "نمایندگان", value: "type4" },


        // Add more options as needed
      ],
      uploadedFiles: [],
    };
  },
};
</script>
