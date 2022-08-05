import { useState, useEffect } from "react";
import axios from "axios";

const Pagination = (props) => {
    const [previousPageUrl , setPreviousPageUrl] = useState(null);
    const [nextPageUrl , setNextPageUrl] = useState(null);
    const [firstPageNumber , setFirstPageNumber] = useState(null);
    const [lastPageNumber , setLastPageNumber] = useState(null);
    const [totalPages , setTotalPages] = useState(null);

    const changePaginateUrl = (e) => {
        props.updatePaginatedUrl(e.target.attributes.getNamedItem('paginateLink').value);
        //console.log(e.target.attributes.getNamedItem('paginateLink').value);
    }


    useEffect(() => {
        axios
            .get(props.url)
            .then(response => {
                setPreviousPageUrl(response.data.prev_page_url);
                setNextPageUrl(response.data.next_page_url);
                setFirstPageNumber(response.data.from);
                setLastPageNumber(response.data.last_page);
                setTotalPages(response.data.last_page-response.data.from+1);
            })
            .catch(error => {
                console.log(error);
            }
            );
    }, [props.url]);

    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href={previousPageUrl} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    {Array.from(Array(totalPages).keys()).map(pageNumber => (
                        // <li class="page-item"><a class="page-link" href={`${props.url}?page=${pageNumber+1}`}>{pageNumber+1}</a></li>
                        <li className="page-item page-link" paginateLink={`${props.url}?page=${pageNumber+1}`} onClick={changePaginateUrl}>{pageNumber+1}</li>
                    ))}
                    <li class="page-item">
                    <a class="page-link" href={nextPageUrl} aria-label="N8ext">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
    
}
export default Pagination;
