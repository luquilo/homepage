const experienceTemplate = (data) => {

	const responsibilitiesList = data.responsibilities.map(responsibility => {
    return `<li>${responsibility}</li>`;
  }).join('')

  return `
    <div class="experiences__company">
      <div class="experiences__company-header">
        <span class="experiences__company-header-durability">${data.period}</span>
        <h3 class="experiences__company-header-name">${data.company}</h3>
      </div>

      <div class="experiences__company-project">
        <span class="experiences__company-project-role">${data.title}</span>
        <ul class="experiences__company-project-responsibilities">
          ${responsibilitiesList}
        </ul>
      </div>
    </div>
  `;
};

const experiencesContainer = document.getElementById('experiences-container')
experiencesContainer.innerHTML = experiencesData.map(experienceTemplate).join('');

