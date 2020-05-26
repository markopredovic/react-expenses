import React, { useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";

const FilterExpenses = ({ currentFilter, updateFilter }) => {
  const selectMonthRef = useRef(null);
  const selectYearRef = useRef(null);

  useEffect(() => {
    selectMonthRef.current.value = currentFilter.month;
    selectYearRef.current.value = currentFilter.year;
  }, [currentFilter]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newFilter = {
      month: selectMonthRef.current.value,
      year: selectYearRef.current.value,
    };

    updateFilter(newFilter);
  };

  return (
    <Form className="d-flex align-items-end mb-3" onSubmit={onSubmitHandler}>
      <Form.Group controlId="filter.month" className="mr-3 mb-0">
        <Form.Label>Month:</Form.Label>
        <Form.Control as="select" ref={selectMonthRef}>
          <option value="0">Jan</option>
          <option value="1">Feb</option>
          <option value="2">Mar</option>
          <option value="3">Apr</option>
          <option value="4">May</option>
          <option value="5">Jun</option>
          <option value="6">Jul</option>
          <option value="7">Aug</option>
          <option value="8">Sep</option>
          <option value="9">Oct</option>
          <option value="10">Nov</option>
          <option value="11">Dec</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="filter.year" className="mr-3 mb-0">
        <Form.Label>Year:</Form.Label>
        <Form.Control as="select" ref={selectYearRef}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Filter
      </Button>
    </Form>
  );
};

export default FilterExpenses;
