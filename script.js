document
  .getElementById("caseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const caseId = document.getElementById("caseId").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const disease = document.getElementById("disease").value;
    const description = document.getElementById("description").value;

    // Create a new card for the case
    const caseCard = `
        <div class="col-md-4 case-card">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Case ID: ${caseId}</h5>
                    <p class="card-text"><strong>Age:</strong> ${age}</p>
                    <p class="card-text"><strong>Gender:</strong> ${gender}</p>
                    <p class="card-text"><strong>Disease:</strong> ${disease}</p>
                    <p class="card-text"><strong>Description:</strong> ${description}</p>
                </div>
            </div>
        </div>
    `;

    // Append the case card to the cases list
    document
      .getElementById("casesList")
      .insertAdjacentHTML("beforeend", caseCard);

    // Clear the form
    this.reset();
  });
