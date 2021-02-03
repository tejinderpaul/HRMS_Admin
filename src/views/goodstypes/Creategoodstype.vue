<template>
  <div class="container-fluid">
    <div class="text-center">
      <CCard>
        <CCardHeader>
          <strong><h2>Create Goods Types</h2></strong>
        </CCardHeader>
        <CCardBody>
          <CForm @submit.prevent="createCustomer">
            <CRow>
              <CCol class="col-sm-3">Title</CCol>
              <CCol sm="3">
                <div class="form-group">
                  <input
                    placeholder="Title"
                    v-model="user.title"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.title.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.title.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.title.required"
                      >Truck capacity is required</span
                    >
                  </div>
                </div>
              </CCol>
            </CRow>
            <!-- **************** -->
            <CTextarea
              label="Description"
              placeholder="description..."
              horizontal
              rows="9"
              v-model="user.description"
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
      user: {
        title: "",
        description: "",
      },
      submitted: false,
      errors: "",
    };
  },
  created() {
    //this.id = this.$route.params.id;
    // this.getAdminUsers();
  },
  validations: {
    user: {
      title: { required },
    },
  },
  methods: {
    createCustomer(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      let customerData = {
        title: this.user.title,
        description: this.user.description,
      };
      this.__submitToServer(customerData);
    },
    __submitToServer(data) {
      axios
        .post("http://127.1.1.0:3000/goodstype/creategoods", data)
        .then((res) => {
          router.go(-1);
        })
        .catch((error) => {});
    },
  },
  // navigate() {
  //   router.go(-1);
  // },
};
</script>