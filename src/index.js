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

  $('#reveal-yourself').click(function() {
    let input = $('#input').val();

  $.ajax({
      method: 'POST',
      url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
      contentType: 'application/json',
      data: JSON.stringify({ word: { value: `${input}` } } ),
      success: function(response) {
        $('#input').val('')
        alert(`You added ${input} successfully!`)
      },
      error: function(error) {
        console.log(error)
      }
    })
  })
})
