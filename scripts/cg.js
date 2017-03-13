$(window).load(function(){
  var selectValue = $('.select-component').val();
  $(document).on('change', '.select-component', function() {
    $('.component').removeAttr('style');
    $('.component').find('input,select').removeAttr('required', 'required');
    selectValue = $(this).val();
    if (selectValue == null || selectValue == '' || selectValue == ' ') {
      return false;
    } else {
      $(this).parents('.form-layout').find('#' + selectValue).show();
      $(this).parents('.form-layout').find('#' + selectValue).find('input,select').attr('required', 'required');
    }
  });
  $(document).on('click','.form-layout .generate',function() {
    var formParent = $(this).parents('.form-layout');
    formParent.find('input[type=text],input[type=password],input[type=radio],input[type=file],input[type=checkbox],select,textarea').valid();
    if (formParent.find('input[type=text],input[type=password],input[type=radio],input[type=file],input[type=checkbox],select,textarea').valid()) {
      switch (selectValue) {
        case 'searchBox':
          genrateHTML(null, selectValue)
          break;
        case 'social-media':
          genrateHTML(null, selectValue)
          break;
        case 'star-rating':
          genrateHTML(null, selectValue)
          break;
        case 'navigation':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              var type = componentID.find('input[type="radio"]:checked').attr('id');
              genrateHTML(componentID.find('input[type="text"]').val(), type)
            } else {
              //alert()
            }
          });
          break;
        case 'slider':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              var type = componentID.find('input[type="radio"]:checked').attr('id');
              genrateHTML(componentID.find('input[type="text"]').val(), type)
            } else {
              //alert()
            }
          });
          break;
        case 'footer':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              var type = componentID.find('input[type="radio"]:checked').attr('id');
              genrateHTML(componentID.find('input[type="text"]').val(), type)
            } else {
              //alert()
            }
          });
          break;
        case 'selective':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              var type = componentID.find('input[type="radio"]:checked').attr('id');
              genrateHTML(componentID.find('input[type="text"]').val(), type)
            } else {
              //alert()
            }
          });
          break;
        case 'dummyData':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              var type = componentID.find('input[type="radio"]:checked').attr('id');
              genrateHTML(componentID.find('input[type="text"]').val(), type)
            } else {
              //alert()
            }
          });
          break;

        case 'accordion':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              genrateHTML(componentID.find('input').val(), componentID.attr('id'))
            } else {
              //alert()
            }
          });
          break;
        case 'definationList':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              genrateHTML(componentID.find('input').val(), componentID.attr('id'))
            } else {
              //alert()
            }
          });
          break;
        case 'formLayout':
          //          alert(selectValue)
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              genrateHTML(componentID.find('input').val(), componentID.attr('id'))
            } else {
              //alert()
            }
          });
          break;

        case 'jsTabs':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              genrateHTML(componentID.find('input').val(), componentID.attr('id'))
            } else {
              //alert()
            }
          });
          break;
        case 'selectOption':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              genrateHTML(componentID.find('input').val(), componentID.attr('id'))
            } else {
              //alert()
            }
          });
          break;
        case 'ovelrayCode':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              var overlayId = componentID.find('input.overlayid').val();
              var animationIn = componentID.find('select.animationIn').val();
              var animationOut = componentID.find('select.animationOut').val();
              genrateoverlayHTML(overlayId, animationIn, animationOut);
            } else {
              //alert()
            }
          });
          break;
        case 'pagination':
          $('.component').each(function() {
            if ($(this).css('display') === 'block') {
              var componentID = $(this);
              genrateHTML(componentID.find('input[type="text"]').val(), componentID.attr('id'))
            } else {
              //alert()
            }
          });
          break;
      }
    } else {

    }
  });
  $(document).on('click', '.generate-other-component a.box-btn', function() {
    var target = $(this).parents('.generate-other-component').prev('.result-container');
    var openPopup = target.attr('data-id');
  });

  $(document).on('click', '#small-footer + label', function() {
    if ($('#small-footer:checked')) {
      $('.only-big-footer').html("");
    }

  });
  $(document).on('click', '#big-footer + label', function() {
    if ($('#small-footer:checked')) {
      $('.only-big-footer').append('<label>No of column</label><input type="text" data-validate="number" name="no-of-col" required="required">');
    }
  });
});




function genrateHTML(count, id) {
  switch (id) {
    /* +++++++++++ pagination Start +++++++++++++++ */
    case 'pagination':
      $('.result-container textarea').html();
      $('.result-container').html('<ul class="pagination"></ul>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container ul').append('<li><a href="#">' + i + '</a></li>');
      }
      $('.result-container ul li').eq(0).addClass('prev first');
      $('.result-container ul li').eq(count - 1).addClass('next last');
      $('.result-container ul li').eq(count - 3).addClass('pager-ellipsis');
      $('.result-container ul li').eq(count - 3).html('<span>...</span>');

      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>EMMET is not available</textarea>');
      break;
      /* +++++++++++ pagination End +++++++++++++++ */

      /* +++++++++++ social media Start +++++++++++++++ */
    case 'social-media':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="social-media"><ul></ul></div>').attr('data-id', id);
      var social_media_array = ['facebook', 'twitter', 'linkedin', 'google-plus', 'you-tube'];
      for (i = 1; i <= 5; i++) {
        $('.result-container ul').append('<li><a href="#" class="icon ' + social_media_array[i - 1] + '"></a></li>');
      }

      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>' + '.social-media>ul>li.icon.icon-$*5' + '</textarea>');
      break;
      /* +++++++++++ social media End +++++++++++++++ */



      /* +++++++++++ navigation Start +++++++++++++++ */
    case 'without-sub-menu':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="nav"><ul></ul></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container ul').append('<li><a href="#">Link' + i + ' </a></li>');
      }
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.nav>ul>li*' + count + '>a[href="#"]{Link$}</textarea>');
      break;

    case 'with-sub-menu':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="nav"><ul></ul></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container ul').append('<li><a href="#">Link' + i + '</a></li>');
      }
      $('.result-container ul li').eq(0).append(('<ul class="submenu"></ul>')).addClass('has-sub-menu');
      for (i = 1; i <= count; i++) {
        $('.submenu').append(('<li><a href="#">Link' + i + '</a></li>'));
      }
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.nav>ul>li.has-sub-menu*' + count + '>a[href="#"]{Link$}+.sub-menu>ul>li>a[href="#"]{Link$}*3</textarea>');

      break;
      /* +++++++++++ navigation End +++++++++++++++ */

      /* +++++++++++ slider Start +++++++++++++++ */
    case 'without-mob-img':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="banner"><ul></ul></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container ul').append('<li><img src="images/' + i + '.jpg" ></li>');
      }
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.banner>ul>li*' + count + '>img[src="images/$.jpg"]</textarea>');
      break;

    case 'with-mob-img':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="banner"><ul></ul></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container ul').append('<li><img src="images/' + i + '.jpg" ><img src="images/mobile-img/' + i + '.jpg" ></li>');
      }
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.banner>ul>li*' + count + '>img[src="images/$.jpg"]+img[src="images/mobile-img/$.jpg"]</textarea>');

      break;

      /* +++++++++++ slider End +++++++++++++++ */

      /* +++++++++++ footer Start +++++++++++++++ */
    case 'big-footer':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="footer"><div class="container"><div class="footer-links"></div><p>copyright © 2014 ABC Entertainment Pvt Ltd.</p></div></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container .footer-links').append('<dl><dt>Column' + i + '</dt><dd></dd></dl>');
      }
      $('.footer-links dl dd').append('<ul></ul>');
      for (i = 1; i <= count; i++) {
        $('.footer-links dl dd ul').append('<li><a href="#">link' + i + '</a></li>');
      }
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.footer>.contaienr>.footer-links>dl*' + count + '>dt{Column $}+dd>ul>li*4>a[href="#"]</textarea>');

      break;

    case 'small-footer':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="footer"><div class="container"> copyright © 2014 ABC Entertainment Pvt Ltd.</div></div>').attr('data-id', id);
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.footer>.container{copyright © 2014 ABC Entertainment Pvt Ltd.}</textarea>');

      break;

      /* +++++++++++ footer End +++++++++++++++ */

      /* +++++++++++ Tabs Start +++++++++++++++ */
    case 'jsTabs':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="tabCnt"><div class="tabNav"><ul></ul></div><div class="tabResult"></div></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        if (i == 1) {
          $('.result-container .tabCnt .tabNav ul').append('<li><a href="javascript:void(0)" rel="tab' + i + '" class="active">Tab ' + i + '</a></li>');
        } else {
          $('.result-container .tabCnt .tabNav ul').append('<li><a href="javascript:void(0)" rel="tab' + i + '">Tab ' + i + '</a></li>');
        }

      }
      for (i = 1; i <= count; i++) {
        if (i == 1) {
          $('.result-container .tabCnt .tabResult').append('<div class="tabBx overview" id="tab' + i + '" style="display:block"><div class="content">Content for Tab ' + i + '</div></div>');
        } else {
          $('.result-container .tabCnt .tabResult').append('<div class="tabBx overview" id="tab' + i + '"><div class="content">Content for Tab ' + i + '</div></div>');
        }


      }
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');

      $('.emmet-result-container').html('<textarea>..tabCnt>(.tabNav>ul>li*' + count + '>a[href="javascript:void(0)" , rel="tab$"]{Tab $})+(.tabResult>.tabBx.overview#tab$*' + count + '>.content{Content for Tab $})</textarea>');
      break;
      /* +++++++++++ Tabs Start +++++++++++++++ */

      /* +++++++++++ Defination list Start +++++++++++++++ */
    case 'definationList':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="defination-parent"></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container .defination-parent').append('<dl><dt>Definition Title ' + i + '</dt><dd>Definition Description ' + i + '</dd></dl>');

      }
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.defination-parent>dl*' + count + '>dt+dd</textarea>');
      break;
    case 'accordion':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="accordion"></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container .accordion').append('<dl><dt>Accordion Tittle ' + i + '</dt><dd>Accordion content' + i + '</dd></dl>');
      }
      var htmlstring = $('.result-container').html();
      console.log(htmlstring)
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.accordion>dl*' + count + '>dt{Accordion Tittle $}+dd{Accordion Description $}</textarea>');
      break;

      /* +++++++++++ Defination list end +++++++++++++++ */


      /* +++++++++++ Search box Start +++++++++++++++ */
    case 'searchBox':
      $('.result-container textarea,.emmet-result-container textarea').html();
      $('.result-container').html('<div class="search-container"><form class="checkform"><input type="text" placeholder="Search"><input type="button" value="Search"></form></div>').attr('data-id', id);
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.search-container>form.checkform>input[placeholder=Search,type=text]+input[value=Search,type=button]</textarea>');
      break;

    case 'star-rating':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="rating"><ul></ul></div>').attr('data-id', id);
      for (i = 1; i <= 5; i++) {
        $('.result-container .rating ul').append('<li><button></button></li>');
      }
      var htmlstring = $('.result-container').html();
      $('.result-container').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.rating>ul>li*5>button</textarea>');

      break;

      /* +++++++++++ Search box End +++++++++++++++ */


      /* +++++++++++ Form layout Start +++++++++++++++ */
    case 'formLayout':
      $('.result-container textarea').html();
      $('.result-container').html('<form class="checkForm" action="#" method="post"><div class="form-layout"></div></form>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container .form-layout').append('<div class="form-row"><div class="form-field mandatory"><label for="fname">Input Type ' + i + '</label><!--Insert your input tag here--><div class="clear"></div></div><div class="clear"></div></div>');
      }
      var htmlstring = $('.result-container').html();

      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container ').html('<textarea>.checkForm>.form-layout>.form-row*' + count + '>.form-field.madatory>label[for=lablefor$]+input[type="text"]+.clear</textarea>');
      break;

      /* +++++++++++ Form Layout end +++++++++++++++ */


      /* +++++++++++ Select option Start +++++++++++++++ */
    case 'selectOption':
      $('.result-container textarea').html();
      $('.result-container').html('<select></select>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container select').append('<option value="option' + i + '">Option' + i + '</option>');
      }
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container  ').html('<textarea>select>option[value=option$]*' + count + '</textarea>');
      break;
      /* +++++++++++ Select option End +++++++++++++++ */

      /* +++++++++++ Checkbox Start +++++++++++++++ */
    case 'checkbox':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="input-group input-type-checkbox"><ul></ul></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container ul').append('<li><input type="checkbox" id="checkbox' + i + '" name="checkbox' + i + '"><label for="checkbox' + i + '">Label for checkbox ' + i + '</label></li>');
      }
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.input-group.input-type-checkbox>ul>li*' + count + '>input#checkbox$[name="checkbox$"type="checkbox"]+label[for="checkbox$"]{Label for checkbox $}</textarea>');
      break;

      /* +++++++++++ Checkbox End +++++++++++++++ */

      /* +++++++++++ Radio Start +++++++++++++++ */
    case 'radio':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="input-group input-type-radio"><ul></ul></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container ul').append('<li><input type="radio" id="radio' + i + '" name="radio"><label for="radio' + i + '">Label for radio ' + i + '</label></li>');
      }
      var htmlstring = $('.result-container').html();
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>.input-group.input-type-radio>ul>li*' + count + '>input#radio$[name="radio"type="radio"]+label[for="radio$"]{Label for radio $}</textarea>');
      break;

      /* +++++++++++ Radio End +++++++++++++++ */

      /* +++++++++++ Dummy para Start +++++++++++++++ */
    case 'dummyPara':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="sample-data"></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container .sample-data').append('<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>');
      }
      var cnt = $('.sample-data').contents();
      $('.sample-data').replaceWith(cnt);
      var htmlstring = $('.result-container').html();
      console.log(htmlstring)
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>EMMET is not available</textarea>');

      break;

      /* +++++++++++ Dummy para End +++++++++++++++ */

      /* +++++++++++ Dummy Div Start +++++++++++++++ */
    case 'dummyDiv':
      $('.result-container textarea').html();
      $('.result-container').html('<div class="sample-data"></div>').attr('data-id', id);
      for (i = 1; i <= count; i++) {
        $('.result-container .sample-data').append('<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>');
      }
      var cnt = $('.sample-data').contents();
      $('.sample-data').replaceWith(cnt);
      var htmlstring = $('.result-container').html();
      console.log(htmlstring)
      $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');
      $('.emmet-result-container').html('<textarea>EMMET is not available</textarea>');

      break;
      /* +++++++++++ Dummy Div End +++++++++++++++ */
  }
}

function genrateoverlayHTML(id, animin, animout) {
  $('.result-container textarea').html();
  $('.result-container').html('<div class="overlay-box" id="' + id + '"></div>').attr('data-id', 'overlayCode');
  $('.result-container .overlay-box').append('<div class="overlay-header"> <p>Overlay Header</p> </div><div class="overlay-content"><p>Overlay Content</p></div><div class="overlay-footer"> <p>Overlay footer</p> </div>');
  var htmlstring = $('.result-container').html();
  $('.result-container ').html('<textarea>' + htmlstring + '</textarea>');

  $('.emmet-result-container').html('<textarea>.overlay-box#' + id + '>(.overlay-header>p{Overlay Content})+(.overlay-content>p{Overlay Content})+(.overlay-footer>p{Overlay Content})</textarea>');

}
