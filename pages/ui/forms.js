import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import React, { useState, useEffect } from "react";
import checkauthenticated from "../../services/checkauthenticated";

const Forms = () => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  // const authentication = false;
  // const router = useRouter();
  // router.push('/login');
  checkauthenticated();

  return (
    <Row>
      <Col>
        <div>
          <Alert
            style={visible ? { display: "block" } : { display: "none" }}
            color="success"
            isOpen={visible}
            toggle={onDismiss.bind(null)}
          >
            Your attendance has been upload succesfully
          </Alert>
        </div>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h5" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Upload Attendance
          </CardTitle>
          <CardBody>
            <Form>
              {/* <FormGroup>
                <Label tag="h6" for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label tag="h6" for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup> */}
              <FormGroup>
                <Label tag="h6" for="exampleDate">
                  Select Date
                </Label>
                <Input
                  id="date__field"
                  name="date"
                  type="date"
                  style={{ width: "min-content" }}
                />
              </FormGroup>
              <FormGroup>
                <Label tag="h6" for="exampleSelect">
                  Select Project
                </Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Select Project</option>
                  <option>R1</option>
                  <option>Woodruff</option>
                  <option>BRD</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label tag="h6" for="exampleText">
                  Description
                </Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label tag="h6" for="exampleSelect">
                  Number of hours spent
                </Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Input>
              </FormGroup>
              {/* <FormGroup>
                <Label tag="h6" for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is some placeholder block-level help text for the above input. Its a bit
                  lighter and easily wraps to a new line.
                </FormText>
              </FormGroup> */}
              <FormGroup tag="fieldset">
                {/* <legend>Work type</legend> */}
                <Label tag="h6" for="exampleText">
                  Work type
                </Label>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label tag="h7" check>
                    Management
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label tag="h7" check>
                    Development
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label tag="h7" check>
                    Testing
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" />{" "}
                <Label tag="h7" check>
                  Verify data before submitting
                </Label>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
