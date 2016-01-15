/* =============================================================
 * collapse.js v1
 * Author Levi Sitters
 * A really simple collapse plugin
 * options: collapsibleContent: collapsible content selector
 * BEING WORKED ON BY MATT MCCAIN...
 * ============================================================ */

(function($){
 
  $.fn.extend({ 
    //pass the options variable to the function
    collapse: function(options)
    { 
      //Set the default values, use comma to separate the settings, example:
      var defaults =
      {
        collapsibleContent: '.c-table-content',
        keepOpenClass: 'opened',
        onOpen: function(){},
        onClose: function(){}
      };
                     
      var userDefinedOptions =  $.extend(defaults, options);
      return this.each(function()
      {  
        var $this = $(this);
        var o = userDefinedOptions;
        
        if((!$this.next(o.collapsibleContent).hasClass(o.keepOpenClass)) && (typeof($this.next(o.collapsibleContent).attr('style')) === 'undefined'))
        {
          $this.next(o.collapsibleContent).css('display','none');
        }
        
        var swapIcon = function(currentElement,collapsibleContent)
        {
          if ($(currentElement).next(collapsibleContent).css('display') === 'none')
          {
              currentElement.find('.pnx-icon-left').addClass('pnx-icon-twistie-up');
              currentElement.find('.pnx-icon-left').removeClass('pnx-icon-twistie-down');
          }
          else
          {
              currentElement.find('.pnx-icon-left').addClass('pnx-icon-twistie-down');
              currentElement.find('.pnx-icon-left').removeClass('pnx-icon-twistie-up');
          }
        };
        swapIcon($this.next(), o.collapsibleContent);
        
        var callback = function(currentElement)
        { 
          if ($this.next(o.collapsibleContent).css('display') === 'none')
          {
            o.onOpen(currentElement);
          }
          else
          {
            o.onClose(currentElement);
          }
        };
        $this.unbind('click');
        $this.click(function() {
          callback($this);
          $(this).next(o.collapsibleContent).slideToggle(300,function(){swapIcon($this,o.collapsibleContent);});
        });             
      });
    }
  });
     
})(jQuery);


