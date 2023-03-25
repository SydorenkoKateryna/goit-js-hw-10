import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './modules/fetchCountries';
import {
  renderCountryList,
  renderCountryInfo,
  clearCountries,
} from './modules/countries';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
let searchState = '';

input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange() {
  const name = input.value.trim();

  if (!name) {
    clearCountries();

    return;
  }

  if (name !== searchState) {
    searchState = name;
    clearCountries();

    fetchCountries(name)
      .then(response => {
        if (response.length === 1) {
          renderCountryInfo(response);
        } else if (response.length >= 2 && response.length <= 10) {
          renderCountryList(response);
        } else {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }
      })
      .catch(error => {
        if ((error.message = '404')) {
          Notiflix.Notify.failure('Oops, there is no country with that name');
        }
      });
  }
}
