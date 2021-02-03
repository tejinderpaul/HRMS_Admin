 <template>
  <div>
    <CCard>
      <CCardHeader>
        <strong><h2>Create Vehicle Type</h2></strong>
        <h4 class="text-right mt-20">
          <small>
            <button
              class="btn btn-success"
              v-on:click="navigate()"
              style="margin-top: -53px"
            >
              View All Vehicle Type
            </button>
          </small>
        </h4>
      </CCardHeader>
      <CCardBody>
        <CForm @submit.prevent="createVehicle">
          <CRow>
            <CCol class="col-sm-3">Enter Vehicle Type</CCol>
            <CCol sm="9">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Vehicle type name..."
                  v-model="user.vehicle_type"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.vehicle_type.$error,
                  }"
                />
                <div
                  v-if="submitted && !$v.user.vehicle_type.required"
                  class="invalid-feedback"
                >
                  Vehicle Type is required
                </div>
              </div>
            </CCol>
          </CRow>

          <!-- ********************************************************************* -->
          <CRow>
            <CCol class="col-sm-3">Enter Vehicle Size</CCol>
            <CCol sm="3">
              <div class="form-group">
                <input
                  placeholder="Length"
                  v-model="user.truck_sizeL"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.truck_sizeL.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.truck_sizeL.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.truck_sizeL.required"
                    >Truck length is required</span
                  >
                  <span v-if="!$v.user.truck_sizeL.numeric"
                    >Length must be in Numbers</span
                  >
                </div>
              </div>
            </CCol>
            <CCol sm="3">
              <div class="form-group">
                <input
                  placeholder="Breadth"
                  v-model="user.truck_sizeB"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.truck_sizeB.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.truck_sizeB.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.truck_sizeB.required"
                    >Truck breadth is required</span
                  >
                  <span v-if="!$v.user.truck_sizeB.numeric"
                    >Breadth must be in Numbers</span
                  >
                </div>
              </div>
            </CCol>
            <CCol sm="3">
              <div class="form-group">
                <input
                  placeholder="Height"
                  v-model="user.truck_sizeH"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.truck_sizeH.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.truck_sizeH.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.truck_sizeH.required"
                    >Truck height is required</span
                  >
                  <span v-if="!$v.user.truck_sizeH.numeric"
                    >Height must be in Numbers</span
                  >
                </div>
              </div>
            </CCol>
          </CRow>
          <!-- ******************************************************* -->
          <CRow>
            <CCol class="col-sm-3">Enter Vehicle Capacity</CCol>
            <CCol sm="9">
              <div class="form-group">
                <input
                  placeholder="Vehicle capacity....."
                  v-model="user.truck_capacity"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.truck_capacity.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.truck_capacity.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.truck_capacity.required"
                    >Truck capacity is required</span
                  >
                  <span v-if="!$v.user.truck_capacity.numeric"
                    >Capacity must be in Numbers</span
                  >
                </div>
              </div>
            </CCol>
          </CRow>

          <!-- ******************************************** -->

          <CRow>
            <CCol class="col-sm-3">Enter Vehicle Basic Fare</CCol>
            <CCol sm="9">
              <div class="form-group">
                <input
                  placeholder="Enter basic fare....."
                  v-model="user.basic_fare"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.basic_fare.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.basic_fare.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.basic_fare.required"
                    >Basic fare is required</span
                  >
                  <span v-if="!$v.user.basic_fare.numeric"
                    >Basic fare must be in Numbers</span
                  >
                </div>
              </div>
            </CCol>
          </CRow>

          <!-- ******************************************************* -->
          <CRow>
            <CCol class="col-sm-3">Enter Vehicle Basic Distance</CCol>
            <CCol sm="9">
              <div class="form-group">
                <input
                  placeholder="Enter basic distance....."
                  v-model="user.basic_distance"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.basic_distance.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.basic_distance.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.basic_distance.required"
                    >Basic distance is required</span
                  >
                  <span v-if="!$v.user.basic_distance.numeric"
                    >Basic distance must be in Numbers</span
                  >
                </div>
              </div>
            </CCol>
          </CRow>
          <!-- ******************************************************* -->
          <CRow>
            <CCol class="col-sm-3">Enter Vehicle Basic Per k.m</CCol>
            <CCol sm="9">
              <div class="form-group">
                <input
                  placeholder="Enter basic per km....."
                  v-model="user.basicfare_perkm"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.basicfare_perkm.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.basicfare_perkm.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.basicfare_perkm.required"
                    >Basic Per k.m is required</span
                  >
                  <span v-if="!$v.user.basicfare_perkm.numeric"
                    >Basic fare per k.m must be in Numbers</span
                  >
                </div>
              </div>
            </CCol>
          </CRow>
          <!-- ******************************************************* -->
          <CInputFile label="File input" horizontal v-model="user.icon_image" />

          <!-- ********************************************* -->
          <CRow>
            <CCol class="col-sm-3">Details</CCol>
            <CCol sm="9">
              <div class="form-group">
                <input
                  placeholder="Point1....."
                  v-model="user.details1"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.details1.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.details1.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.details1.required"
                    >Details is required</span
                  >
                </div>
              </div>
            </CCol>
          </CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput placeholder="point2..." v-model="user.details2" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput placeholder="point3..." v-model="user.details3" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput placeholder="point4..." v-model="user.details4" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput placeholder="point5..." v-model="user.details5" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput placeholder="point6..." v-model="user.details6" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput placeholder="point7..." v-model="user.details7" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput placeholder="point8..." v-model="user.details8" /></CCol
          ></CRow>

          <CButton
            type="submit"
            class="btn btn btn-success"
            style="margin-left: 50%"
            >Submit</CButton
          >
        </CForm>
      </CCardBody>
    </CCard>
  </div>
</template>

 <script>
import axios from "axios";
import router from "../../router";
import { required, numeric } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      user: {
        vehicle_type: "",
        truck_size: "",
        truck_sizeL: "",
        truck_sizeB: "",
        truck_sizeH: "",
        truck_capacity: "",
        basic_fare: "",
        basicfare_perkm: "",
        basic_distance: "",
        icon_image: "",
        details1: "",
        details2: "",
        details3: "",
        details4: "",
        details5: "",
        details6: "",
        details7: "",
        details8: "",
      },
      submitted: false,
    };
  },
  validations: {
    user: {
      vehicle_type: { required },
      truck_size: { required },
      truck_sizeL: { required, numeric },
      truck_sizeB: { required, numeric },
      truck_sizeH: { required, numeric },
      truck_capacity: { required, numeric },
      basic_fare: { required, numeric },
      basicfare_perkm: { required, numeric },
      basic_distance: { required, numeric },
      details1: { required },
    },
  },
  methods: {
    createVehicle(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
      }

      let user = {
        vehicle_type: this.user.vehicle_type,
        truck_size:
          this.user.truck_sizeL +
          "ftx" +
          this.user.truck_sizeB +
          "ftx" +
          this.user.truck_sizeH,
        truck_capacity: this.user.truck_capacity,
        basicfare_perkm: this.user.basicfare_perkm,
        basic_fare: this.user.basic_fare,
        basic_distance: this.user.basic_distance,
        icon_image: this.user.icon_image,
        details: [
          this.user.details1,
          this.user.details2,
          this.user.details3,
          this.user.details4,
          this.user.details5,
          this.user.details6,
          this.user.details7,
          this.user.details8,
        ],
      };
      this.__submitToServer(user);
    },
    __submitToServer(data) {
      axios
        .post("http://127.0.0.1:3000/vehicle/createvehicletype", data)
        .then((res) => {
          router.go(-1);
        })
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>
