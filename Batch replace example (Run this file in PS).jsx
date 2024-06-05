
#include "script/Batch Mockup Smart Object Replacement.jsx" 

var output = {
  path: './_output files', // Outputs next to the mockup psd
  format: 'jpg', // 'jpg', 'png', 'tif', 'psd', 'pdf'
  filename: '@mockup - @input', 
};

mockups([
  
  // Mockup #1
  {
    output: output, 
    mockupPath: '$/assets/Pillow.psd', 'seof8.psd', 'ToteBagBlackWhite.psd', 'ToteBagPinkBG.psd', 'TshirtBeigeGirl.psd', 'TshirtZoom.psd', 'TwoMug.psd'
    smartObjects: [
      
      // Smart object #1
      {
        target: 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8'
        input: [
          './_input files'
        ], 
        inputNested: true,
        align: 'center center',
        resize: 'fill', 
      },
      
      // You could have more smart objects per mockup file...
      // {},
      
    ]
  },
  
  // You could have more mockup files...
  // {},
    
]);

