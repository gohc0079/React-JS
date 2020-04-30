import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import { ITEMS_PER_PAGE } from "../constants/constants";
import { Link } from "react-router-dom";

const TableDetails = ({ details, headers }, ref) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    let subDetails = [];
    const incrementalIdx = page * ITEMS_PER_PAGE;
    let lastIndex = null;
    if (incrementalIdx + ITEMS_PER_PAGE - 1 < details.length - 1) {
      lastIndex = incrementalIdx + ITEMS_PER_PAGE;
    } else {
      lastIndex = details.length;
    }
    subDetails = details.slice(incrementalIdx, lastIndex);
    setData(subDetails);
  }, [page, details]);
  const handlePaging = (pageIndex) => {
    setPage((prevPage) => {
      if (
        prevPage + pageIndex > -1 &&
        prevPage + pageIndex < Math.ceil(details.length / ITEMS_PER_PAGE)
      ) {
        return prevPage + pageIndex;
      }
      return prevPage;
    });
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {headers.map((headerCol) => (
            <Table.HeaderCell>{headerCol}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ _id, description, completed }, index) => {
          return (
            <Table.Row key={_id}>
              <Table.Cell>{index + (2 * page + 1)}</Table.Cell>
              <Table.Cell>{description}</Table.Cell>
              <Table.Cell>{completed ? "Yes" : "No"}</Table.Cell>
              <Table.Cell textAlign="center">
                <Link className="view-btn" to={`/editTask/${_id}`}>
                  View
                </Link>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Menu floated="right" pagination>
              <Menu.Item
                as="a"
                icon
                onClick={() => {
                  handlePaging(-1);
                }}
              >
                <Icon name="chevron left" />
              </Menu.Item>
              {details.length > 0 ? (
                [...Array(Math.ceil(details.length / ITEMS_PER_PAGE))].map(
                  (e, i) => (
                    <Menu.Item
                      ref={ref}
                      onClick={() => {
                        setPage(i);
                      }}
                    >
                      {i + 1}
                    </Menu.Item>
                  )
                )
              ) : (
                <React.Fragment></React.Fragment>
              )}

              <Menu.Item
                as="a"
                icon
                onClick={() => {
                  handlePaging(1);
                }}
              >
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
export default React.forwardRef(TableDetails);
