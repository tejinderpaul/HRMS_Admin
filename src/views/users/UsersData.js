let usersData12 = [
  { full_name: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
  { full_name: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  { full_name: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  { full_name: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  { full_name: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  { full_name: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
  { full_name: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned', _classes: 'table-success'},
  { full_name: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  { full_name: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  { full_name: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  { full_name: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active', _classes: 'table-success'},
  { full_name: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  { full_name: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  { full_name: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  { full_name: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  { full_name: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
  { full_name: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  { full_name: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  { full_name: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  { full_name: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  { full_name: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
  { full_name: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  { full_name: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _classes: 'table-danger'},
  { full_name: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
  { full_name: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
]

import axios from "axios";
let usersData = [];
axios
  .post("http://localhost:3000/drivers/alldrivers", {
    //  "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  })
  .then(
    (res) => {
      if (res.data.statusCode === 200) {
        // console.log(res.data.driver);
        usersData = res.data.driver
        //   localStorage.setItem("token", res.data.data.email);
        //this.$router.push({ path: "/dashboard" })
        // this.$router.push({ name: TheContainerVue });
        // console.log(usersData);
      } 
    },
    (err) => {
      this.error = err.response.message;
    }
  );
// console.log(usersData12);

export default usersData


