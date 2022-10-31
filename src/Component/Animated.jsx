import React from "react";
import AnimatedCursor from "react-animated-cursor";

export const Animated=()=>{
    return(
        <AnimatedCursor
        innerSize={20}
      outerSize={30}
      color='222, 218, 218'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
        
        />
    )
}