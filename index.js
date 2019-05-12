'use strict';


function getDogImages() {
  let dogBreed = $('.dogBreed').val();
  //console.log('Showing breed of dog: ' + dogBreed);
  fetch('https://dog.ceo/api/breed/' + dogBreed + '/images/random')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
        throw new Error(response.statusText);
      })
    .then(responseJson =>
        displayResults(responseJson))
    .catch(error => alert('Something went wrong. This went wrong: ' + error.stack));
}

function displayResults(responseJson) {
  $('.results').empty();
  $('.results').append(`<img src="${responseJson.message}" class="results-img">`)
  $('.results').removeClass('hidden');
  console.log(responseJson.message);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});