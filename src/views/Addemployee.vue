<template>
  <div class="container-fluid">
    <div class="text-center">
      <CCard>
        <CCardHeader>
          <strong><h2>Add User</h2></strong>
        </CCardHeader>
        <CCardBody>
          <div class="summary text-red" v-if="$v.user.$error">
            Form has errors
          </div>
          <CForm @submit.prevent="submitForm">
            <CRow>
              <CCol class="col-sm-3">Employee Id</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    :class="{ hasError: $v.user.employeeId.$error }"
                    type="text"
                    placeholder="Enter Employee Id"
                    v-model="user.employeeId"
                    class="form-control"
                  />
                  <!-- <div
                    v-if="submitted && $v.user.employeeId.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.employeeId.required"
                      >Truck capacity is required</span
                    >
                  </div> -->
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">First Name</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter firstname"
                    v-model="user.firstname"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.firstname.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.firstname.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.firstname.required"
                      >Truck capacity is required</span
                    >
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Last Name</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter lastname"
                    v-model="user.lastname"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.lastname.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.lastname.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.lastname.required"
                      >Truck capacity is required</span
                    >
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
                      >Truck capacity is required</span
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
                      >Truck capacity is required</span
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
                    type="number"
                    placeholder="Enter phonenumber"
                    v-model="user.phonenumber"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.phonenumber.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.phonenumber.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.phonenumber.required"
                      >Truck capacity is required</span
                    >
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">DOB</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="date"
                    v-model="user.dob"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.dob.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.dob.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.dob.required"
                      >Truck capacity is required</span
                    >
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Department</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter department"
                    v-model="user.department"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.department.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.department.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.department.required"
                      >Truck capacity is required</span
                    >
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Designation</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter designation"
                    v-model="user.designation"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.designation.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.designation.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.designation.required"
                      >Truck capacity is required</span
                    >
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Address</CCol>
              <CCol sm="2">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter city"
                    v-model="user.address.city"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.address.city.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.address.city.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.address.city.required"
                      >Truck capacity is required</span
                    >
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter State"
                    v-model="user.address.state"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.address.state.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.address.state.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.address.state.required"
                      >Truck capacity is required</span
                    >
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter country"
                    v-model="user.address.country"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.address.country.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.address.country.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.address.country.required"
                      >Truck capacity is required</span
                    >
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    v-model="user.address.pincode"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.address.pincode.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.address.pincode.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.address.pincode.required"
                      >Truck capacity is required</span
                    >
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Gender</CCol>
              <CCol sm="1">
                <div class="form-group">
                  <input
                    type="radio"
                    name="gender"
                    @change="onChange($event)"
                    value="male"
                    v-model="user.gender"
                  />
                  <label for="one"> Male</label><br />
                  <input
                    type="radio"
                    name="gender"
                    @change="onChange($event)"
                    value="female"
                    v-model="user.gender"
                  />
                  <label for="two"> Female</label><br />
                  <input
                    type="radio"
                    name="gender"
                    @change="onChange($event)"
                    value="other"
                    v-model="user.gender"
                  />
                  <label for="two"> Other</label>

                  <div
                    v-if="submitted && !$v.user.gender.required"
                    class="invalid-feedback"
                  >
                    Gender is required
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Marital Status</CCol>
              <CCol sm="1">
                <div class="form-group">
                  <input
                    type="radio"
                    name="maritalStatus"
                    @change="onChange($event)"
                    value="married"
                    v-model="user.maritalStatus"
                  />
                  <label for="one">Married</label><br />
                  <input
                    type="radio"
                    name="maritalStatus"
                    @change="onChange($event)"
                    value="unmarried"
                    v-model="user.maritalStatus"
                  />
                  <label for="two">Unmarried</label>
                  <div
                    v-if="submitted && !$v.user.maritalStatus.required"
                    class="invalid-feedback"
                  >
                    Marital Status is required
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
import router from "../router";
import { required, email, numeric, minLength } from "vuelidate/lib/validators";
export default {
  name: "add-employee",
  data() {
    return {
      errors: "",
      user: {
        employeeId: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phonenumber: "",
        role: "",
        gender: "",
        dob: "",
        maritalStatus: "",
        department: "",
        designation: "",
        address: {
          city: "",
          state: "",
          country: "",
          pincode: "",
        },
      },
      options: [
        "superadmin",
        "admin",
        "hr",
        "teamlead",
        "manager",
        "employees",
      ],
      submitted: false,
    };
  },
  validations: {
    user: {
      employeeId: { required },
      firstname: { required },
      lastname: { required },
      email: { required, email },
      password: { required },
      phonenumber: { required },
      //  role: { required },
      //  gender: { required },
      dob: { required },
      maritalStatus: { required },
      department: { required },
      designation: { required },
      address: { required },
    },
  },
  created() {
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    onChange(event) {
      var optionText = event.target.value;
      console.log(optionText);
    },
    submitForm() {
      this.submitted = true;
      // stop here if form is invalid
      // this.$v.user.$touch();

      // if (this.$v.user.$invalid) {
      //   return;
      // }
      this.$v.user.$touch();
      if (this.$v.user.$error) return;
      // to form submit after this
      alert("Form submitted");

      let user = {
        employeeId: this.user.employeeId,
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        password: this.user.password,
        phonenumber: this.user.phone,
        role: this.user.role,
        gender: this.user.gender,
        dob: this.user.dob,
        maritalStatus: this.user.maritalStatus,
        department: this.user.department,
        designation: this.user.designation,
        address: this.user.address,
      };
      this.submittoserver(user);
    },
    submittoserver(data) {
      axios.post("http://localhost:4000/user/signup", data).then((res) => {
        // router.go(-1);
      });
    },
  },
};
</script>