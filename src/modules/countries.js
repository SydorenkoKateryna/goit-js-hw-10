function renderCountryList(countries) {
  const markup = countries
    .map(
      ({ name: { official: officialName }, flags: { svg: countryFlag } }) => {
        return `<li class="list_item">
        <img src="${countryFlag}" width="30">
        <p class="list_text">${officialName}</p>
          </li>
        `;
      }
    )
    .join('');

  const countryList = document.querySelector('.country-list');
  countryList.insertAdjacentHTML('beforeend', markup);
}

function renderCountryInfo(countries) {
  const markup = countries
    .map(
      ({
        name: { official: officialName },
        capital,
        population,
        flags: { svg: countryFlag },
        languages,
      }) => {
        return `
          <div class="wrapper"><img src="${countryFlag}" width="30">
          <h1 class="title">${officialName}</h1></div>
          <p class="text"><b>Capital:</b> ${capital}</p>
          <p class="text"><b>Population:</b> ${population}</p>
          <p class="text"><b>Languages:</b> ${Object.values(languages).join(
            ', '
          )}</p>
        `;
      }
    )
    .join('');

  const countryInfo = document.querySelector('.country-info');
  countryInfo.insertAdjacentHTML('beforeend', markup);
}

function clearCountries() {
  const countryList = document.querySelector('.country-list');
  const countryInfo = document.querySelector('.country-info');

  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

export { renderCountryList, renderCountryInfo, clearCountries };
