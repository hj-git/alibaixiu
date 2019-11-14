$('#formData').on('submit', function () {
  let userData = $(this).serialize
  $.ajax({
    type: "get",
    url: "/users",
    data: userData,
    success: function () {
      location.reload()
    },
    error:function () {
      alert('添加用户失败')
    }
  });
  return false
})