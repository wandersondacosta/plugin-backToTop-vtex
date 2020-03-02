
$('<div class="backToTop"><div class="backToTop-text">subir</div></div>').insertBefore('.footer')

$('.backToTop').css({
        display: "none",
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%)",
        width: "56px",
        height: "30px",
        backgroundColor: "#48b9b2",
        borderRadius: "100px 100px 0 0",
        backgroundImage: "url(https://lojalivreeleve.vteximg.com.br/arquivos/icon-totop.png)",
        backgroundRepeat: "no-repeat",
        zIndex: 9999,
        backgroundPosition: "center 5px",
        cursor: "pointer"
})
.find('.backToTop-text').css({
    textAlign: "center",
    position: "relative",
    display:" flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "18px",
    color: "#fff",
    fontFamily: "sans-serif",
    fontSize: "12px",
    textTransform: "uppercase"
});

$('.backToTop').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});

$(window).bind('scroll', function (even){
    if($(window).scrollTop() > 200){
        $('.backToTop').fadeIn(200)
    }else{ $('.backToTop').fadeOut(200)}
});


