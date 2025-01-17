import React from 'react';
import './pagination.css';

export default function Pagination({pages, currentPage, setCurrentPage}) {
    
    const generatedPages = [];
    for(let i = 1; i <= pages; i++){
        generatedPages.push(i);
    }

    return (
        <div className="pagination">
            <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)} 
                className="page previous">
                Previous
            </button>
            {generatedPages.map(page => 
                <div onClick={() => setCurrentPage(page)} key={page} className={currentPage === page ? 'page active' : 'page'}>
                    {page}
                </div>
            )}
            <button 
                disabled={currentPage === pages}
                onClick={() => setCurrentPage(prev => prev + 1)} 
                className="page next">
                Next
            </button>
        </div>
    )
}
