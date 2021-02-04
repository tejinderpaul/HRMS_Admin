<template>
  <div class="container-fluid">
    <div class="text-center">
      <CCard>
        <CCardHeader>
          <strong><h2>Edit Goods Types</h2></strong>
        </CCardHeader>
        <CCardBody>
          <CForm v="goods" @submit.prevent="editGood">
            <CRow>
              <CCol class="col-sm-3">Title</CCol>
              <CCol sm="3">
                <div class="form-group">
                  <input
                    placeholder="Title"
                    v-model="goods.title"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.goods.title.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.goods.title.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.goods.title.required"
                      >Title is required</span
                    >
                  </div>
                </div>
              </CCol>
            </CRow>
            <CTextarea
              label="Description"
              horizontal
              rows="9"
              v-model="goods.description"
            />

            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"
                ><CIcon name="cil-check-circle" /> Submit</CButton
              >
              &nbsp;
              <CButton type="reset" size="sm" color="danger"
                ><CIcon name="cil-ban" /> Reset</CButton
              >
            </CCardFooter>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      id: 0,
      goods: {
        title: "",
        description: "",
      },
      submitted: false,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getgoods();
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  validations: {
    goods: {
      title: { required },
    },
  },
  methods: {
    editGood(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }
      let goodData = {
        title: this.goods.title,
        description: this.goods.description,
      };
      axios
        .post(`http://127.1.1.0:3000/goodstype/editgoods/${this.id}`, goodData)
        .then((res) => {
          router.go(-1);
        });
    },
    getgoods() {
      axios
        .post(`http://127.1.1.0:3000/goodstype/goods/${this.id}`)
        .then((data) => (this.goods = data.data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>