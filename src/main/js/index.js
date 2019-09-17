$('#btn-clac').on('click', (evt) => {
  const formData = $('#myform')
      .serializeArray()
      .reduce((a, c) => _.extend(a, {[c.name]: c.value}), {})
  $('#result').val(Number(formData.firstValue) + Number(formData.secondValue))
})
