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
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <div class="form-group">
                    <input
                      v-model="user.email"
                      autocomplete="username email"
                      placeholder="Email/Username"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.email.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.email.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.email.required"
                        ><b>Email is required</b></span
                      >
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      v-model="user.password"
                      id="password"
                      name="password"
                      placeholder="Password"
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

                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="success" class="px-4" type="submit"
                        >Login</CButton
                      >
                    </CCol>

                    <CCol col="6" class="text-right">
                      <CButton
                        color="link"
                        class="px-0"
                        :to="{
                          name: 'forgot-password',
                        }"
                        >Forgot password?</CButton
                      >
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
import { required } from "vuelidate/lib/validators";
import VueSweetalert2 from "vue-sweetalert2";
import Vue from "vue";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      submitted: false,
      error: "",
    };
  },
  validations: {
    user: {
      email: { required },
      password: { required },
    },
  },
  created() {
    // this.user = JSON.parse(localStorage.getItem("data"));
    // this.userId = this.user._id;
   
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
        // id:this.userId,
        email: this.user.email,
        password: this.user.password,
      };

      axios
        .post("http://192.168.1.13:4000/user/login", user, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          if (res.data.statusCode == 404 ) {
            this.error = "Invalid username/password";
          }
           else if (res.data.statusCode == 200) {
               Vue.swal.fire({
            toast: true,
            position: "top",
            icon: "success",
            title: "Login successfully",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
              this.$router.push({ path: "/dashboard" });
            localStorage.setItem("data", JSON.stringify(res.data.data));
           
          }
        });
    },
  },
};
</script>
<style>
.c-main{
  padding:0px
}
</style>
