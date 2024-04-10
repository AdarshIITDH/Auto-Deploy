document.addEventListener("DOMContentLoaded", async function () {
  await fetchRunningServices();
});

async function showToast(message, toasterId) {
  var toasterElement = document.getElementById(toasterId);
  toasterElement.querySelector(".toast-body").textContent = message;
  var toaster = new bootstrap.Toast(toasterElement);
  toaster.show();
  setTimeout(function () {
    toaster.hide();
  }, 5000);
}

async function fetchRunningServices() {
  const loader = (document.getElementById("loader-wrapper").style.display = "");
  try {
    const response = await fetch("/deployedlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      document.getElementById("loader-wrapper").style.display = "none";
      await showToast("Error: Sevice Details Failed", "toasterFail");
    } else {
      const data = await response.json();
      console.log("Deployed details:", data);
      await renderDeployedServices(data.data);
    }
  } catch (error) {
    console.error("Error:", error);
    await showToast("Error: " + error.message, "toasterFail");
  } finally {
    document.getElementById("loader-wrapper").style.display = "none";
  }
}

async function renderDeployedServices(data) {
  const tableBody = document.getElementById("deployedTableBody");
  tableBody.innerHTML = ""; // Clear existing rows
  dataArray = JSON.parse(data);
  if (Array.isArray(dataArray)) {
    dataArray.forEach((service) => {
      const row = `
        <tr>
          <td>${service.reponame}</td>
          <td>${service.service_name}</td>
          <td>${service.port}</td>
          <td><a href="${service.url}" target="_blank">${service.url}</a></td>
          <td>
            <button onclick="deleteDeployment('${service.reponame}','${service.service_name}','${service.port}')">Delete</button>
          </td>
        </tr>
      `;
      tableBody.insertAdjacentHTML("beforeend", row);
    });
  } else {
    console.error("Data is not an array:", data);
  }
}

async function deleteDeployment(repoName, serviceName, port) {
  const loader = (document.getElementById("loader-wrapper").style.display = "");
  try {
    const response = await fetch("/deployed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reponame: repoName,
        port: port,
        servicename: serviceName,
      }),
    });

    if (!response.ok) {
      document.getElementById("loader-wrapper").style.display = "none";
      await showToast("Error: Sevice Details Failed", "toasterFail");
    } else {
      const data = await response.json();
      await fetchRunningServices();
    }
  } catch (error) {
    console.error("Error:", error);
    await showToast("Error: " + error.message, "toasterFail");
  } finally {
    document.getElementById("loader-wrapper").style.display = "none";
  }
}
