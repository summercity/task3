import React from 'react';
import './style.css';

export default class Pagination extends React.Component {
  pageController = (move) => {
    const { totalPages } = this.props.pageData;
    const {handleTasksPageChange } = this.props;
    let currentPage = this.props.pageData.page;

    if (move === '@prev') {
      if (currentPage !== 1 && currentPage > 0) {
        currentPage -= 1;
      }
    } else if (move === '@next') {
      if (currentPage !== totalPages && currentPage < totalPages) {
        currentPage += 1;
        }
    } else if (move === '@skip-prev') {
      if (currentPage !== 1) {
        currentPage -= 5;
        currentPage = currentPage < 0 ? 1 : currentPage;
      }
    } else if (move === '@skip-next') {
      if (currentPage !== totalPages) {
        currentPage += 5;
        currentPage = currentPage > totalPages ? totalPages : currentPage;
      }
    }

    handleTasksPageChange(currentPage);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  render() {
    const { pageData } = this.props;
    return (
    <div className="Pagination">
      <button
        className="Pagination-btn"
        onClick={this.pageController.bind(this, '@skip-prev')}
      >
          <span>{`<<`}</span>
      </button>
      <button
        className="Pagination-btn"
        onClick={this.pageController.bind(this, '@prev')}
      >
          <span>{`<`}</span>
      </button>
      <div className={`classes.pages`}>
          <span>{`Page: ${pageData.page} of ${pageData.totalPages}`}</span>
      </div>
      <button
        className="Pagination-btn"
        onClick={this.pageController.bind(this, '@next')}
      >
          <span>{`>`}</span>
      </button>
      <button
        className="Pagination-btn"
        onClick={this.pageController.bind(this, '@skip-next')}
      >
          <span>{`>>`}</span>
      </button>
    </div>
    );
  }
}