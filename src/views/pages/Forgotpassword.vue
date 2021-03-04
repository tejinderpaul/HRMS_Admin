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
                  <p class="text-muted"><b>Reset Password</b></p>
                  <div class="form-group">
                    <input
                      v-model="user.email"
                      type="email"
                      autocomplete="username email"
                      placeholder="Email"
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

                  <CButton color="success" class="px-4" type="submit"
                    >Submit</CButton
                  >
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
import config from "@/config";
export default {
  name: "Forgotpassword",
  data() {
    return {
      user: {
        email: "",
      },
      submitted: false,
      error: "",
    };
  },
  validations: {
    user: {
      email: { required },
    },
  },
  methods: {
    onSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        //    return;
      }

      let user = {
        email: this.user.email,
      };

      axios
        .post(`${config.apiUrl}/user/forgotpassword`, user, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          if (res.data.statusCode === 200) {
            // this.$router.push({ name: "set-password",query:{param:res.data.data} });
            this.$router.push({
              name: "set-password",
              query: { param: res.data.data },
            });
          } else if (res.data.statusCode === 404) {
            this.error = "Invalid email";

          }
        });
    },
  },
};
</script>
