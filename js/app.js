const DOMStrings = {
    accordionBoxTitleBar: document.querySelectorAll('.accordion-box__title-bar'),
    accordionBoxContentWrap: document.querySelectorAll('.accordion-box__content-wrap'),
    accordionBoxButton: document.querySelectorAll('.accordion-box__button'),
    accordionBoxButtonIconSVG: document.querySelectorAll('.accordion-box__button-icon-svg'),
    accordionArray: [],
    itemsToHideArray: [],
    accordionButtonClasses: [
        'accordion-box__button-value-proposition', 
        'accordion-box__button-form', 
        'accordion-box__button-faq'
    ]
}

// Accordion button click event.
// Current accordion button click will be represented by 'i' which is the index of our for loop.
for (let i = 0; i < DOMStrings.accordionBoxTitleBar.length; i++) {
    // Attaching click event to each accordion button.
    DOMStrings.accordionBoxTitleBar[i].addEventListener('click', function(e) {        
        e.preventDefault()
        // We loop through our object property 'accordionArray' to check if it is equal to 'i' which is represented
        // by the current accordion button clicked.
        for (let j = 0; j < DOMStrings.accordionArray.length; j++) {
            if (i == j) {
                // If 'true', we do the following
                // 1 We toggle the 'hide' class of each 'accordion-box__content-wrap' class represented by 'i'.
                // 2 We toggle the 'accordion-box__button-active', the current accordion class name which is represented
                //   by the current 'i' that will get the item from the 'accordionButtonClasses' object property, toggle the 'accordion-box__button-icon-svg-down'
                //   to rotate the icon.
                // 3 We toggle the corresponding value from our 'accordionButtonClasses' which is represented by 'i'.
                // 4 We toggle the current 'accordion-box__button-icon-svg-down' class represented by 'i' to rotate the SVG icon.
                DOMStrings.accordionBoxContentWrap[i].classList.toggle('hide')
                DOMStrings.accordionBoxButton[i].classList.toggle('accordion-box__button-active')
                DOMStrings.accordionBoxButton[i].classList.toggle(DOMStrings.accordionButtonClasses[i])
                DOMStrings.accordionBoxButtonIconSVG[i].classList.toggle('accordion-box__button-icon-svg-down')
            } else { 
                // If 'false', we push the value of 'j' which is not equal to 'i'.
                DOMStrings.itemsToHideArray.push(j)
            }
        }
        // We loop through our object property 'itemsToHideArray' and use the 'i' to represent it to our
        // 'accordionBoxContentWrap' object property which are the <div> with class 'accordion-box__content-wrap'.
        // This way, each element will have a class 'hide' and the class 'accordion-box__button-active' removed.
        for (let k = 0; k < DOMStrings.itemsToHideArray.length; k++) {
            DOMStrings.accordionBoxContentWrap[DOMStrings.itemsToHideArray[k]].classList.add('hide')
            DOMStrings.accordionBoxButton[DOMStrings.itemsToHideArray[k]].classList.add(DOMStrings.accordionButtonClasses[DOMStrings.itemsToHideArray[k]])
            DOMStrings.accordionBoxButton[DOMStrings.itemsToHideArray[k]].classList.remove('accordion-box__button-active')            
            DOMStrings.accordionBoxButtonIconSVG[i].classList.toggle('accordion-box__button-icon-svg-down')
            // There will be a scenario where we click an accordion button to display the corresponding hidden element, then we click
            // another accordion button to display another and the SVG icon from the previous accordion button will not rotate. This if block
            // solves the problem by looking which element doesn't have a class of 'accordion-box__button-icon-svg-down', that means it is the 
            // previous accordion button that was clicked. Then, we remove that class making the SVG icon rotate.
            if (!DOMStrings.accordionBoxButtonIconSVG[DOMStrings.itemsToHideArray[k]].classList.contains('accordion-box__button-icon-svg-down')) {
                DOMStrings.accordionBoxButtonIconSVG[DOMStrings.itemsToHideArray[k]].classList.add('accordion-box__button-icon-svg-down')
            }
        }
        // In each click of an accordion button, we need to reset the 'itemsToHideArray' object property.
        DOMStrings.itemsToHideArray = []
    })
}

// Page load
document.addEventListener('DOMContentLoaded', function() {
    // We push the 'i' value to the array property 'accordionArray' so that we can use it for comparison during an
    // accordion button is clicked. In our case, 'accordionArray: [0, 1, 2]'.
    for (let i = 0; i < DOMStrings.accordionBoxContentWrap.length; i++) {
        DOMStrings.accordionBoxContentWrap[i].classList.add('hide')
        DOMStrings.accordionBoxButtonIconSVG[i].classList.add('accordion-box__button-icon-svg-down')
        DOMStrings.accordionArray.push(i)        
    }
})