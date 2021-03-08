<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="4">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="onSubmit">
                  <div v-if="error" class="alert alert-danger" role="alert">
                    {{ error }}
                  </div>
                  <h4><b>Change Password</b></h4>
                  <div class="form-group">
                    <input
                      v-model="user.password"
                      placeholder="Enter current password"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.password.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.password.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.password.required"
                        ><b>Password is required</b></span
                      >
                    </div>
                  </div>
                  <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                  <div class="form-group">
                    <input
                      type="password"
                      v-model="user.newpassword"
                      id="newpassword"
                      name="newpassword"
                      placeholder="New Password"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.newpassword.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.newpassword.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.newpassword.required"
                        ><b>Password is required</b></span
                      >
                    </div>
                  </div>
                  <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                  <div class="form-group">
                    <input
                      type="password"
                      v-model="user.confirmpassword"
                      id="confirmpassword"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      class="form-control"
                      :class="{
                        'is-invalid':
                          submitted && $v.user.confirmpassword.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.confirmpassword.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.confirmpassword.required"
                        ><b>Confirm Password is required</b></span
                      >
                      <span v-else-if="!$v.user.confirmpassword.sameAsPassword"
                        ><b>New Password and Confirm Password don't match</b></span
                      >
                    </div>
                  </div>

                  <CRow>
                    <CCol col="6">
                      <CButton color="success" type="submit">Submit</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from "axios";
import { required, sameAs } from "vuelidate/lib/validators";
import config from "@/config";
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

export default {
  name: "Login",
  data() {
    return {
      admin: JSON.parse(localStorage.getItem("data")),
      user: {
        password: "",
        newpassword: "",
        confirmpassword: "",
      },
      submitted: false,
      error: "",
    };
  },
  validations: {
    user: {
      password: { required },
      newpassword: { required },
      confirmpassword: { required, sameAsPassword: sameAs("newpassword") },
    },
  },
  methods: {
    onSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      let user = {
        id: this.admin._id,
        password: this.user.password,
        newpassword: this.user.newpassword,
        confirmpassword: this.user.confirmpassword,
      };

      axios
        .post(`${config.apiUrl}/user/changepassword`, user, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.statusCode === 200) {
            Vue.swal.fire({
            toast: true,
            position: "top",
            icon: "success",
            title: "Password Change successfully",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
            this.$router.push({ path: "/dashboard" });
          } else if (res.data.statusCode === 400) {
             Vue.swal.fire({
            toast: true,
            position: "top",
            icon: "warning",
            title: res.data.message,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
           
          }
        });
    },
  },
};
</script>
