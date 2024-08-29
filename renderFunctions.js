import { searchData } from './main.js';

const searchResults = document.querySelector('.search-results');
const saveButton = document.querySelector('#save-button');

const displayNoResultsMessage = () => {
   searchResults.innerHTML = '<p>No results found or an error occurred.</p>';
   saveButton.style.display = 'none';
};

const clearResults = () => {
   searchResults.innerHTML = '';
};

const showSaveBtn = () => {
   saveButton.style.display = 'block';
};

export const renderResults = (data) => {
   if (!data || !data.organic_results) {
      displayNoResultsMessage();
      return;
   }

   searchData.length = 0;
   searchData.push(...data.organic_results);
   clearResults();
   data.organic_results.forEach(renderSingleResult);
   showSaveBtn();
};

export const renderSingleResult = (result) => {
   const resultElement = document.createElement('div');
   resultElement.classList.add('result');
   resultElement.innerHTML = `
        <h1>${result.title}</h1>
        <a href="${result.url}">${result.url}</a>
        <p>${result.snippet}</p>
    `;
   searchResults.appendChild(resultElement);
};
