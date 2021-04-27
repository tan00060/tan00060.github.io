import React from "react";
import "./Projects.css";
import { Tabs, Tab, Card, Button } from "react-bootstrap";

export default function Projects() {
  return (
    <div className="tabContainer">
      <h1 className="projectTitle">PROJECTS</h1>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="profile" title="Javascript">
          <Card className="nextStyle">
            <Card.Body>
              <Card.Title>Movie Searcher</Card.Title>
              <Card.Text>
                Using the TMDB api, allow users to search up different movie
                titles.
              </Card.Text>
              <Button variant="primary">
                <a
                  className="demoProjects"
                  href="https://tan00060.github.io/SearchMovie/#home"
                >
                  Demo
                </a>
              </Button>{" "}
              <Button variant="primary">Github</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Reviewer</Card.Title>
              <Card.Text>
                Mobile application created with cordova that allows users to
                take pictures from their mobiles devices. Lets the user rate and
                a describe their photo.
              </Card.Text>
              <Button variant="primary">Demo</Button>{" "}
              <Button variant="primary">Github</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Playr</Card.Title>
              <Card.Text>
                Mobile application created with cordova that allows users to
                play music.
              </Card.Text>
              <Button variant="primary">Demo</Button>{" "}
              <Button variant="primary">Github</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Tundra</Card.Title>
              <Card.Text>
                Mobile application created with cordova based on Tinder.
              </Card.Text>
              <Button variant="primary">Demo</Button>{" "}
              <Button variant="primary">Github</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Weather web application</Card.Title>
              <Card.Text>
                Web application that allows you to check the weather.
              </Card.Text>
              <Button variant="primary">
                <a
                  className="demoProjects"
                  href="https://tan00060.github.io/mad9135-c1-html5-weather/"
                >
                  Demo
                </a>
              </Button>{" "}
              <Button variant="primary">Github</Button>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="ReactJS" title="ReactJS">
          <Card>
            <Card.Body>
              <Card.Title>ScrapApps</Card.Title>
              <Card.Text>
                Progressive web application that allows the user to explore the
                instruments from Scrap Arts Music.
              </Card.Text>
              <Button variant="primary">Demo</Button>{" "}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Simple CRUD web application</Card.Title>
              <Card.Text>Create, Remove, Update, Delete items.</Card.Text>
              <Button variant="primary">
                <a
                  className="demoProjects"
                  href="https://stoic-easley-8c828d.netlify.app/"
                >
                  Demo
                </a>
              </Button>{" "}
              <Button variant="primary">
                <a
                  className="demoProjects"
                  href="https://github.com/tan00060/projectOne_CRUD"
                >
                  GitHub
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="React Native" title="React Native">
          <Card>
            <Card.Body>
              <Card.Title>Yelp Clone</Card.Title>
              <Card.Text>Yelp clone to locate resturants near you.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="Xamarin" title="Xamarin">
          <Card>
            <Card.Body>
              <Card.Title>Microsoft Cognitive Services </Card.Title>
              <Card.Text>
                Two page Xamarin application that builds/deploys on the
                following three platforms: Android ,iOS, UWP
              </Card.Text>
              <Button variant="primary">
                <a
                  className="demoProjects"
                  href="https://github.com/tan00060/XamarinWindowsFinal"
                >
                  GitHub
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="Swift" title="Swift">
          <Card>
            <Card.Body>
              <Card.Title>Apple Passport Application</Card.Title>
              <Card.Text>
                An application build in Xcode using swiftUI. This application
                allows the user to use their geolocation built into their device
                to store their destinations that they have traveled to.
              </Card.Text>
              <Button variant="primary">
                <a
                  className="demoProjects"
                  href="https://github.com/tan00060/MADD-iOS-Final"
                >
                  GitHub
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
