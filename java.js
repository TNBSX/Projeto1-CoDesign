document.addEventListener('DOMContentLoaded', function() {
  let db = new DB('https://codesign-ae0df.firebaseio.com')

  let tpTitulo = new TP('template-titulo')

  let tpObj = new TP('template-obj')

  let tpApr = new TP('template-aprs')

  let tpApr2 = new TP('template-aprs2')

  let tpApr3 = new TP('template-aprs3')

  let params = new URLSearchParams(window.location.search)

  let url = '/' + params.get('category') + '/courses/' + params.get('course') + '/'

  db.download(url, function(data) {
    let titulo = document.querySelector('.titulo')
    titulo.innerHTML = tpTitulo.generate({'titulo': data['titulo']})

    let obj = document.querySelector('.obj')
    obj.innerHTML = tpObj.generate({'Objetivos de Projeto': data['obj']})

    let apr = document.querySelector('.aprs')
    apr.innerHTML = tpApr.generate({'Objetivos de Aprendizado': data['apr']})

    let apr2 = document.querySelector('.aprs2')
    apr2.innerHTML = tpApr2.generate({'Detalhes': data['apr2']})

    let apr3 = document.querySelector('.aprs3')
    apr3.innerHTML = tpApr3.generate({'Conhecimentos e Materiais': data['apr3']})
  })
})
