import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import { ITEMS_PER_PAGE } from "../constants/constants";

const TableDetails = ({ details, headers }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  let subArrLen = 0;
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

  if (details.length > 0) {
    subArrLen = parseInt(details.length / ITEMS_PER_PAGE);
    subArrLen = details.length % 2 === 1 ? ++subArrLen : subArrLen;
  }

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
            </Table.Row>
          );
        })}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              {details.length > 0 ? (
                [...Array(subArrLen)].map((e, i) => (
                  <Menu.Item
                    onClick={() => {
                      setPage(i);
                    }}
                  >
                    {i + 1}
                  </Menu.Item>
                ))
              ) : (
                <React.Fragment></React.Fragment>
              )}

              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
export default TableDetails;
