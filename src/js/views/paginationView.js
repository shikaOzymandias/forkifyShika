import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerRender(handler) {
    this._parentElement.addEventListener('click', function(e){
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generatePrev () {
    return `
    <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${curPage-1}</span>
        </button>
    `;
  }
  _generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage) ;
    const curPage = this._data.page;
    // Page 1 , there are other Pages
    if (curPage === 1 && numPages > 1){
      return `
          <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                  <span>Page ${curPage+1}</span>
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                  </svg>
          </button>
      `;
    }

    // Last Page
    if (curPage === numPages && numPages > 1){
      return `
      <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${curPage-1}</span>
       </button>
      `;
    }
    // Other Pages(no first , no last)
    if (curPage < numPages){
      return `
      <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${curPage-1}</span>
       </button>
       <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                  <span>Page ${curPage+1}</span>
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                  </svg>
       </button>
      `;
    }

    // Page 1 , there are no other Pages
    return '';
  }
}

export default new PaginationView();