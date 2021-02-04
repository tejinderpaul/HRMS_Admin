<template>
  <div v="customer">
    <div class="card">
      <div class="card-header">
        <h1 class="text-center">Profile</h1>
      </div>
      <div class="card-body row">
        <img
          src=""
          onerror="this.onerror=null;this.src='https://www.maxpixel.net/static/photo/640/Elderly-Serious-Grandmother-Woman-Old-Aged-156097.png';"
          style="width: 200px"
        />
      </div>
      <div class="profile-view">
        <table id="w0" class="table table-striped table-bordered detail-view">
          <tbody>
            <tr>
              <th>Name</th>
              <td style="text-transform: capitalize">
                {{ admin.name }}
              </td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{{ admin.phone }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ admin.email }}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{{ admin.role }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-view",
  data() {
    //   console.log( )
    return {
      admin: JSON.parse(localStorage.getItem("data")),
    };
  },
  created() {
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
};
</script>