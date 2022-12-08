let companyNameFirst = document.getElementById("companyName");
let contactNameSecond = document.getElementById("contactName");
let titleNameThird = document.getElementById("titleName");

function add() {
  let Categories = {
    companyName: companyNameFirst.value,
    contactName: contactNameSecond.value,
    contactTitle: titleNameThird.value,
  };

  axios
    .post("https://northwind.vercel.app/api/suppliers", Categories)
    .then((res) => {
      axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
        res.data.forEach((element) => {
          let Elementtr = document.createElement("tr");

          let IDtd = document.createElement("td");
          IDtd.innerHTML = element.id;

          let Companytd = document.createElement("td");
          Companytd.innerHTML = element.companyName;

          let Contacttd = document.createElement("td");
          Contacttd.innerHTML = element.contactName;

          let Titletd = document.createElement("td");
          Titletd.innerHTML = element.contactTitle;

          let Btntd = document.createElement("td");
          let Delete = document.createElement("button");

          Delete.innerHTML = "Delete";
          Delete.id = element.id;
          Btntd.appendChild(Delete);
          Delete.addEventListener("click", function (e) {
            let Deletedid = e.target.id;
            e.target.parentElement.parentElement.remove();
            remove(Deletedid);
          });

          Elementtr.appendChild(IDtd);
          Elementtr.appendChild(Companytd);
          Elementtr.appendChild(Contacttd);
          Elementtr.appendChild(Titletd);
          Elementtr.appendChild(Btntd);
          document.getElementById("tableBody").append(Elementtr);
          console.log(Elementtr);
        });
      });
    });
}
