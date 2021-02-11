<template>
  <div class="container-fluid">
    <div class="text-center">
      <CCard>
        <CCardHeader>
          <strong><h2>Add User</h2></strong>
        </CCardHeader>
        <CCardBody>
          <CForm @submit.prevent="submitForm">
            <CRow>
              <CCol class="col-sm-3">Employee Id<span class="text-danger">*</span></CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter Employee Id"
                    v-model="user.employeeId"
                    :class="{
                      'is-invalid': validationStatus($v.user.employeeId),
                    }"
                    class="form-control"
                  />
                  <div
                    v-if="!$v.user.employeeId.required"
                    class="invalid-feedback"
                  >
                    Employee Id field is required.
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3"
                >First Name<span class="text-danger">*</span></CCol
              >
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter firstname"
                    v-model="user.firstname"
                    :class="{
                      'is-invalid': validationStatus($v.user.firstname),
                    }"
                    class="form-control"
                  />
                  <div
                    v-if="!$v.user.firstname.required"
                    class="invalid-feedback"
                  >
                    First name field is required.
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Last Name<span class="text-danger">*</span></CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter lastname"
                    v-model="user.lastname"
                    :class="{
                      'is-invalid': validationStatus($v.user.lastname),
                    }"
                    class="form-control"
                  />
                  <div
                    v-if="!$v.user.lastname.required"
                    class="invalid-feedback"
                  >
                    Last name field is required.
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Email<span class="text-danger">*</span></CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="email"
                    placeholder="Enter email"
                    v-model="user.email"
                    :class="{ 'is-invalid': validationStatus($v.user.email) }"
                    class="form-control"
                  />
                  <div v-if="!$v.user.email.required" class="invalid-feedback">
                    Email is required.
                  </div>
                   <div v-if="!$v.user.email.email" class="invalid-feedback">The email is not valid.</div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Password<span class="text-danger">*</span></CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="password"
                    placeholder="Enter password"
                    v-model="user.password"
                    :class="{
                      'is-invalid': validationStatus($v.user.password),
                    }"
                    class="form-control"
                  />
                  <div v-if="!$v.user.email.required" class="invalid-feedback">
                    Email is required.
                  </div>
                <div v-if="!$v.user.password.minLength" class="invalid-feedback">You must have at least {{ $v.user.password.$params.minLength.min }} letters.</div>
                <div v-if="!$v.user.password.maxLength" class="invalid-feedback">You must not have greater then {{ $v.user.password.$params.maxLength.min }} letters.</div> 
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Phone Number<span class="text-danger">*</span></CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="number"
                    placeholder="Enter phonenumber"
                    v-model="user.phonenumber"
                    :class="{
                      'is-invalid': validationStatus($v.user.phonenumber),
                    }"
                    class="form-control"
                  />
                  <div v-if="!$v.user.phonenumber.required" class="invalid-feedback">
                    Phone number is required.
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">DOB<span class="text-danger">*</span></CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="date"
                    v-model="user.dob"
                    class="form-control"
                    :class="{ 'is-invalid': validationStatus($v.user.dob) }"
                  />
                  <div v-if="!$v.user.dob.required" class="invalid-feedback">
                    Date of birth is required.
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Department<span class="text-danger">*</span></CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter department"
                    v-model="user.department"
                    class="form-control"
                    :class="{
                      'is-invalid': validationStatus($v.user.department),
                    }"
                  />
                  <div
                    v-if="!$v.user.department.required"
                    class="invalid-feedback"
                  >
                    Department is required.
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Designation<span class="text-danger">*</span></CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter designation"
                    v-model="user.designation"
                    class="form-control"
                    :class="{
                      'is-invalid': validationStatus($v.user.designation),
                    }"
                  />
                  <div
                    v-if="!$v.user.designation.required"
                    class="invalid-feedback"
                  >
                    Designation is required.
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Address<span class="text-danger">*</span></CCol>
              <CCol sm="2">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter city"
                    v-model="user.address.city"
                    class="form-control"
                    :class="{ 'is-invalid': validationStatus($v.user.address.city) }"
                  />
                  <div v-if="!$v.user.address.city" class="invalid-feedback">
                    City is required.
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter State"
                    v-model="user.address.state"
                    class="form-control"
                    :class="{ 'is-invalid': validationStatus($v.user.address.state) }"
                  />
                  <div v-if="!$v.user.address.state" class="invalid-feedback">
                    State is required.
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter country"
                    v-model="user.address.country"
                    class="form-control"
                    :class="{ 'is-invalid': validationStatus($v.user.address.country) }"
                  />
                  <div v-if="!$v.user.address.country" class="invalid-feedback">
                    Country is required.
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    v-model="user.address.pincode"
                    class="form-control"
                    :class="{ 'is-invalid': validationStatus($v.user.address.pincode) }"
                  />
                  <div v-if="!$v.user.address.pincode" class="invalid-feedback">
                    Pincode is required.
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Gender<span class="text-danger">*</span></CCol>
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
                  <div v-if="!$v.user.maritalStatus" class="invalid-feedback">
                    Pincode is required.
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
import { required, email, minLength, maxLength  } from "vuelidate/lib/validators";
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
        "employee",
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
      password: { required, minLength: minLength(6), maxLength: maxLength(18) },
      phonenumber: { required },
      role: { required },
      gender: { required },
      dob: { required },
      maritalStatus: { required },
      department: { required },
      designation: { required },
      address:{ 
      city: { required },
      state: { required },
      country: { required },
      pincode: { required },
      }
    },
  },
  created() {
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    onChange(event) {
      var optionText = event.target.value;
      console.log(optionText);
    },

    submitForm() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

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
      axios.post("http://192.168.1.20:4000/user/signup", data).then((res) => {
        window.location.reload();
      });
    },
  },
};
</script>