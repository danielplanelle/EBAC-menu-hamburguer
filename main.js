$(document).ready(function(){
  $('#carousel-images').slick({
    autoplay:true,
  });

  $('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
  })
/* para inserir a mask de exemplo no campo do formulário
    $('#telefone').mask('sss-0000', {
    placeholder: 'ABC-1234'
    } 
    {
      placeholder: 'dd/mm/aaaa'
    }) 
   
  let mascara = if (celular) ? '(00) 00000-0000' : ('00) 0000-0000'
  $('#telefone').mask(mascara)*/

  $('#telefone').mask('(00) 00000-0000')

  $('form').validate({
    rules: {
      nome:/*precisa colocar name=""*/ {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: false
      }
    },
    messages: {
      nome: 'Por favor, insira o seu nome.'
    },
    submitHandler: function(form) {
      console.log(form)
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos > 0) {
        alert(`Há ${camposIncorretos} campo(s) incorreto(s)`);
      } 
      console.log(camposIncorretos)
    }
  })
})