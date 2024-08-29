import { renderResults } from './renderFunctions.js';
const API_KEY = import.meta.env.VITE_API_KEY;

const searchForm = document.querySelector('.search__form');
const saveButton = document.querySelector('.save-button');
export let searchData = [];

const handleFormSubmit = (e) => {
   e.preventDefault();
   const searchInputValue = document.querySelector('#search').value.trim();

   return searchInputValue;
};

const fetchData = async (searchQuery) => {
   const url = `https://api.serpstack.com/search?access_key=${API_KEY}&query=${searchQuery}`;

   try {
      const response = await fetch(url);
      if (!response.ok) {
         throw new Error(`Fetching failed: ${response.status}`);
      }

      return await response.json();
   } catch (error) {
      console.error('Error fetching data:', error);
   }
};

const saveResultsAsJSON = () => {
   const jsonBlob = new Blob([JSON.stringify(searchData, null, 2)], {
      type: 'application/json',
   });
   const url = URL.createObjectURL(jsonBlob);

   const a = document.createElement('a');
   a.href = url;
   a.download = 'search_results.json';

   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
   URL.revokeObjectURL(url);
};

searchForm.addEventListener('submit', async (event) => {
   const searchQuery = handleFormSubmit(event);
   const data = await fetchData(searchQuery);
   renderResults(data);
});

saveButton.addEventListener('click', saveResultsAsJSON);
