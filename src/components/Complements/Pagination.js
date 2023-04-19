import React, { useState } from "react";

function Pagination(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = props.pageSize || 10; // default to 10 if not provided
    const totalPages = Math.ceil(props.data.length / pageSize);

    const handleClick = (event, page) => {
        event.preventDefault();
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={currentPage === i ? "active" : null}>
                    <a href="#" onClick={(e) => handleClick(e, i)}>
                        {i}
                    </a>
                </li>
            );
        }
        return pageNumbers;
    };
    const renderListItems = () => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return props.data.slice(start, end).map((item, index) => (
            <tr key={start + index}>
                <td>{start + index + 1}</td>
                <td>{item.id}</td>
                <td>{item.fullname}</td>
                <td>{item.dateofbirth}</td>
                <td>{item.gender ? "Male" : "Female"}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td style={{ color: item.status_Account === true ? '#118408' : '#E23F31', fontWeight: 'bold' }}>{item.status_Account === true ? 'Active' : 'Ban'}</td>
                <td>
                    <form>
                        <button style={{border:'none', backgroundColor:'#2DC98A', color:'white', width:'55px', borderRadius:'2px'}}>Edit</button>
                    </form>
                </td>
            </tr>
        ));
    };

    return (
        <>
            <tbody>{renderListItems()}</tbody>
            <tr className="pagination">{renderPageNumbers()}</tr>

        </>
    );
}

export default Pagination;
