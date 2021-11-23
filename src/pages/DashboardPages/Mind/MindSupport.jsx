import React, { useState } from 'react';
import NavBar from "../../../components/NavBar";
import MindResourcesDirectory from "../../../components/MindComponents/MindResourcesDirectory";
import { Nav } from "react-bootstrap";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { Dropdown, Form } from "react-bootstrap";
import Footer from "../../../components/Footer";
import sample_provider from "../../../components/images/sample_provider.png";
import "./MindSupport.css";
import DashboardNav from "../../../components/DashboardElements/DashboardNav";

const pathname = window.location.pathname;

const MindSupport = () => {
  

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

  

  return (
    <div>
      <NavBar />
      <div className="dashboard-main">
        <DashboardNav />

        {/* Main Content */}
        <div className="dashboard-content-support">
          <div className="div2">
            {/* Modal Popup for Chat */}
            <div>
              <Button
                onClick={toggle}
                className="chat-btn"
              >
                Chat Now
              </Button>
              <Modal
                isOpen={isOpen}
              >
                <ModalHeader toggle={toggle}>
                  Chatting with Dr. Karen Nguyen
                </ModalHeader>
                <ModalBody>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Time left: 56min
                  </CardSubtitle>
                  <div className="chat-box">
                    <CardText>
                      <div className="therapist">
                        Hi Sophie! How has your week been?
                      </div>
                      <div className="user">It's been a bit rough. </div>
                      <div className="therapist">
                        I'm sorry to hear about that. What has been troubling
                        you most?
                      </div>
                      <div className="user">
                        I feel uncertain about everything and I feel stuck.
                        Like I have no direction.
                      </div>
                      <div className="therapist">
                        When we don't feel confident in the path we're on,
                        it's normal to feel the way you do. Tell me a bit
                        more.
                      </div>
                    </CardText>
                  </div>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value="My parents have always had high expectations of me and I have no sense of direction because I don't know who I am."
                  />
                  <Button>Send</Button>
  
                </ModalBody>
                <ModalFooter>
                  <Button onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
            <img src={sample_provider} alt="" />
          </div>


          {/* Type of therapy */}
          <div className="div3">
            <Form>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  className="pillar-dropdown-toggle"
                  id="dropdown-basic"
                >
                  {pathname.includes("Type")
                    ? "Female"
                    : pathname.includes("female")
                    ? "Male"
                    : pathname.includes("male")
                    ? "Non-binary"
                    : "Type"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                  //   className="pillar-dropdown-menu"
                  //   href="/dashboard/mind"
                  >
                    Coach
                  </Dropdown.Item>
                  <Dropdown.Item
                  //   className="pillar-dropdown-menu"
                  //   href="/dashboard/fitness"
                  >
                    Mentor
                  </Dropdown.Item>
                  <Dropdown.Item
                  //   className="pillar-dropdown-menu"
                  //   href="/dashboard/rest"
                  >
                    Therapist
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Label
                className="me-sm-2"
                htmlFor="inlineFormCustomSelect"
                visuallyHidden
              >
                Preference
              </Form.Label>
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
              >
                <option value="0">Gender</option>
                <option value="1">Female</option>
                <option value="2">Male</option>
                <option value="3">Non-binary</option>
              </Form.Select>
              <Form.Label
                className="me-sm-2"
                htmlFor="inlineFormCustomSelect"
                visuallyHidden
              >
                Preference
              </Form.Label>
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
              >
                <option value="0">Ethnicity Preferred</option>
                <option value="1">Black and African American</option>
                <option value="2">Asian</option>
                <option value="3">Hispanic and Latino</option>
                <option value="4">Native American</option>
                <option value="5">Pacific Islander</option>
              </Form.Select>
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
              >
                <option value="0">Sexuality</option>
                <option value="1">LGBTQ</option>
                <option value="2">Lesbian</option>
                <option value="3">Bisexual</option>
              </Form.Select>
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
              >
                <option value="0">Language</option>
                <option value="1">Spanish</option>
                <option value="1">Chinese</option>
                <option value="2">French</option>
                <option value="3">German</option>
                <option value="3">Arabic</option>
                <option value="3">ASL</option>
              </Form.Select>
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
              >
                <option value="0">Faith</option>
                <option value="1">Buddhist</option>
                <option value="2">Hindu</option>
                <option value="3">Islam</option>
                <option value="3">Jewish</option>
              </Form.Select>
              <Form.Check
                type="checkbox"
                id="customControlAutosizing"
                label="Remember my preference"
              />
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MindSupport;
