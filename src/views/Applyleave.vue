 <template>
  <div>
    <CCard>
      <CCardHeader>
        <strong><h2>LEAVE FORM</h2></strong>
      </CCardHeader>
      <CCardBody>
        <CForm @submit.prevent="submitForm">
          <CRow>
            <CCol class="col-sm-3"
              >Subject<span class="text-danger">*</span></CCol
            >
            <CCol sm="9">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Enter leave subject"
                  class="form-control"
                  v-model="user.leaveType"
                  :class="{
                    'is-invalid': validationStatus($v.user.leaveType),
                  }"
                />
                <div
                  v-if="!$v.user.leaveType.required"
                  class="invalid-feedback"
                >
                  Subject field is required.
                </div>
              </div>
            </CCol>
          </CRow>

          <!-- ******************************************************* -->
          <CRow>
            <CCol class="col-sm-3">Date</CCol>
            <CCol sm="3">
              <span>from<span class="text-danger">*</span></span>
              <div class="form-group">
                <input
                  type="date"
                  placeholder="Vehicle capacity....."
                  class="form-control"
                  v-model="user.fromDate"
                  :class="{
                    'is-invalid': validationStatus($v.user.fromDate),
                  }"
                />
                <div v-if="!$v.user.fromDate.required" class="invalid-feedback">
                  From date is required.
                </div>
              </div>
            </CCol>

            <CCol sm="3">
              <span>TO<span class="text-danger">*</span></span>
              <div class="form-group">
                <input
                  type="date"
                  placeholder="Enter basic fare....."
                  class="form-control"
                  v-model="user.toDate"
                  :class="{
                    'is-invalid': validationStatus($v.user.toDate),
                  }"
                />
                <div v-if="!$v.user.toDate.required" class="invalid-feedback">
                  To date is required.
                </div>
              </div>
            </CCol>
          </CRow>

          <!-- ******************************************************* -->
          <CRow>
            <CCol class="col-sm-3"
              >Reason<span class="text-danger">*</span></CCol
            >
            <CCol sm="9">
              <div class="form-group">
                <textarea
                  placeholder="Enter basic distance....."
                  class="form-control"
                  v-model="user.note"
                />
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol class="col-sm-3"
              >Assign To<span class="text-danger">*</span></CCol
            >
            <CCol class="col-sm-9">
              <select
                v-model="user.mangername"
                name="option"
                id="city"
                class="form-control"
                tabindex="12"
              >
                <option value="" selected disabled>Please Select</option>
                <option
                  v-for="(options, index) in options"
                  v-bind:value="options"
                  :key="index"
                >
                  ({{ options.role }}) {{ options.firstname.toUpperCase() }} ({{
                    options.email
                  }})
                </option>
              </select>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CButton
                type="submit"
                class="btn btn btn-success"
                style="margin-left: 50%"
                >Submit</CButton
              >
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import { required, email, numeric, minLength } from "vuelidate/lib/validators";
export default {
  name: "apply-leave",
  data() {
    return {
      errors: "",
      user: {
        mangername: "",
        userId: "",
        leaveType: "",
        fromDate: "",
        toDate: "",
        note: "",
      },
      options: [],
      submitted: false,
    };
  },
  validations: {
    user: {
      leaveType: { required },
      fromDate: { required },
      toDate: { required },
      note: { required },
      mangername: { required },
    },
  },
  created() {
    let user = JSON.parse(localStorage.getItem("data"));
    this.userId = user._id;
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {
    axios.post("http://localhost:4000/leaves/adminlist").then((res) => {
      this.options = res.data.data;
      console.log(this.options);
    });
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submitForm() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

      let user = {
        mangerId: this.user.mangername,
        userId: this.userId,
        leaveType: this.user.leaveType,
        fromDate: this.user.fromDate,
        toDate: this.user.toDate,
        note: this.user.note,
      };
      this.submittoserver(user);
    },
    submittoserver(data) {
      console.log(data);
      axios
        .post("http://localhost:4000/leaves/applyleave", data)
        .then((res) => {
          window.location.reload();
        });
    },
  },
};
</script>

