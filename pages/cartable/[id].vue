<template>
  <div class="finance p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">تعریف لیست واریزی</p>
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
        <div
          style="
            background-color: white;
            width: 100%;
            height: 100%;
            padding: 20px;
            border-radius: 12px;
          "
        >
          <div class="n bg-gray-50 flex items-center justify-center">
            <!-- Form Container -->
            <form class="w-full px-8 py-8 bg-white rounded-lg">
              <!-- Subject Field -->
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="mb-6 flex-1">
                  <label class="block text-gray-700 mb-2" for="subject"
                    >موضوع</label
                  >
                  <InputText
                    type="text"
                    v-model="subject"
                    class="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                </div>

                <!-- Refer To Field with Dropdown -->
                <div class="mb-6 flex-1">
                  <label class="block text-gray-700 mb-2" for="refer-to"
                    >ارجاع به</label
                  >
                  <Dropdown
                    id="refer-to"
                    :options="user"
                    v-model="selectedOption"
                    optionLabel="lastname"
                    class="w-full"
                  />
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <!-- Draft Field -->
                <div class="mb-6 flex-1">
                  <label class="block text-gray-700 mb-2" for="draft"
                    >رونوشت</label
                  >

                  <Dropdown
                    id="refer-to"
                    :options="user"
                    v-model="selectedOption1"
                    optionLabel="lastname"
                    class="w-full"
                  />
                </div>
                <div class="mb-6 flex-1"></div>
              </div>

              <!-- Letter Text Field with Editor -->
              <div class="mb-6">
                <label class="block text-gray-700 mb-2" for="letter-text"
                  >متن نامه</label
                >
                <!-- PrimeVue Editor with style adjustments -->
                {{ content }}
                <ClientOnly>
                  <Editor
                    id="letter-text"
                    v-model="content"
                    editorStyle="height: 320px"
                    class="w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                </ClientOnly>
              </div>

              <div class="flex justify-between">
                <div class="card flex flex-col items-center gap-6">
                  <FileUpload
                    mode="basic"
                    @select="onFileSelect"
                    customUpload
                    auto
                    severity="secondary"
                    class="p-button-outlined"
                  />
                  <img
                    v-if="src"
                    :src="src"
                    alt="Image"
                    class="shadow-md rounded-xl w-full sm:w-64"
                    style="filter: grayscale(100%)"
                  />
                </div>

                <div>
                  <div
                    class="flex justify-center items-center"
                    style="
                      width: 40px;
                      height: 40px;
                      background-color: #f3f4f6;
                      border-radius: 50%;
                    "
                  >
                    <img src="/public/cartable/icons-Line-printer.png" alt="" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="flex justify-end items-center mt-4">
          <div class="flex justify-end mt-4">
            <Button
              label="انصراف"
              class="p-button-outlined"
              style="width: 150px; color: #246020; border: 1px solid #246020"
            />
            <nuxt-link to="/cartable/letterstatus">
              <Button
                label="ثبت"
                class="mr-2 bg-green-600 text-white"
                style="width: 150px; background-color: #246020"
                @click="getdetails()"
              />
            </nuxt-link>
          </div>
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
  components: {},
  data() {
    return {
      pageId: this.$route.params.id,
      src: null,
      letterText: "", // for v-model with Editor
      selectedOption: null,
      selectedOption1: null,
      user: null,
      data: null,
      details: null,
      subject: null,
      content: null,
      options: [
        { name: "گزینه ۱", code: "1" },
        { name: "گزینه ۲", code: "2" },
        { name: "گزینه ۳", code: "3" },
      ],
      options1: [
        { name: "مالی", code: "1" },
        { name: "کریر", code: "2" },
        { name: "اداری", code: "3" },
      ],
    };
  },
  methods: {
    onFileSelect(event) {
      const file = event.files[0];
      const reader = new FileReader();

      reader.onload = async (e) => {
        this.src = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    async getproduct() {
      try {
        this.user = await $fetch("/api/letters");
      } catch (error) {
        console.log(error);
      } finally {
        this.user = toRaw(this.user.data);
        console.log("let", toRaw(this.user));
      }
    },
    async detailsfu() {
      try {
        this.details = await $fetch("/api/letters/go", {
          query: { id: `${this.pageId}` },
        });
        this.subject = this.details.data.subject;
        this.content = this.details.data.content;
      } catch (error) {
        console.log(error);
      } finally {
        this.details = toRaw(this.details.data);
        console.log("getdetails", toRaw(this.details));
      }
    },
    // async postproduct() {
    //   try {
    //     this.data = await $fetch("/api/letters/post", {
    //       method: "POST",
    //       body: {
    //         subject: "عنوان تستی",
    //         content: "محتوای تستی",
    //         senders: ["user_123"],
    //         mainRecipient: "user_456",
    //       },
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     this.data = toRaw(this.data);
    //     console.log("hy", toRaw(this.data));
    //   }
    // },
  },
  beforeMount() {
    this.getproduct();
    this.detailsfu();
  },
  name: "LetterForm",
};
</script>
<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
