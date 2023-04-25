$('.btn__open').click(function() {
  $('.btn__open').css('display', 'none')
  $('.navigation_open').css('display', 'flex')
})
$('.button__close').click(function() {
  $('.navigation_open').css('display', 'none')
  $('.btn__open').css('display', 'flex')
})

//dfsfa $( window ).resize(function() { if (screen.width <= 1400) { location.reload(); }});

function delelte_dsc() {
  $('.dsn-2021').css('display', 'none'); $('.dsn-2020').css('display', 'none'); $('.dsn-2019').css('display', 'none'); 
  $('.dsn-2018').css('display', 'none'); $('.dsn-2017').css('display', 'none'); $('.dsn-2016').css('display', 'none');
  $('.dsn-2015').css('display', 'none'); $('.dsn-2014').css('display', 'none'); $('.dsn-2013').css('display', 'none');
  $('.dsn-2012').css('display', 'none'); $('.dsn-2010').css('display', 'none'); $('.dsn-2008').css('display', 'none');
  $('.dsn-2007').css('display', 'none'); $('.dsn-2006').css('display', 'none'); $('.dsn-2005').css('display', 'none');
  $('.dsn-2003').css('display', 'none'); $('.dsn-2002').css('display', 'none'); $('.dsn-1999').css('display', 'none');
  $('.dsn-1997').css('display', 'none'); $('.dsn-1995').css('display', 'none'); $('.dsn-1994').css('display', 'none');
  $('.dsn-1992').css('display', 'none'); $('.dsn-1986').css('display', 'none'); $('.dsn-1985').css('display', 'none');
  $('.dsn-1984').css('display', 'none'); $('.dsn-1980').css('display', 'none'); $('.dsn-1979').css('display', 'none');
  $('.dsn-1976').css('display', 'none'); $('.dsn-1975').css('display', 'none'); $('.dsn-1973').css('display', 'none');
  $('.dsn-1971').css('display', 'none'); $('.dsn-1963').css('display', 'none') 
}
$('.btn-date').click(function() { $('.dates-description').css('padding', '35')})
// -----------------------
$('.btn-2021').click(function() { delelte_dsc(); $('.dsn-2021').css('display', 'flex')})
$('.btn-2020').click(function() { delelte_dsc(); $('.dsn-2020').css('display', 'flex')})
$('.btn-2019').click(function() { delelte_dsc(); $('.dsn-2019').css('display', 'flex')})
$('.btn-2018').click(function() { delelte_dsc(); $('.dsn-2018').css('display', 'flex')})
$('.btn-2017').click(function() { delelte_dsc(); $('.dsn-2017').css('display', 'flex')})
$('.btn-2016').click(function() { delelte_dsc(); $('.dsn-2016').css('display', 'flex')})
$('.btn-2015').click(function() { delelte_dsc(); $('.dsn-2015').css('display', 'flex')})
$('.btn-2014').click(function() { delelte_dsc(); $('.dsn-2014').css('display', 'flex')})
$('.btn-2013').click(function() { delelte_dsc(); $('.dsn-2013').css('display', 'flex')})
$('.btn-2012').click(function() { delelte_dsc(); $('.dsn-2012').css('display', 'flex')})
$('.btn-2010').click(function() { delelte_dsc(); $('.dsn-2010').css('display', 'flex')})
$('.btn-2008').click(function() { delelte_dsc(); $('.dsn-2008').css('display', 'flex')})
$('.btn-2007').click(function() { delelte_dsc(); $('.dsn-2007').css('display', 'flex')})
$('.btn-2006').click(function() { delelte_dsc(); $('.dsn-2006').css('display', 'flex')})
$('.btn-2005').click(function() { delelte_dsc(); $('.dsn-2005').css('display', 'flex')})
$('.btn-2003').click(function() { delelte_dsc(); $('.dsn-2003').css('display', 'flex')})
$('.btn-2002').click(function() { delelte_dsc(); $('.dsn-2002').css('display', 'flex')})
$('.btn-1999').click(function() { delelte_dsc(); $('.dsn-1999').css('display', 'flex')})
$('.btn-1999').click(function() { delelte_dsc(); $('.dsn-1999').css('display', 'flex')})
$('.btn-1997').click(function() { delelte_dsc(); $('.dsn-1997').css('display', 'flex')})
$('.btn-1995').click(function() { delelte_dsc(); $('.dsn-1995').css('display', 'flex')})
$('.btn-1994').click(function() { delelte_dsc(); $('.dsn-1994').css('display', 'flex')})
$('.btn-1992').click(function() { delelte_dsc(); $('.dsn-1992').css('display', 'flex')})
$('.btn-1986').click(function() { delelte_dsc(); $('.dsn-1986').css('display', 'flex')})
$('.btn-1985').click(function() { delelte_dsc(); $('.dsn-1985').css('display', 'flex')})
$('.btn-1984').click(function() { delelte_dsc(); $('.dsn-1984').css('display', 'flex')})
$('.btn-1980').click(function() { delelte_dsc(); $('.dsn-1980').css('display', 'flex')})
$('.btn-1979').click(function() { delelte_dsc(); $('.dsn-1979').css('display', 'flex')})
$('.btn-1976').click(function() { delelte_dsc(); $('.dsn-1976').css('display', 'flex')})
$('.btn-1975').click(function() { delelte_dsc(); $('.dsn-1975').css('display', 'flex')})
$('.btn-1973').click(function() { delelte_dsc(); $('.dsn-1973').css('display', 'flex')})
$('.btn-1971').click(function() { delelte_dsc(); $('.dsn-1971').css('display', 'flex')})
$('.btn-1963').click(function() { delelte_dsc(); $('.dsn-1963').css('display', 'flex')})

const TOKEN = "6073424362:AAGNrN__u6Wxp8ds8qx_4YFPLJ6gaZCW9WI";
        const CHAT_ID = "-1001938524967";
        // 628821798
        const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

        document.getElementById('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            message = `Заявка с сайта\n\n`;
            message += `Название компании:  ${ this.name_compaing.value }\n`;
            message += `Контактное лицо:  ${ this.contact_face.value }\n`;
            message += `Email:  ${ this.email.value }\n`;
            message += `Телефон:  ${ this.telephone.value }\n`;
            message += `Сообщение:  ${ this.question.value }\n`;

            axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mod: 'html',
                text: message
            })

            .then((res) => {
                this.name_compaing.value = "";
                this.contact_face.value = "";
                this.email.value = "";
                this.telephone.value = "";
                this.question.value = "";
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() =>{
                console.log('Конец')
            })

            // onclick=form.reset()
        })
