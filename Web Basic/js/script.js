 //<![CDATA[
    /*
      Sticky Header. Auto hide on scroll bottom, show on scroll top.
      By: www.igniel.com
    */
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("header").classList.remove('show');
        }
        else { document.getElementById("header").classList.add('show');
        }
        prevScrollpos = currentScrollPos;
      }
      
    //]]> 