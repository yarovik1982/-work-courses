export const useAccordeon = () => {
   const items = document.querySelectorAll('.accordeon-item')

   items.forEach(item => {
      item.addEventListener('click', e => {
         const curr = e.target
         const accordeonTarget = curr.closest('.accordeon-item')
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

