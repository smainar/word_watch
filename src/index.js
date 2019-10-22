import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
    url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
    success: function(data) {
      $('.top-word').append(`The most used word is '${Object.keys(data.word)[0]}'. It has a count of ${Object.values(data.word)[0]}.`)
    },
    error: function(error) {
      console.log(error)
    }
  })
})
