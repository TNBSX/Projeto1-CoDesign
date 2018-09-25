
function before() {
    let test = document.querySelector('.mocador')
    test.classList.add('hidden')
    
    let load = document.querySelector('.load')
    load.classList.remove('hidden')
    
    setTimeout(after, 2000)
}

function after() {
    let test = document.querySelector('.mocador')
    test.classList.remove('hidden')
    
    let load = document.querySelector('.load')
    load.classList.add('hidden')
}

document.addEventListener('DOMContentLoaded', function() {
  /*
    Se não sabe o que é isto, volte ao ingrediente 2.
  */
  let db = connect('https://sitecodes208.firebaseio.com/')

  /*
    Uma query string é uma maneira de colocar um dicionário
    no próprio endereço da página. O início dela é marcado
    por um "?" e ela consiste em um número indeterminado de
    pares "chave=valor" separados por "&".

    A função extract lê a query string da página atual e
    transforma ela em um dicionário JavaScript usual.
  */
  let params = extract()

  /*
    Se não sabe o que é isto, volte ao ingrediente 3.
  */

  let path = '/' + params['category'] + '/courses/' + params['course']
  before()
  db.download(path, function(data) {
    /*
      Se não sabe o que é isto, volte ao ingrediente 3.
    */
    console.log(data)
    replace('body', {
        'titulo': data['titulo'],
        'disciplina':  params['course'],//data['courses'],
        'obj': data['obj'],
        'apr': data['apr'],
        'apr2': data['apr2'],
        'coPre': data['apr3']['Conhecimentos prévios'],
        'Materiais': data['apr3']['Materiais'],
        'imagem1': data['imagem1'],
        'imagem2': data['imagem2']
    })
  })
})

