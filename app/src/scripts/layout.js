//import header
import { headerTitle } from '../components/header.js';
import { AddModalForm } from '../components/AddModalForm.js';
class Layout {
    constructor() {
        this.titleHeader();
    }

    titleHeader() {
        const titleParagraph = document.querySelector('.header-title');
        
        console.log(titleParagraph.innerHTML = headerTitle('Management'));
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Layout(); 
  });
 


