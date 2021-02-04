 <template>
  <div>
    <CCard>
      <CCardHeader>
        <strong><h2>Edit Vehicle Type</h2></strong>
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
        <CForm v="user" @submit.prevent="createVehicle">
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
                  v-if="submitted && $v.user.vehicle_type.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.vehicle_type.required"
                    >Vehicle Type is required</span
                  >
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
          <!-- <CInputFile label="File input" horizontal v-model="user.icon_image" /> -->

          <!-- ********************************************* -->
          <CRow>
            <CCol class="col-sm-3">Details</CCol>
            <CCol sm="9">
              <div class="form-group">
                <input
                  placeholder="Point1....."
                  v-model="user.details[0]"
                  class="form-control"
                />
              </div>
            </CCol>
          </CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput
                placeholder="point2..."
                v-model="user.details[1]" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput
                placeholder="point3..."
                v-model="user.details[2]" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput
                placeholder="point4..."
                v-model="user.details[3]" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput
                placeholder="point5..."
                v-model="user.details[4]" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput
                placeholder="point6..."
                v-model="user.details[5]" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput
                placeholder="point7..."
                v-model="user.details[6]" /></CCol
          ></CRow>
          <CRow
            ><CCol class="col-sm-3" /><CCol
              ><CInput
                placeholder="point8..."
                v-model="user.details[7]" /></CCol
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
        details: [],
      },
      submitted: false,
      size: "",
    };
  },
  validations: {
    user: {
      vehicle_type: { required },
      truck_size: { required },
      truck_sizeL: { required },
      truck_sizeB: { required },
      truck_sizeH: { required },
      truck_capacity: { required },
      basic_fare: { required },
      basicfare_perkm: { required },
      basic_distance: { required },
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getvehicletype();

    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    createVehicle(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      let userData = {
        vehicle_type: this.user.vehicle_type,
        truck_size:
          this.user.truck_sizeL +
          "x" +
          this.user.truck_sizeB +
          "x" +
          this.user.truck_sizeH,
        truck_capacity: this.user.truck_capacity,
        basicfare_perkm: this.user.basicfare_perkm,
        basic_fare: this.user.basic_fare,
        basic_distance: this.user.basic_distance,
        icon_image: this.user.icon_image,
        details: [
          this.user.details[0],
          this.user.details[1],
          this.user.details[2],
          this.user.details[3],
          this.user.details[4],
          this.user.details[5],
          this.user.details[6],
          this.user.details[7],
        ],
      };
      axios
        .post(
          `http://localhost:3000/vehicle/editvehicletype/${this.id}`,
          userData
        )
        .then((res) => {
          router.go(-1);
        });
    },
    getvehicletype() {
      axios
        .post(`http://127.1.1.0:3000/vehicle/vehicletype/${this.id}`)
        .then(
          (data) => (
            (this.user = data.data.data),
            (this.size = this.user.truck_size.split("x")),
            (this.user.truck_sizeL = this.size[0]),
            (this.user.truck_sizeB = this.size[1]),
            (this.user.truck_sizeH = this.size[2])
          )
        );
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>