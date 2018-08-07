var Banner = (function(imgMini, img){
  
var count = 0;

    
    
    
  return {
      count: function() {
        return count;
      }

    , increment: function() {
        return count += 1;
      }
  };
})();