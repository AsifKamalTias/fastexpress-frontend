import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const Pagination = (props) => {
    const [totalPages , setTotalPages] = useState(null);

    const changePaginateUrl = (e) => {
        props.updatePaginatedUrl(e.target.attributes.getNamedItem('paginatelink').value);
        makeActive(e.target);
        
    }

    const makeActive = (element) => {
        document.querySelectorAll('.page-item').forEach(element => {
            element.classList.remove('active-pagination');
        });
        element.classList.add('active-pagination');
    }


    useEffect(() => {
        axios
            .get(props.url)
            .then(response => {
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
                <ul className="pagination">
                    {/* <li className="page-item page-link" paginatelink={previousPageUrl} onClick={changePaginateUrl}>
                        <span aria-hidden="true">&laquo;</span>
                    </li> */}
                    {Array.from(Array(totalPages).keys()).map(pageNumber => (
                        <li key={uuidv4()} className="page-item page-link" paginatelink={`${props.url}?page=${pageNumber+1}`} onClick={changePaginateUrl}>{pageNumber+1}</li> 
                    ))}
                    {/* <li className="page-item page-link" paginatelink={nextPageUrl} onClick={changePaginateUrl}>
                        <span aria-hidden="true">&raquo;</span>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
    
}
export default Pagination;
