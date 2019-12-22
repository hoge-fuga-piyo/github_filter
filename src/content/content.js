function getFilterHtmlStr() {
  return '<div class="d-flex flex-justify-between mb-3">'
          + '<details class="details-reset details-overlay subnav-search-context">' 
            + '<summary class="btn aria-haspopup="menu" role="button">'
              + 'Filters'
              + '<span class="dropdown-caret"></span>'
            + '</summary>'
            + '<details-menu class="SelectMenu" role="menu">'
              + '<div class="SelectMenu-modal">'
                + '<div class="SelectMenu-list">'
                  + '<a class="SelectMenu-item" role="menuitem">'
                    + 'merged'
                  + '</a>'
                  + '<a class="SelectMenu-item" role="menuitem">'
                    + 'created'
                  + '</a>'
                + '</div>'
              + '</div>'
            + '</details-menu>'
          + '</details>'
          + '<input type="text" class="form-control subnav-search-input input-contrast width-full">'
        + '</div>';
}

$('#filters-select-menu').parent().parent().after(getFilterHtmlStr());