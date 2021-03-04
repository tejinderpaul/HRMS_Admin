
    <template>
  <div class="text-center">
   
    <router-link
      :to="{
        name: 'allholidaylist',
      }"
      class="btn btn-md btn-primary"
      style="float: left; margin-left: 6%, margin-top: 1%"
      >Holidays List</router-link>
    <full-calendar :events="event" />
  </div>
</template>

    <script>
import FullCalendar from "vue-fullcalendar";
import config from "@/config";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      event: [],
    };
  },
  name: "Calendar",
  props: ["events"],
  components: {
    FullCalendar,
  },
  mounted() {
    let options = {
      method: "post",
      url: `${config.apiUrl}/holidays/all_holidays`,
      headers: {
        token: this.token,
      },
    };
    this.axios(options).then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        let event = {
          start: res.data.data[i].occasion_date,
          title: res.data.data[i].occasion_name,
        };
        this.event.push(event);
      }
    });
  },
};
</script>

    <style>
.red {
  background: rgb(235, 77, 77) !important;
  color: whitesmoke !important;
}
.blue {
  background: rgb(59, 59, 163) !important;
  color: whitesmoke !important;
}
.orange {
  background: orange !important;
  color: white !important;
}
.green {
  background: rgb(49, 155, 49) !important;
  color: white !important;
}
.blue,
.orange,
.red,
.green {
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
}
.event-item {
  padding: 2px 0 2px 4px !important;
}
</style>