import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardColumns,
  CardSubtitle,
  CardBody,
  Container,
  UncontrolledCollapse,
} from "reactstrap";
import Moment from "react-moment";


const NcaabOdds = (props) => {
  return (
    <Container fluid style={{ margin: "20px" }}>
      <h1>NBA Odds</h1>

      <CardColumns>
        {props.ncaabodds.map((ncaabGame) => {
          return (
            <Card key={ncaabGame.teams[0]}>
              <CardBody>
                <CardHeader className="text-center" width="95%" margin="10px">
                  <strong>
                    {ncaabGame.teams[0]} @ {ncaabGame.teams[1]}
                  </strong>
                </CardHeader>
                <br></br>
                <CardSubtitle>
                  <strong>
                    <Moment unix format="MM/DD/YY">
                      {ncaabGame.commence_time}
                    </Moment>
                  </strong>
                  <br></br>
                  <strong>
                    <Moment unix format="LT">
                      {ncaabGame.commence_time}
                    </Moment>
                  </strong>
                </CardSubtitle>
                <br></br>
                {/* <CardSubtitle>
                  <CardImg
                    src={nbaLogos[ncaabGame.teams[0]]}
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                    alt="Card image cap"
                  />
                  {" @ "}
                  <CardImg
                    src={nbaLogos[ncaabGame.teams[1]]}
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                    alt="Card image cap"
                  />
                </CardSubtitle> */}
                <Button id="toggler">Odds</Button>
                <UncontrolledCollapse
                  toggler={"toggler"}
                  style={{ marginTop: "10px" }}
                >
                  {ncaabGame.sites
                    .filter(
                      (betsite) =>
                        betsite.site_nice === "FanDuel" ||
                        betsite.site_nice === "DraftKings" ||
                        betsite.site_nice === "PointsBet (US)"
                    )
                    .map((site) => {
                      return (
                        <p key={site.site_nice}>
                          {site.site_nice}
                          <li>
                                {ncaabGame.teams[0]}:{" "}
                                {site.odds.spreads.points[0]}{" "}
                                {site.odds.spreads.odds[0]}
                              </li>
                              <li>
                                {ncaabGame.teams[1]}:{" "}
                                {site.odds.spreads.points[1]}{" "}
                                {site.odds.spreads.odds[1]}
                              </li>
                        </p>
                      );
                    })}
                </UncontrolledCollapse>
              </CardBody>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
  );
};

export default NcaabOdds;
