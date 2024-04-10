document.addEventListener("DOMContentLoaded", async function () {
  //const repoName = localStorage.getItem("repoName");
  //const port = localStorage.getItem("port");
  //document.getElementById("selectedDetails").style.display = "block";
  //document.getElementById("price").textContent = "";
  //document.getElementById("repoName").textContent = repoName;
  await fetchServices();
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

async function apicall() {
  const serviceName = document.getElementById("selectedServiceName").innerText;
  const loader = (document.getElementById("loader-wrapper").style.display = "");
  const repoName = localStorage.getItem("repoName");
  const port = localStorage.getItem("port");
  try {
    const response = await fetch("/deployment", {
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
      await showToast("Error: Deployment Failed", "toasterFail");
    } else {
      // const data = await response.json();
      // localStorage.setItem("port", port);
      // localStorage.setItem("stack", stack);
      // document.getElementById("message2").innerHTML =
      //   "<a href='" + data.github_url + "'>Jenkins Report</a>";
      // const nextButton = document.getElementById("nextButton");
      // nextButton.style.display = "block";
      document.getElementById("loader-wrapper").style.display = "none";
      await showToast("Success: Deployed", "toasterSuccess");
    }
  } catch (error) {
    console.error("Error:", error);
    await showToast("Error: " + error.message, "toasterFail");
  } finally {
    document.getElementById("loader-wrapper").style.display = "none";
  }
}

async function fetchServices() {
  const loader = (document.getElementById("loader-wrapper").style.display = "");
  try {
    const response = await fetch("/estimate_price", {
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
      const serviceContainer = document.getElementById("serviceContainer");
      data.prices.forEach((service) => {
        let buttonMarkup = "";
        if (service.service === "EC2" || service.service === "ECR") {
          buttonMarkup = `<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirmModal" onclick="selectService('${service.service}')">Select</button>`;
        } else {
          buttonMarkup = `<span style="color: black;">Coming Soon...</span>`;
        }
        const card = `
            <div class="col-md-3">
              <div class="card service-card">
                <div class="card-body">
                  <h5 class="card-title">${service.service}</h5>
                  <hr class="line" />
                  <p class="card-text">${service.details.replace(
                    /\n/g,
                    "<br>"
                  )}</p>
                  <hr class="line" />
                  <p class="card-text"><strong>Price:</strong> ₹ ${service.estimated_price.toFixed(
                    2
                  )}</p>
                  <hr class="line" />
                  ${buttonMarkup}                
                  </div>
              </div>
            </div>
          `;
        serviceContainer.innerHTML += card;
      });
    }
  } catch (error) {
    console.error("Error:", error);
    await showToast("Error: " + error.message, "toasterFail");
  } finally {
    document.getElementById("loader-wrapper").style.display = "none";
  }
}

function selectService(serviceName) {
  // You can perform actions here upon selecting a service, such as showing a confirmation modal
  console.log("Selected service:", serviceName);
  document.getElementById("popup_msg").innerText =
    "Are you sure you want to select " + serviceName + "?";
  document.getElementById("selectedServiceName").innerText = serviceName;
  var modalElement = document.getElementById("confirmModal1");
  var modal = new bootstrap.Modal(modalElement);
  // Trigger the modal
  modal.show();
}
