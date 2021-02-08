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
              <CCol class="col-sm-3">Employee Id</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter Employee Id"
                    v-model="user.employeeId"
                    class="form-control"
                  
                  />
                  <div
                    v-if="submitted && !$v.user.employeeId.required"
                    class="invalid-feedback"
                  >
                    <span> Employee Id is required</span>
                  </div>
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
                  
                  />
                  <div
                    v-if="submitted && !$v.user.firstname.required"
                    class="invalid-feedback"
                  >
                    <span> Name is required</span>
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
                   
                  />
                  <div
                    v-if="submitted && !$v.user.lastname.required"
                    class="invalid-feedback"
                  >
                    <span> Name is required</span>
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
                   
                  />
                  <div
                    v-if="submitted && $v.user.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.email.required"
                      >Email is required</span
                    >
                    <span v-if="!$v.user.email.email">Enter valid email</span>
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
                    type="number"
                    placeholder="Enter phonenumber"
                    v-model="user.phone"
                    class="form-control"
                    
                  />
                  <div
                    v-if="submitted && $v.user.phonenumber.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.phonenumber.required"
                      >Phone number is required</span
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
                  
                  />
                  <div
                    v-if="submitted && !$v.user.dob.required"
                    class="invalid-feedback"
                  >
                    DOB is required
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
                  
                  />
                  <div
                    v-if="submitted && !$v.user.department.required"
                    class="invalid-feedback"
                  >
                    Department is required
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
                  
                  />
                  <div
                    v-if="submitted && !$v.user.designation.required"
                    class="invalid-feedback"
                  >
                    Department is required
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
                    placeholder="Enter street"
                    v-model="user.street"
                    class="form-control"
               
                  />
                  <div
                    v-if="submitted && !$v.user.address.street.required"
                    class="invalid-feedback"
                  >
                    Street is required
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter city"
                    v-model="user.address.city"
                    class="form-control"
                 
                  />
                  <div
                    v-if="submitted && !$v.user.address.city.required"
                    class="invalid-feedback"
                  >
                    City is required
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter State"
                    v-model="user.address.state"
                    class="form-control"
                    
                  />
                  <div
                    v-if="submitted && !$v.user.address.state.required"
                    class="invalid-feedback"
                  >
                    State is required
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    v-model="user.address.zipCode"
                    class="form-control"
                    
                  />
                  <div
                    v-if="submitted && !$v.user.address.zipCode.required"
                    class="invalid-feedback"
                  >
                    Zipcode is required
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
        employeeId:"",
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
          street: "",
          city: "",
          state: "",
          zipCode: "",
        },
      },
      options: ['superadmin', 'admin', 'hr', 'teamlead', 'manager', 'employees'],
      submitted: false,
    };
  },
  // validations: {
  //   user: {
  //     firstname: { required },
  //     lastname: { required },
  //     email: { required, email },
  //     password: { required },
  //     phonenumber: { required },
  //     role: { required },
  //     gender: { required },
  //     dob: { required },
  //     maritalStatus: { required },
  //     department: { required },
  //     designation: { required },
  //     address: { required },
  //   },
  // },
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
    submitForm(e) {
      // this.submitted = true;
      // // stop here if form is invalid
      // this.$v.$touch();

      // if (this.$v.$invalid) {
      //   return;
      // }

      let user = {
        employeeId:this.user.employeeId,
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