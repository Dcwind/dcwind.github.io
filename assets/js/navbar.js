// Author: Daniel Ekwuazi

// var navBar = function() {
//
//     var lines = '<header id="mu-header"><div class="container"><div class="row"><div class="col-lg-12 col-md-12"><div class="mu-header-area"><div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><div class="mu-header-top-left"><div class="mu-top-email"><i class="fa fa-envelope"></i><span>askjsl@jslnippon.jp</span></div><div class="mu-top-phone"><i class="fa fa-phone"></i><span>(+66) 81 844 0233</span></div></div></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><div class="mu-header-top-right"><nav><ul class="mu-top-social-nav"><li><a href="#"><span class="fa fa-facebook"></span></a></li><li><a href="#"><span class="fa fa-twitter"></span></a></li><li><a href="#"><span class="fa fa-google-plus"></span></a></li><li><a href="#"><span class="fa fa-linkedin"></span></a></li><li><a href="#"><span class="fa fa-youtube"></span></a></li></ul></nav></div></div></div></div></div></div></div></header><!-- End header  --><!-- Start menu --><section id="mu-menu"><nav class="navbar navbar-default" role="navigation"><div class="container"><div class="navbar-header"><!-- FOR MOBILE VIEW COLLAPSED BUTTON --><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><!-- LOGO --><!-- TEXT BASED LOGO --><a class="navbar-brand" href="index.html"><i class=""></i><span>JSL Thailand</span></a><!-- IMG BASED LOGO  --><!-- <a class="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="logo"></a> --></div><div id="navbar" class="navbar-collapse collapse"><ul id="top-menu" class="nav navbar-nav navbar-right main-nav"><li class="active"><a href="index.html">Home</a></li><li><a href="course.html">Course</a></li></li><li><a href="gallery.html">Gallery</a></li><!--<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog <span class="fa fa-angle-down"></span></a><ul class="dropdown-menu" role="menu"><li><a href="blog-archive.html">Blog Archive</a></li><li><a href="blog-single.html">Blog Single</a></li></ul></li>--><li><a href="contact.html">Contact</a></li><!--<li><a href="404.html">404 Page</a></li><li><a href="#" id="mu-search-icon"><i class="fa fa-search"></i></a></li>--></ul></div><!--/.nav-collapse --></div></nav></section>';
//
//
//
//         document.write(lines);
// }

var contact = function() {

    var cinfo = [
        '<address>',
                  '<p>1-1-1, Nakanishi, Urasoe-city, Okinawa pref.,</p>',
                  '<p>901-2125,Japan</p>',
                  '<p>Phone: (+81) 98-875-1456 </p>',
                  '<p>FAX: +81-98-875-1456</p>',
                  '<p>Email: askjsl@jslnippon.jp</p>',
        '</address>'].join(' ');
    document.write(cinfo);
}

var cc = function(){

     var lines = '<p>&copy; All Right Reserved. Designed by <a href="#" rel="nofollow">___</a></p>';
    document.write(lines);
}

var navBar = function(){
      var lines = [

        '<header id="mu-header">',
        '<div class="container">',
            '<div class="row">',
              '<div class="col-lg-12 col-md-12">',
                '<div class="mu-header-area">',
                  '<div class="row">',
                    '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">',
                      '<div class="mu-header-top-left">',
                        '<div class="mu-top-email">',
                          '<i class="fa fa-envelope"></i>',
                          '<span>askjsl@jslnippon.jp</span>',
                        '</div>',
                        '<div class="mu-top-phone">',
                          '<i class="fa fa-phone"></i>',
                          '<span>(+66) 81 844 0233</span>',
                        '</div>',
                      '</div>',
                    '</div>',
                    '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">',
                      '<div class="mu-header-top-right">',
                        '<nav>',
                          '<ul class="mu-top-social-nav">',
                            '<li><a href="#"><span class="fa fa-facebook"></span></a></li>',
                            '<li><a href="#"><span class="fa fa-twitter"></span></a></li>',
                            '<li><a href="#"><span class="fa fa-google-plus"></span></a></li>',
                            '<li><a href="#"><span class="fa fa-linkedin"></span></a></li>',
                            '<li><a href="#"><span class="fa fa-youtube"></span></a></li>',
                          '</ul>',
                        '</nav>',
                      '</div>',
                    '</div>',
                  '</div>',
                '</div>',
              '</div>',
            '</div>',
          '</div>',
        '</header>',
        '<!-- End header  -->',
        '<!-- Start menu -->',
        '<section id="mu-menu">',
          '<nav class="navbar navbar-default" role="navigation">',
            '<div class="container">',
              '<div class="navbar-header">',
                '<!-- FOR MOBILE VIEW COLLAPSED BUTTON -->',
                '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">',
                  '<span class="sr-only">Toggle navigation</span>',
                  '<span class="icon-bar"></span>',
                  '<span class="icon-bar"></span>',
                  '<span class="icon-bar"></span>',
                '</button>',
                '<!-- LOGO -->',
                '<!-- TEXT BASED LOGO -->',
                '<a class="navbar-brand" href="index-eng.html"><i class=""></i><span>JSL THAILAND</span></a>',
                '<!-- IMG BASED LOGO  -->',
              '</div>',
              '<div id="navbar" class="navbar-collapse collapse">',
                '<ul id="top-menu" class="nav navbar-nav navbar-right main-nav">',
                  '<li class="active"><a href="index-eng.html">Home</a></li>',
                  '<li><a href="course-eng.html">Courses</a></li>',
                  '<li><a href="gallery-eng.html">Gallery</a></li>',

                  '<li><a href="contact-eng.html">Contact</a></li>',

                '</ul>',
              '</div><!--/.nav-collapse -->',
            '</div>',
          '</nav>',
        '</section>'

                  ].join(' ');

        document.write(lines);
}

var navBarThai = function(){
  var lines = [

    '<header id="mu-header">',
    '<div class="container">',
        '<div class="row">',
          '<div class="col-lg-12 col-md-12">',
            '<div class="mu-header-area">',
              '<div class="row">',
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">',
                  '<div class="mu-header-top-left">',
                    '<div class="mu-top-email">',
                      '<i class="fa fa-envelope"></i>',
                      '<span>askjsl@jslnippon.jp</span>',
                    '</div>',
                    '<div class="mu-top-phone">',
                      '<i class="fa fa-phone"></i>',
                      '<span>(+66) 81 844 0233</span>',
                    '</div>',
                  '</div>',
                '</div>',
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">',
                  '<div class="mu-header-top-right">',
                    '<nav>',
                      '<ul class="mu-top-social-nav">',
                        '<li><a href="#"><span class="fa fa-facebook"></span></a></li>',
                        '<li><a href="#"><span class="fa fa-twitter"></span></a></li>',
                        '<li><a href="#"><span class="fa fa-google-plus"></span></a></li>',
                        '<li><a href="#"><span class="fa fa-linkedin"></span></a></li>',
                        '<li><a href="#"><span class="fa fa-youtube"></span></a></li>',
                      '</ul>',
                    '</nav>',
                  '</div>',
                '</div>',
              '</div>',
            '</div>',
          '</div>',
        '</div>',
      '</div>',
    '</header>',
    '<!-- End header  -->',
    '<!-- Start menu -->',
    '<section id="mu-menu">',
      '<nav class="navbar navbar-default" role="navigation">',
        '<div class="container">',
          '<div class="navbar-header">',
            '<!-- FOR MOBILE VIEW COLLAPSED BUTTON -->',
            '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">',
              '<span class="sr-only">Toggle navigation</span>',
              '<span class="icon-bar"></span>',
              '<span class="icon-bar"></span>',
              '<span class="icon-bar"></span>',
            '</button>',
            '<!-- LOGO -->',
            '<!-- TEXT BASED LOGO -->',
            '<a class="navbar-brand" href="index.html"><i class=""></i><span>JSL ประเทศไทย</span></a>',
            '<!-- IMG BASED LOGO  -->',
            '<!-- <a class="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="logo"></a> -->',
          '</div>',
          '<div id="navbar" class="navbar-collapse collapse">',
            '<ul id="top-menu" class="nav navbar-nav navbar-right main-nav">',
              '<li class="active"><a href="index.html">Home</a></li>',
              '<li><a href="course.html">Courses</a></li>',
              '<li><a href="gallery.html">Gallery</a></li>',

              '<li><a href="contact.html">Contact</a></li>',

            '</ul>',
          '</div><!--/.nav-collapse -->',
        '</div>',
      '</nav>',
    '</section>'

              ].join(' ');

          document.write(lines);

}


var footer = function(val){
        var lines = [
          '<footer id="mu-footer">',
            '<!-- start footer top -->',
            '<div class="mu-footer-top">',
              '<div class="container">',
                '<div class="mu-footer-top-area">',
                  '<div class="row">',
                    '<div class="col-lg-3 col-md-3 col-sm-3">',
                      '<div class="mu-footer-widget">',
                        '<h4>Information</h4>',
                        '<ul>',
                          '<li><a href="index.html#about-us">About Us</a></li>',
                          '<li><a href="',val,'">Course</a></li>',

                        '</ul>',
                      '</div>',
                    '</div>',


                    '<div class="col-lg-3 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-3">',
                      '<div class="mu-footer-widget">',
                        '<h4>Contact</h4>',
                        '<address>',
                                  '<p>1-1-1, Nakanishi, Urasoe-city, Okinawa pref.,</p>',
                                  '<p>901-2125,Japan</p>',
                                  '<p>Phone: (+81) 98-875-1456 </p>',
                                  '<p>FAX: +81-98-875-1456</p>',
                                  '<p>Email: askjsl@jslnippon.jp</p>',
                        '</address>',
                      '</div>',
                    '</div>',
                  '</div>',
                '</div>',
              '</div>',
            '</div>',
            '<!-- end footer top -->',
            '<!-- start footer bottom -->',
            '<div class="mu-footer-bottom">',
              '<div class="container">',
                '<div class="mu-footer-bottom-area">',
                  '<p>&copy; All Right Reserved. Designed by <a href="https://github.com/Dcwind" rel="nofollow">CE Daniel</a></p>',
                '</div>',
              '</div>',
            '</div>',
            '<!-- end footer bottom -->',
          '</footer>'

        ].join(' ');

        document.write(lines);
}

var lang = function(){

        var lines = [

          '<header id="mu-header">',
            '<div class="container">',
              '<div class="row">',
                '<div class="col-lg-12 col-md-12">',
                  '<div class="mu-header-area">',
                    '<div class="row">',
                      '<div class="col-lg-6 col-lg-offset-6 col-md-6 col-md-offset-6 col-sm-6 col-xs-6">',
                        '<div class="mu-header-top-left">',
                          '<div class=" pull-right">',
                            '<span> <a href="index.html"><span>Thai</span></a> <span>&nbsp | &nbsp</span> <a href="index-eng.html"><span>English</span></a> </span>',
                          '</div>',
                        '</div>',
                      '</div>',

                    '</div>',
                  '</div>',
                '</div>',
              '</div>',
            '</div>',
          '</header>'

        ].join(' ');

        document.write(lines);
}
