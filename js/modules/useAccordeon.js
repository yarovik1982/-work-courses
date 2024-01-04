export const useAccordeon = () => {
   const items = document.querySelectorAll('.accordion-panel')

   items.forEach(item => {
      item.addEventListener('click', e => {
         const curr = e.target
         const accordeonTarget = curr.closest('.accordion-panel')
         if(curr){
            items.forEach(item => {
               if(item !== accordeonTarget) {
                  item.classList.remove('active')
               }
            })
            accordeonTarget.classList.toggle('active')
         }
      })
   })
}

