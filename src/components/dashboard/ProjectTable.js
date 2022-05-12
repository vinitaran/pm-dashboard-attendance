import Image from "next/image";
import { Card, CardBody, CardTitle, CardSubtitle, Table, Form, FormGroup, Label, Input } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Jonathan Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    hours: "2",
    date: "20/10/2022",
    desc: "Developing frontend",
    type: "Development"
  },
  {
    avatar: user2,
    name: "Martin Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    hours: "5",
    date: "19/10/2022",
    desc: "User story validation",
    type: "Testing"
  },
  {
    avatar: user3,
    name: "Gulshan Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    hours: "7",
    date: "18/10/2022",
    desc: "Working user stories",
    type: "Development"
  },
  {
    avatar: user4,
    name: "Pavar Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    hours: "2",
    date: "17/10/2022",
    desc: "User story validation",
    type: "Management"
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    hours: "5",
    date: "20/10/2022",
    desc: "User story validation",
    type: "Development"
  },
];

const ProjectTables = () => {
  return (
    <Card>
      <CardBody>
      <CardTitle tag="h5">Attendance Record Listing</CardTitle>
        <CardSubtitle className="mb-4 text-muted" tag="h6">
          Overview of the projects
        </CardSubtitle>
        <Form>
        <FormGroup>
                <Label for="exampleSelect" tag="h5">Select Employee</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Select Employee</option>
                  <option>Vinita Rane</option>
                  <option>Manish Mishra</option>
                  <option>Ishita Chauhan</option>
                </Input>
              </FormGroup>
        </Form>
        
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                <th>Date</th>
                <th>Project</th>

                <th>Hours</th>

                <th>Description</th>

                <th>Work type</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  {/* <td>
                    <div className="d-flex align-items-center p-2">
                      <Image
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td> */}
                  <td>{tdata.date}</td>
                  <td>{tdata.project}</td>
                  <td>
                    {tdata.hours}
                  </td>

                  <td>{tdata.desc}</td>
                  <td>{tdata.type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectTables;
