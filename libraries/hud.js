// adds text readout on the screen

function hud(titleTxt, codeTxt, pTxt, logTxt){
  let hudBgCol = color(0,0,10,1); 
  let gutter = 20;
  let hudWidth = width - (gutter*2);
  let hudHeight = 50;
  let hudTxtSize = gutter/1.5;
  let txtBaseline = gutter + hudHeight - gutter;
  let lineWeight = width/500;
  let titleTxtInset = gutter*2;
  let logWidth = textWidth(logTxt);
  let pWidth = textWidth(pTxt);
  let titleWidth = textWidth(titleTxt);
  let logTxtInset = width - (gutter*2.5) - logWidth;
  let pTxtInset = logTxtInset - (gutter*2) - pWidth;
  let codeTxtInset = titleTxtInset + (gutter*5) + titleWidth;

  
  
    push();
      noStroke();
      fill(hudBgCol);
      rect(gutter, gutter, hudWidth, hudHeight)

      stroke(100);
      strokeWeight(lineWeight);
      line(codeTxtInset-10, gutter*2, codeTxtInset-10, hudHeight);
      line(logTxtInset-10,  gutter*2, logTxtInset-10, hudHeight);
      line(pTxtInset-10,  gutter*2, pTxtInset-10, hudHeight);
      
      noStroke();
      fill(255);
      textAlign (LEFT,BASELINE);
      textSize(hudTxtSize);
      textFont(bodyFont);
      text(pTxt, pTxtInset, txtBaseline );
      text(codeTxt, codeTxtInset, txtBaseline );
      text(logTxt, logTxtInset, txtBaseline );
      textSize(hudTxtSize*1.2)
      textFont(titleFont);
      text(titleTxt, titleTxtInset, txtBaseline);
    pop() ;
}
