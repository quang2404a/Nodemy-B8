var data = [] ;
$('.btn').on('click',function(){
    let txt = $('#logo').val() ; 
    data.push(txt) ;

    $('.container').html('')

    for (let i = 0; i < data.length; i++) {
        $('.container').append(`<p>${data[i]}</p>`)
        
    }

    $('#logo').val('')
    $('#logo').focus()

})

$('#fix').on('click',function(){
    let txtfix = $('#ligi').val() ; 
    data.splice(0,1,txtfix)

    $('.container').html('')

    for (let i = 0; i < data.length; i++) {
        $('.container').append(`<p>${data[i]}</p>`)
        
    }

    $('#ligi').val('')
    $('#ligi').focus()
})

