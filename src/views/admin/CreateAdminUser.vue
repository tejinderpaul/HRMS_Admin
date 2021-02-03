<template>
  <div class="container-fluid">
    <div class="text-center">
      <CCard>
        <CCardHeader>
          <strong><h2>Create Admin User</h2></strong>
        </CCardHeader>
        <CCardBody>
          <CForm @submit.prevent="submitForm">
            <CRow>
              <CCol class="col-sm-3">Name</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter name"
                    v-model="user.name"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.name.$error,
                    }"
                  />
                  <div
                    v-if="submitted && !$v.user.name.required"
                    class="invalid-feedback"
                  >
                    Name is required
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Email</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="email"
                    placeholder="Enter email"
                    v-model="user.email"
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
                  <span v-if="!$v.user.email.email"
                    >Enter valid email</span
                  >
                </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Password</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="password"
                    placeholder="Enter password"
                    v-model="user.password"
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
                  <span v-if="!$v.user.password.minLength"
                    >Please enter min. 6 char password</span
                  >
                </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Phone Number</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type=""
                    placeholder="Enter phone number"
                    v-model="user.phone"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.phone.$error,
                    }"
                  />
                     <div
                  v-if="submitted && $v.user.phone.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.phone.required"
                    >Phone number is required</span
                  >
                  <span v-if="!$v.user.phone.numeric"
                    >Phone number must be integer</span
                  >
                </div>
                </div>
              </CCol>
            </CRow>

            <CSelect
              label="Select Role"
              name="role"
              horizontal
              :options="options"
              placeholder="Please select"
              :value.sync="user.role"
            />
            <CCardFooter>
              <CButton type="submit" class="btn btn btn-success"
                ><CIcon name="cil-check-circle" /> Submit</CButton
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
import { required, email, numeric , minLength } from "vuelidate/lib/validators";
export default {
  name: "create-admin-user",
  data() {
    return {
      errors: "",
      user: {
        name: "",
        email: "",
        password: "",
        phone: "",
        role: "",
      },
      options: ["Admin", "Sub Admin", "Manager"],
      submitted: false,
    };
  },
  validations: {
    user: {
      name: { required },
      email: { required, email },
      password: { required },
      phone: { required, numeric, minLength: minLength(6) },
      role: { required },
    },
  },
  created() {
    //this.id = this.$route.params.id;
    // this.getAdminUsers();
  },
  methods: {
    submitForm(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return
      }

      let user = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        phone: this.user.phone,
        role: this.user.role,
      };
      this.submittoserver(user);
    },
    submittoserver(data) {
      axios.post("http://localhost:3000/adminuser/signin", data).then((res) => {
        router.go(-1);
      });
    },
  },
};
</script>