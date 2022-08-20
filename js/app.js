const DOMStrings = {
    accordionBoxTitleBar: document.querySelectorAll('.accordion-box__title-bar'),
    accordionBoxContentWrap: document.querySelectorAll('.accordion-box__content-wrap'),
    accordionBoxButton: document.querySelectorAll('.accordion-box__button'),
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
            // If 'true', we toggle the 'hide', 'accordion-box__button-active' and the current accordion class name which is represented
            // by the current 'i' that will get the item from the 'accordionButtonClasses' object property .
            // If 'false', we push the corresponding 'i' to our object property 'itemsToHideArray'.
            if (i == j) {
                //console.log(`i ${i} is equal to j ${j}`)
                DOMStrings.accordionBoxContentWrap[i].classList.toggle('hide')
                DOMStrings.accordionBoxButton[i].classList.toggle('accordion-box__button-active')
                DOMStrings.accordionBoxButton[i].classList.toggle(DOMStrings.accordionButtonClasses[i])             
                // for (let l = 0; l < DOMStrings.accordionButtonClasses.length; l++) {
                //     if (DOMStrings.accordionBoxButton[i].classList.contains(DOMStrings.accordionButtonClasses[l])) {
                //         DOMStrings.accordionBoxButton[i].classList.remove(DOMStrings.accordionButtonClasses[l])
                //     }
                // }
            } else { 
                //console.log(`i ${i} is not equal to j ${j}`)
                DOMStrings.itemsToHideArray.push(j)
            }
        }
        // We loop through our object property 'itemsToHideArray' and use the 'i' to represent it to our
        // 'accordionBoxContentWrap' object property which are the <div> with class 'accordion-box__content-wrap'.
        // This way, each element will have a class 'hide' and the class 'accordion-box__button-active' removed.
        for (let k = 0; k < DOMStrings.itemsToHideArray.length; k++) {
            DOMStrings.accordionBoxContentWrap[DOMStrings.itemsToHideArray[k]].classList.add('hide')
            DOMStrings.accordionBoxButton[DOMStrings.itemsToHideArray[k]].classList.add(`${DOMStrings.accordionButtonClasses[DOMStrings.itemsToHideArray[k]]}`)
            DOMStrings.accordionBoxButton[DOMStrings.itemsToHideArray[k]].classList.remove('accordion-box__button-active')
        }
        console.log('itemsToHideArray ', DOMStrings.itemsToHideArray)
        DOMStrings.itemsToHideArray = []
    })
}

// Page load
document.addEventListener('DOMContentLoaded', function() {
    // We push the 'i' value to the array property 'accordionArray' so that we can use it for comparison during an
    // accordion button is clicked. In our case, 'accordionArray: [0, 1, 2]'.
    for (let i = 0; i < DOMStrings.accordionBoxContentWrap.length; i++) {
        DOMStrings.accordionBoxContentWrap[i].classList.add('hide')
        DOMStrings.accordionArray.push(i)        
    }
    console.log(DOMStrings.accordionArray)
})