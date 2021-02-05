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
                        >Email is required</span
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
                        >Password is required</span
                      >
                    </div>
                  </div>

                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" type="submit"
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
  methods: {
    onSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      let user = {
        email: this.user.email,
        password: this.user.password,
      };

      axios
        .post("http://localhost:4000/user/login", user, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          if (res.data.statusCode == 404) {
            this.error = "Invalid username/password";
          } else if (res.data.statusCode == 200) {
            localStorage.setItem("data", JSON.stringify(res.data.data));
            let admin = JSON.parse(localStorage.getItem("data"));
            console.log(admin);
            this.$router.push({ path: "/dashboard" });
          }
        });
    },
  },
};
</script>
